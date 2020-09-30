import React, { useState, useRef, useEffect, useContext } from 'react';
import './HealthyOptions.scss';
import FoodsTable from './foodsTable/FoodsTable';
import { useMediaQuery } from 'react-responsive';
import { FooterContext } from '../context/UserContext';
import { getTableData, getHeader } from '../config/service/FoodService';

function HealthyOptions(props) {

    const currentOption = useRef(),
        [tableData, setTableData] = useState(null),
        isSmall = useMediaQuery({query: '(max-width: 768px)'}),
        [userToken, setUserToken] = useState(props.match.params.handle),
        [header, setHeader] = useState(''),
        [date, setDate] = useState(''),
        healthyOptionsRef = useRef(),
        { setShowFooter } = useContext(FooterContext);

    useEffect(() => {
        document.body.style.backgroundColor = 'white';

        return () => {
            document.body.style.backgroundColor = '';
        }
    }, []);

    useEffect(() => {
        getHeader()
            .then(res => {
                setHeader(res);
                const date = new Date();
                setDate(
                    date.toLocaleString('default', { month: 'long' }) + ' ' + date.getDate() + ', ' 
                        + date.getFullYear()
                );
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        fetchTable('Healthy');
    }, []);

    useEffect(() => {
        if (props && props.match && props.match.params && props.match.params.handle) {
            setUserToken(props.match.params.handle);
            setShowFooter(false);
            healthyOptionsRef.current.style.marginTop = '-25px';

            return () => {setShowFooter(true)};
        }
    }, [props.match.params]);

    const fetchTable = (option) => {
        getTableData(option)
            .then(res => {
                setTableData(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const activateTab = (selectedTab) => {
        currentOption.current.classList.remove('active');
        selectedTab.classList.add('active');
        currentOption.current = selectedTab;
    }

    const switchOptions = (event) => {
        if (currentOption.current !== event.target) {
            switch (event.target.id) {
                case 'just-healthy' :
                    activateTab(event.target);
                    fetchTable('Healthy');
                    break;
                case 'just-vegetarian' :
                    activateTab(event.target);
                    fetchTable('Vegetarian');
                    break;
                case 'just-vegan' :
                    activateTab(event.target);
                    fetchTable('Vegan');
                    break;
                case 'gluten-free' :
                    activateTab(event.target);
                    fetchTable('GlutenFree');
                    break;
                default :
                    break;
            }
        }
    }

    return (
        <div className='healthy-options' ref={healthyOptionsRef}>
            <div className='text-center'>
                <h3>{header.day}</h3>
                <h4>{date}</h4>
            </div>
            <div className='options-bubbles'>
                <button id='just-healthy' ref={currentOption} onClick={switchOptions} className='bubble active' aria-controls='just-healthy'>
                    Just <br/> Healthy
                </button>
                <button id='just-vegetarian' onClick={switchOptions} className='bubble' aria-controls='just-vegetarian'>
                    Just <br/> Vegetarian
                </button>
                {isSmall && <br/>}
                <button id='just-vegan' onClick={switchOptions} className='bubble' aria-controls='just-vegan'>
                    Just <br/> Vegan
                </button>
                <button id='gluten-free' onClick={switchOptions} className='bubble' aria-controls='gluten-free'>
                    Gluten <br/> Free
                </button>
            </div>
            <FoodsTable data={tableData} userToken={userToken}/>
        </div>
    );
}
  
export default HealthyOptions;
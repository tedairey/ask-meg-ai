import React, { useState, useRef, useEffect, useContext } from 'react';
import './HealthyOptions.scss';
import FoodsTable from './foodsTable/FoodsTable';
import { justHealthy } from './dummycode.js';
import { justVegetarian } from './dummycode';
import { justVegan } from './dummycode';
import { glutenFree } from './dummycode';
import { useMediaQuery } from 'react-responsive';
import { FooterContext } from '../context/UserContext';
import { getTableData } from '../config/service/FoodService';

function HealthyOptions(props) {

    const currentOption = useRef(),
        [tableData, setTableData] = useState(justHealthy),
        isSmall = useMediaQuery({query: '(max-width: 768px)'}),
        [userToken, setUserToken] = useState(props.match.params.handle),
        { setShowFooter } = useContext(FooterContext);

    useEffect(() => {
        setShowFooter(false);
        document.body.style.backgroundColor = 'white';

        return () => {
            setShowFooter(true);
            document.body.style.backgroundColor = '';
        }
    }, []);

    // useEffect(() => {
    //     fetchTable('Healthy');
    // }, []);

    useEffect(() => {
        if (props && props.match && props.match.params && props.match.params.handle) {
            setUserToken(props.match.params.handle);
        }
    }, [props.match.params]);

    const fetchTable = (option) => {
        getTableData(option)
            .then(res => {
                console.log(res);
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
                    setTableData(justHealthy);
                    break;
                case 'just-vegetarian' :
                    activateTab(event.target);
                    setTableData(justVegetarian);
                    break;
                case 'just-vegan' :
                    activateTab(event.target);
                    setTableData(justVegan)
                    break;
                case 'gluten-free' :
                    activateTab(event.target);
                    setTableData(glutenFree)
                    break;
                default :
                    break;
            }
        }
    }

    return (
        <div className='healthy-options'>
            <div className='page-content'>
                <div className='text-center'>
                    <h3>Thoughtful Thursdays</h3>
                    <h4>September 10, 2020</h4>
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
        </div>
    );
}
  
export default HealthyOptions;
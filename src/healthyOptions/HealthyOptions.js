import React, { useState, useRef, useEffect, useContext } from 'react';
import './HealthyOptions.scss';
import FoodsTable from './foodsTable/FoodsTable';
import { useMediaQuery } from 'react-responsive';
import { AppUserContext } from '../context/UserContext';
import { getTableData, getHeader } from '../config/service/FoodService';
import HealthyImage from './HealthyImage.png'
import VegetarianImage from './VegetarianImage.png'
import VeganImage from './VeganImage.png'
import GlutenFreeImage from './GlutenFreeImage.png'

function HealthyOptions(props) {

    const currentOption = useRef(),
        [tableData, setTableData] = useState(null),
        isSmall = useMediaQuery({query: '(max-width: 768px)'}),
        [userToken, setUserToken] = useState(props.match.params.handle),
        [header, setHeader] = useState(''),
        healthyOptionsRef = useRef(),
        [isLoaded, setIsLoaded] = useState(false),
        { setIsAppUser } = useContext(AppUserContext);

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
            if (!props.match.params.handle.includes('_')) {
                setUserToken(props.match.params.handle);
                setIsAppUser(true);
                healthyOptionsRef.current.style.marginTop = '-25px';

                return () => {setIsAppUser(false)};
            }
        }
    }, [props.match.params]);

    const fetchTable = (option) => {
        getTableData(option)
            .then(res => {
                setTableData(res);
                setIsLoaded(true);
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
        let target = event.target;
        while (target.nodeName !== 'BUTTON') {
            target = target.parentElement;
        }
        if (currentOption.current !== target) {
            setIsLoaded(false);
            switch (target.id) {
                case 'just-healthy' :
                    activateTab(target);
                    fetchTable('Healthy');
                    break;
                case 'just-vegetarian' :
                    activateTab(target);
                    fetchTable('Vegetarian');
                    break;
                case 'just-vegan' :
                    activateTab(target);
                    fetchTable('Vegan');
                    break;
                case 'gluten-free' :
                    activateTab(target);
                    fetchTable('GlutenFree');
                    break;
                default :
                    break;
            }
        }
    }

    return (
        <div className='healthy-options' ref={healthyOptionsRef}>
            <div className='options-bubbles'>
                <button id='just-healthy' ref={currentOption} onClick={switchOptions} className='bubble active' aria-controls='just-healthy'>
                    <img id='just-healthy-image' className='healthy-image' alt="Healthy bubble" src={HealthyImage}/>
                    <label className='options-label'>Healthy</label>
                </button>
                <button id='just-vegetarian' onClick={switchOptions} className='bubble' aria-controls='just-vegetarian'>
                    <img id='vegetarian-image' className='healthy-image' alt="Vegetarian bubble" src={VegetarianImage}/>
                    <label className='options-label'>Vegetarian</label>
                </button>
                {isSmall && <br/>}
                <button id='just-vegan' onClick={switchOptions} className='bubble' aria-controls='just-vegan'>
                    <img id='vegan-image' className='healthy-image' alt="Vegan bubble" src={VeganImage}/>
                    <label className='options-label'>Vegan</label>
                </button>
                <button id='gluten-free' onClick={switchOptions} className='bubble' aria-controls='gluten-free'>
                    <img id='gluten-free-image' className='healthy-image' alt="Gluten Free bubble" src={GlutenFreeImage}/>
                    <label className='options-label'>Gluten Free</label>
                </button>
            </div>
            <div>
                <h5>{header.day}</h5>
            </div>
            <FoodsTable data={tableData} userToken={userToken} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
        </div>
    );
}
  
export default HealthyOptions;
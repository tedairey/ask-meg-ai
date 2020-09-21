import React, { useState, useRef, useEffect, useContext } from 'react';
import './HealthyOptions.scss';
import FoodsTable from './foodsTable/FoodsTable';
import { justHealthy } from './dummycode.js';
import { justVegetarian } from './dummycode';
import { justVegan } from './dummycode';
import { glutenFree } from './dummycode';
import { useMediaQuery } from 'react-responsive';
import { FooterContext } from '../context/UserContext';

function HealthyOptions(props) {

    const currentOption = useRef(),
        [tableData, setTableData] = useState(justHealthy),
        isSmall = useMediaQuery({query: '(max-width: 768px)'}),
        { showFooter, setShowFooter } = useContext(FooterContext);

    useEffect(() => {
        setShowFooter(false);
        document.body.style.backgroundColor = 'white';

        return () => {
            setShowFooter(true);
            !isSmall && (document.body.style.backgroundColor = '');
        }
    }, []);

    const activateTab = (selectedTab) => {
        currentOption.current.parentElement.classList.remove('active');
        selectedTab.parentElement.classList.add('active');
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
                <div className='title-text text-center'>
                    <h1>Thoughtful Thursdays</h1>
                    <h4>September 10, 2020</h4>
                </div>
                <div className='options-bubbles'>
                    <button id='just-healthy' ref={currentOption} onClick={switchOptions} className='bubble' aria-controls='just-healthy'>
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
                <FoodsTable data={tableData}/>
            </div>
        </div>
    );
}
  
export default HealthyOptions;
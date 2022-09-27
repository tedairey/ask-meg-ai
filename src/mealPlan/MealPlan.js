import React, { useState, useRef, useEffect, useContext } from 'react';
import './MealPlan.scss';
import MealPlanTable from './MealPlanTable';
import { AppUserContext } from '../context/UserContext';
import { getMealPlan } from '../config/service/FoodService';
import { Tab, Tabs } from 'react-bootstrap';

function MealPlan(props) {

    const [tableData, setTableData] = useState([]),
        [userToken, setUserToken] = useState(props.match.params.handle),
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
        const userToken = props && props.match && props.match.params && props.match.params.handle;
        if (userToken && !userToken.includes('_')) {
            setUserToken(userToken);
            fetchTable(userToken, 0)
            setIsAppUser(true);
            healthyOptionsRef.current.style.marginTop = '-25px';

            return () => setIsAppUser(false);
        }
    }, [props.match.params]);

    const fetchTable = (userToken, tab) => {
        let meal = "Breakfast"
        switch (tab) {
            case '1' :
                meal = "Lunch"
                break;
            case '2' :
                meal = "Snack"
                break;
            case '3' :
                meal = "Dinner"
                break;
            default :
                break;
        }

        getMealPlan(userToken, meal)
            .then(res => {
                // Remove the first element, as nothing is in index 0
                Object.keys(res).forEach(key => {
                    res[key].shift()
                })
                setTableData(res);
                setIsLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const switchOptions = (tab) => {
        fetchTable(userToken, tab)
    }

    return (
        <div className='healthy-options' ref={healthyOptionsRef}>
            <Tabs
                onSelect={switchOptions}
                className="options-tabs"
            >
                <Tab eventKey={0} tabClassName="options-tab" title="Breakfast"/>
                <Tab eventKey={1} tabClassName="options-tab" title="Lunch"/>
                <Tab eventKey={2} tabClassName="options-tab" title="Snack"/>
                <Tab eventKey={3} tabClassName="options-tab" title="Dinner"/>
            </Tabs>
            <MealPlanTable data={tableData} userToken={userToken} isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
        </div>
    );
}
  
export default MealPlan;
import React, { useEffect, useState, useContext } from 'react';
import './MealPlanTable.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { addToShoppingList, removeFromShoppingList, getShoppingList } from '../config/service/FoodService';
import { UserContext } from '../context/UserContext';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function MealPlanTable (props) {

    const [list, setList] = useState([]),
        { data, userToken, isLoaded } = props,
        { user } = useContext(UserContext);
    
    useEffect(() => {
        if (data) {
            props.setIsLoaded(false);
            if ((user && user.shoppingId) || userToken) {
                fetchShoppingList()
            }
        }   
    }, [props.data, user])

    const fetchShoppingList = () => {
        getShoppingList((user && user.shoppingId) || userToken)
            .then(list => {
                setList(list);
                props.setIsLoaded(true);
            })
            .catch(err => {
                console.log(err);
                props.setIsLoaded(true);
            }) 
    }

    const addItem = (description) => {
        addToShoppingList(description, (user && user.shoppingId) || props.userToken)
            .then(res => {
                fetchShoppingList()
            })
            .catch(err => {
                console.log(err);
            });
    }

    const removeItem = (description) => {
        removeFromShoppingList(description, (user && user.shoppingId) || props.userToken)
            .then(res => {
                fetchShoppingList()
            })
            .catch(err => {
                console.log(err);
            });
    }
    
    return (
        <div className='foods-table'>
            {isLoaded ?
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th colSpan='4'>
                                Meal Plan Suggestions From Your Coach
                            </th>
                        </tr>
                        <tr>
                            <th colSpan={'1'}>
                                Day
                            </th>
                            <th colSpan={'1'}>
                                Source
                            </th>
                            <th colSpan={'1'}>
                                Food, Tap for Nutrients
                            </th>
                            <th colSpan={'1'}>
                                {list &&
                                    "Add to list?"
                                }
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.food && data.food.map((food, index) => 
                            <tr key={index}>
                                <td>
                                    <strong>{data.day[index]}</strong>
                                </td>
                                <td>
                                    {data.source[index]}
                                </td>
                                <td>
                                    <span>
                                        <OverlayTrigger
                                            key={'tooltip-' + index}
                                            placement={'top'}
                                            overlay={
                                                <Tooltip>
                                                    {data.nutrients[index]}
                                                </Tooltip>
                                            }
                                        >
                                            <span key={index}>{food}</span>
                                        </OverlayTrigger>
                                    </span>
                                </td>
                                {list &&
                                    <td className='add-remove'>
                                        {!list.includes(food) ?
                                            <button 
                                                className='add' 
                                                onClick={(e) => addItem(food)}
                                            >
                                                <FaPlus/>
                                            </button> :
                                            <button 
                                                className='remove' 
                                                onClick={(e) => removeItem(food)}
                                            >
                                                <FaMinus/>
                                            </button>
                                        }
                                    </td>
                                }
                            </tr>
                        )}
                    </tbody>
                </table> :
                <div className='text-center'>
                    <div className='spinner-grow' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default MealPlanTable;
import React, { useEffect, useState, useContext } from 'react';
import './FoodsTable.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { addToShoppingList, removeFromShoppingList, getShoppingList } from '../../config/service/FoodService';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function FoodsTable (props) {

    const [list, setList] = useState([]),
        { data, userToken } = props,
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
            {props.isLoaded ?
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th colSpan='2'>
                                <div>
                                    Today’s Healthy Meal Options
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th colSpan={'2'}>
                                Hover over foods for nutrients
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(data).map(([meal, foods], index) => 
                            <>
                                <tr key={index} grouplength={data[meal].length}>
                                    <td colSpan='2'>
                                        <strong>{meal}</strong>
                                        {list &&
                                            <span className='shopping-list-link'>
                                                Add to shopping list?
                                            </span>
                                        }
                                    </td>
                                </tr>
                                {foods.map((food, index) =>
                                    <tr key={index}>
                                        <td>
                                            <span>
                                                <OverlayTrigger
                                                    key={'tooltip-' + index}
                                                    placement={'top'}
                                                    overlay={
                                                        <Tooltip>
                                                            {food.nutrients}
                                                        </Tooltip>
                                                    }
                                                >
                                                    <span key={index}>{food.description}</span>
                                                </OverlayTrigger>
                                            </span>
                                        </td>
                                        {list &&
                                            <td className='add-remove'>
                                                <button className={'add' + (list.includes(food.description) ? ' d-none' : '')} 
                                                    onClick={(e) => addItem(food.description)}>
                                                    <FaPlus/>
                                                </button>
                                                <button className={'remove' + (list.includes(food.description) ? '' : ' d-none')} 
                                                    onClick={(e) => removeItem(food.description)}>
                                                    <FaMinus/>
                                                </button>
                                            </td>
                                        }
                                    </tr>
                                )}
                            </>
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

export default FoodsTable;
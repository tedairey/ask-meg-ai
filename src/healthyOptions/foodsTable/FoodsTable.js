import React, { useEffect, useState, useContext } from 'react';
import './FoodsTable.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { addToShoppingList, removeFromShoppingList, getShoppingList } from '../../config/service/FoodService';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function FoodsTable (props) {

    const [tableData, setTableData] = useState(null),
        [isLoaded, setIsLoaded] = useState(false),
        { user } = useContext(UserContext);
    
    useEffect(() => {
        if (props.data) {
            setIsLoaded(false);
            if ((user && user.shoppingId) || props.userToken) {
                getShoppingList((user && user.shoppingId) || props.userToken)
                    .then(list => {
                        formatTable(list);
                    })
                    .catch(err => {
                        console.log(err);
                    }) 
            } 
            else {
                formatTable();
            }
        }   
    }, [props.data, user])

    const formatTable = (list) => {
        const tempTableData = [];
        let index = 0;
        for (const meal in props.data) {
            tempTableData.push(
                <tr key={index} grouplength={props.data[meal].length}>
                    <td colSpan='2'>
                        <strong>{meal}</strong>
                        {list &&
                            <span className='shopping-list-link'>
                                Add to shopping list?
                            </span>
                        }
                    </td>
                </tr>
            );
            index++;
            props.data[meal].forEach(food => {
                if (food.description) {
                    tempTableData.push(
                        <tr key={index}>
                            <td>
                                <span>
                                    {food.description}
                                </span>
                            </td>
                            {list &&
                                <td className='add-remove'>
                                    <button className={'add' + (list.includes(food.description) ? ' d-none' : '')} 
                                        onClick={addItem}>
                                        <FaPlus/>
                                    </button>
                                    <button className={'remove' + (list.includes(food.description) ? '' : ' d-none')} 
                                        onClick={removeItem}>
                                        <FaMinus/>
                                    </button>
                                </td>
                            }
                        </tr>
                    );
                    index++;
                }
            });
        }
        setTableData(tempTableData);
        setIsLoaded(true);
    }

    const addItem = (event) => {
        let tab = event.target.parentElement;
        while (tab.nodeName !== 'TD') {
            tab = tab.parentElement;
        }
        tab.children[1].classList.remove('d-none');
        tab.children[0].classList.add('d-none');
        const foodName = tab.parentElement.children[0].children[0].innerHTML;
        addToShoppingList(foodName, (user && user.shoppingId) || props.userToken)
            .then(res => {
                //success
            })
            .catch(err => {
                console.log(err);
            });
    }

    const removeItem = (event) => {
        let tab = event.target.parentElement;
        while (tab.nodeName !== 'TD') {
            tab = tab.parentElement;
        }
        tab.children[1].classList.add('d-none');
        tab.children[0].classList.remove('d-none');
        const foodName = tab.parentElement.children[0].children[0].innerHTML;
        removeFromShoppingList(foodName, (user && user.shoppingId) || props.userToken)
            .then(res => {
                //success
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
                        {tableData}
                    </tbody>
                    
                    {((user && user.shoppingId) || props.userToken) &&
                        <tfoot>
                            <tr>
                                <td colSpan='2'>
                                    <Link to={'/shopping-list' + (props.userToken ? ('/' + props.userToken) : '')}>
                                        Go to shopping list
                                    </Link>
                                </td>
                            </tr>
                        </tfoot>
                    }
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
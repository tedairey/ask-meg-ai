import React, { useEffect, useState } from 'react';
import './FoodsTable.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { addToShoppingList, removeFromShoppingList, getShoppingList } from '../../config/service/FoodService';
import { Link } from 'react-router-dom';

function FoodsTable (props) {

    const [tableData, setTableData] = useState(null),
        [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        getShoppingList(props.userToken)
            .then(list => {
                const tempTableData = [];
                let index = 0;
                for (const meal in props.data) {
                    tempTableData.push(
                        <tr key={index} grouplength='5'>
                            <td>
                                <strong>{meal}</strong>
                            </td>
                            <td className='shopping-list'>
                                Add to shopping list?
                            </td>
                        </tr>
                    );
                    index++;
                    for (const food in props.data[meal]) {
                        tempTableData.push(
                            <tr key={index}>
                                <td>
                                    <span data-toggle='popover' data-trigger='hover' data-placement='bottom' data-content='Protein 5.0gm, Fats 1.0gm, Carbs 33.0gm, 160 Cals, Serving 45g' data-original-title='' title=''>
                                        {food}
                                    </span>
                                </td>
                                <td className='add-remove'>
                                    <button className={'add' + (list.includes(food) ? ' d-none' : '')} 
                                        onClick={addItem}>
                                        <FaPlus/>
                                    </button>
                                    <button className={'remove' + (list.includes(food) ? '' : ' d-none')} 
                                        onClick={removeItem}>
                                        <FaMinus/>
                                    </button>
                                </td>
                            </tr>
                        );
                        index++;
                    }
                }
                setTableData(tempTableData);
                setIsLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })    
    }, [props])

    const addItem = (event) => {
        let tab = event.target.parentElement;
        while (tab.nodeName !== 'TD') {
            tab = tab.parentElement;
        }
        tab.children[1].classList.remove('d-none');
        tab.children[0].classList.add('d-none');
        const foodName = tab.parentElement.children[0].children[0].innerHTML;
        addToShoppingList(foodName, props.userToken)
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
        removeFromShoppingList(foodName, props.userToken)
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
                            <th>
                                Hover over foods for nutrients
                            </th>
                            <th className='text-right'>
                                <Link to={'/shopping-list' + (props.userToken ? ('/' + props.userToken) : '')}>
                                    Go to shopping list
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
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
import React, { useEffect, useState } from 'react';
import './FoodsTable.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';

function FoodsTable (props) {

    const [tableData, setTableData] = useState(null);
    
    useEffect(() => {
        const tempTableData = [];
        let index = 0;
        for (const meal in props.data) {
            tempTableData.push(
                <tr key={index} grouplength='5'>
                    <td colSpan='2'>
                        <strong>{meal}</strong>
                    </td>
                </tr>
            );
            index++;
            for (const food in props.data[meal]) {
                tempTableData.push(
                    <tr key={index}>
                        <td indentlevel='1'>
                            <span data-toggle='popover' data-trigger='hover' data-placement='bottom' data-content='Protein 5.0gm, Fats 1.0gm, Carbs 33.0gm, 160 Cals, Serving 45g' data-original-title='' title=''>
                                {food}
                            </span>
                        </td>
                        <td className='add-remove'>
                            <button className='add' onClick={addItem}>
                                <FaPlus/>
                            </button>
                            <button className='remove' onClick={removeItem}>
                                <FaMinus/>
                            </button>
                        </td>
                    </tr>
                );
                index++;
            }
        }
        setTableData(tempTableData);
    }, [props])

    const addItem = (event) => {
        let tab = event.target.parentElement;
        while (tab.nodeName !== 'TD') {
            tab = tab.parentElement;
        }
        tab.children[1].style.display = 'inline';
        tab.children[0].style.display = 'none';
    }

    const removeItem = (event) => {
        let tab = event.target.parentElement.parentElement;
        if (event.target.nodeName === 'path') {
            tab = tab.parentElement;
        }
        tab.children[1].style.display = 'none';
        tab.children[0].style.display = 'inline';
    }
    
    return (
        <div className='foods-table'>
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
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
    );
}

export default FoodsTable;
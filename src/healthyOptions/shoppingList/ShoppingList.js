import React, { useState, useEffect, useContext, useRef } from 'react';
import './ShoppingList.scss';
import { getShoppingList, removeFromShoppingList, addToShoppingList } from '../../config/service/FoodService';
import { useMediaQuery } from 'react-responsive';
import { AppUserContext, UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

function ShoppingList(props) {

    const [currentList, setCurrentList] = useState(),
        [newItem, setNewItem] = useState(''),
        [isLoaded, setIsLoaded] = useState(false),
        isSmall = useMediaQuery({query: '(max-width: 767px)'}),
        [userToken, setUserToken] = useState(''),
        { user } = useContext(UserContext),
        shoppingListRef = useRef(),
        { setIsAppUser } = useContext(AppUserContext);

    useEffect(() => {
        if (userToken || user) {
            fetchShoppingList();
        }
    }, [userToken]);

    useEffect(() => {
        if (props && props.match && props.match.params && props.match.params.handle) {
            setUserToken(props.match.params.handle);
            setIsAppUser(true);
            shoppingListRef.current.style.marginTop = '-25px';

            return () => {
                setIsAppUser(false);
            }
        }
    }, [props.match.params]);

    const fetchShoppingList = () => {
        setIsLoaded(false);
        getShoppingList((user && user.shoppingId) || userToken)
            .then(res => {
                formatList(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const formatList = (listObj) => {
        if (!listObj) {
            setCurrentList(<div className='text-center'>Your Shopping List is Empty</div>)
        }
        else {
            const tempList = [];
            for (const [index, item] of listObj.entries()) {
                if (item) {
                    tempList.push(<div className='list-item text' key={index}>
                        {item}
                        <span className='float-right'>
                            <input type='checkbox' className='list-checkbox' onChange={removeItem}/>
                        </span>
                    </div>)
                }
            }
            setCurrentList(tempList);
            setIsLoaded(true);
        }
    }

    const addItem = (event) => {
        addToShoppingList(newItem, (user && user.shoppingId) || userToken)
            .then(res => {
                setNewItem('');
                fetchShoppingList();
            })
            .catch(err => {
                console.log(err);
            })
    }

    const removeItem = (event) => {
        const listItem = event.target.parentElement.parentElement;
        removeFromShoppingList(listItem.innerText, (user && user.shoppingId) || userToken)
            .then(res => {
                setTimeout(() => {
                    listItem.style.display = 'none';
                }, 1000);
            })
            .catch(err => {
                console.log('err');
            })
    }

    const onItemChange = (event) => {
        setNewItem(event.target.value);
    }

    return (
        <div className='shopping-list' ref={shoppingListRef}>
            <h3 className='shopping-list-title'>Your Shopping List</h3>
            {isLoaded ?
                <ul className='list-container'>
                    {currentList}
                    <input placeholder='Add an item...' className='add-item' value={newItem} onChange={onItemChange}/>
                    <button className='btn add-item-button' onClick={addItem}>{isSmall ? 'Add' : 'Add Item'}</button>
                    <Link to={'/healthy-options' + (userToken ? ('/' + userToken) : '')} className='healthy-link'>
                        Go to healthy foods
                    </Link>
                </ul> :
                <div className='text-center'>
                    <div className='spinner-grow' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </div>
                </div>
            }
        </div>
    );
}
  
export default ShoppingList;
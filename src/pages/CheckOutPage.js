import React, { useEffect, useState } from 'react'

import UserForm from '../components/CheckOutComponents/UserForm'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateValue } from '../redux/MainReducer'

function CheckOutPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            dispatch(changeStateValue({ name: 'cartItems', value: parsedCart }));
        }
    }, []);
    const cartItems = useSelector(state => state.Data.cartItems)

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };
    return (
        <main>
            <div className="container">
                <UserForm isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} cartItems={cartItems}  />
            </div>
        </main>
    )
}

export default CheckOutPage
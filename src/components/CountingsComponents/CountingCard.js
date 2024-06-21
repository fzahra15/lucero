import React, { useEffect } from 'react'
import basket from '../img/basket-shopping-solid 1.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, changeStateValue } from '../../redux/MainReducer'
import alertify from 'alertifyjs';

function CountingCard({ data, updateLocalStorage }) {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.Data.cartItems);
    const count = useSelector(state => state.Data.usluqaCount)
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            const parsedCart = JSON.parse(storedCart);
            dispatch(changeStateValue({ name: 'cartItems', value: parsedCart }));
        }
    }, []);
    const handleAddToCart = (cartItem) => {
        const cartItemsArr = cartItems
        const isProductInCart = cartItemsArr.find(item => item.id === cartItem.id);

        if (isProductInCart) {
            alertify.alert('', 'Услуга уже в корзине')
        } else {
            dispatch(addToCart(cartItem));
            updateLocalStorage([...cartItems, { ...cartItem, count }])
            alertify.alert('', 'Услуга добавлена в корзину')
        }
    };

    return (
        <div className="counting_card">
            <div className="counting_card_top">
                <h3>{data.title}</h3>
                <div className="counting_card_top_right">
                    <p>{data.price}₽</p>
                    <div className="add_to_cart_two">
                        <button onClick={() => handleAddToCart(data)}>ДОБАВИТЬ В КОРЗИНУ</button>
                        <img src={basket} alt="" />
                    </div>
                </div>
            </div>
            <p dangerouslySetInnerHTML={{ __html: data.text }}></p>
        </div>
    )
}

export default CountingCard
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeStateValue } from '../../redux/MainReducer';
import alertify from 'alertifyjs';

function ProductsCard({ totalSum,data, setProdVisible, updateLocalStorage }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.Data.cartItems);
  const count = useSelector(state => state.Data.prodCount)
  useEffect(() => {
    if (cartItems.length === 0) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        dispatch(changeStateValue({ name: 'cartItems', value: parsedCart }));
      }
    }
  }, []);

  const handleAddToCart = (cartItem) => {
    const isProductInCart = cartItems.find(item => item.id === cartItem.id);

    if (isProductInCart) {
      alertify.alert('','В корзине уже есть данный товар. Его количество Вы можете редактировать в корзине.');
    } else {
      dispatch(addToCart(cartItem));
      updateLocalStorage([...cartItems, { ...cartItem, count }]);
      alertify.alert('','Товар добавлен в корзину.');
    }
  };

  const handleProdViewClick = (id) => {
    setProdVisible(true)
    dispatch(changeStateValue({
      name: "viewProdId",
      value: id
    }))
  }


  return (
    <>
      <div className="product_card_277">
        <div className="product_img">
          <img src={data.images[0].image_full_url} alt="" />
          <div className="prod_circle">
            <svg onClick={() => handleProdViewClick(data.id)} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
              fill="none">
              <path
                d="M0.499936 12.5174C0.499935 12.7935 0.723793 13.0174 0.999935 13.0174L5.49994 13.0174C5.77608 13.0174 5.99994 12.7935 5.99994 12.5174C5.99994 12.2413 5.77608 12.0174 5.49994 12.0174L1.49994 12.0174L1.49994 8.0174C1.49994 7.74125 1.27608 7.5174 0.999936 7.5174C0.723794 7.5174 0.499936 7.74125 0.499936 8.0174L0.499936 12.5174ZM5.44405 7.36617L0.646382 12.1638L1.35349 12.871L6.15116 8.07328L5.44405 7.36617Z"
                fill="#c90" />
              <path
                d="M13.0137 1.00018C13.0137 0.724038 12.7899 0.50018 12.5137 0.500181L8.01374 0.50018C7.73759 0.50018 7.51374 0.724038 7.51374 1.00018C7.51374 1.27632 7.73759 1.50018 8.01374 1.50018H12.0137L12.0137 5.50018C12.0137 5.77632 12.2376 6.00018 12.5137 6.00018C12.7899 6.00018 13.0137 5.77632 13.0137 5.50018L13.0137 1.00018ZM8.06962 6.1514L12.8673 1.35373L12.1602 0.646627L7.36251 5.4443L8.06962 6.1514Z"
                fill="#c90" />
            </svg>
          </div>
        </div>
        <div onClick={() => handleAddToCart(data)} className="add_to_cart_btn">
          <button>добавить в корзину</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20"
            fill="none">
            <path
              d="M10.3554 3.09682C10.5566 2.72807 10.4049 2.27494 10.0189 2.08432C9.63299 1.89369 9.15139 2.03744 8.95017 2.40307L5.87917 7.99997H3.05556C2.4717 7.99997 2 8.44684 2 8.99997C2 9.5531 2.4717 9.99997 3.05556 9.99997L4.76753 16.4844C5.00174 17.375 5.84618 18 6.81597 18H16.184C17.1538 18 17.9983 17.375 18.2325 16.4844L19.9444 9.99997C20.5283 9.99997 21 9.5531 21 8.99997C21 8.44684 20.5283 7.99997 19.9444 7.99997H17.1208L14.0498 2.40307C13.8486 2.03744 13.3703 1.89369 12.9811 2.08432C12.5918 2.27494 12.4434 2.72807 12.6446 3.09682L15.3363 7.99997H7.66372L10.3554 3.09682ZM8.33333 11.5V14.5C8.33333 14.775 8.09583 15 7.80556 15C7.51528 15 7.27778 14.775 7.27778 14.5V11.5C7.27778 11.225 7.51528 11 7.80556 11C8.09583 11 8.33333 11.225 8.33333 11.5ZM11.5 11C11.7903 11 12.0278 11.225 12.0278 11.5V14.5C12.0278 14.775 11.7903 15 11.5 15C11.2097 15 10.9722 14.775 10.9722 14.5V11.5C10.9722 11.225 11.2097 11 11.5 11ZM15.7222 11.5V14.5C15.7222 14.775 15.4847 15 15.1944 15C14.9042 15 14.6667 14.775 14.6667 14.5V11.5C14.6667 11.225 14.9042 11 15.1944 11C15.4847 11 15.7222 11.225 15.7222 11.5Z"
              fill="white" />
          </svg>
        </div>
        <div className="product_text">
          <h4>{data.title}</h4>
          <p>{data.price}₽</p>
        </div>
      </div>



    </>


  )
}

export default ProductsCard
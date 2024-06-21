import React, { useEffect } from 'react'
import KorzinaCard from '../components/KorzinaCompoenents/KorzinaCard'
import { useDispatch, useSelector } from 'react-redux';
import { changeStateValue } from '../redux/MainReducer';
import KorzinaCardTwo from '../components/KorzinaCompoenents/KorzinaCardTwo';
import { Link } from 'react-router-dom';
import TotalSum from '../components/KorzinaCompoenents/TotalSum';

function Korzina({ updateLocalStorage, jewelSum, countingSum, totalSum }) {
  const cartItems = useSelector(state => state.Data.cartItems);
  const dispatch = useDispatch()
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      dispatch(changeStateValue({ name: 'cartItems', value: parsedCart }));
    }
  }, []);

  const handleRemoveFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    totalSum()
    dispatch(changeStateValue({ name: 'cartItems', value: updatedCart }));
    updateLocalStorage(updatedCart);
  };

  function changeCount(type, item) {
    const updatedCart = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
        const updatedCount = type === 'inc' ? cartItem.count + 1 : cartItem.count - 1;
        return { ...cartItem, count: updatedCount };
      }
      return cartItem;
    });
    totalSum()
    dispatch(changeStateValue({ name: 'cartItems', value: updatedCart }));
    updateLocalStorage(updatedCart);
  }


  return (
    <main>
      <div className="container">
        <h2 className='section_header'>Условия оформления заказа</h2>
        <div className="usloviya_container">
          <h3>Для товаров</h3>
          <p>После оформления корзины и отправки заказа, с Вами свяжется специалист для подтверждения заказа и выставления ссылки - счета на оплату (онлайн - банкинг). Способ доставки: Москва - Яндекс курьер за счет покупателя, по России - транспортной компанией СДЭК, оплата при получении. Заказы отправляются в течение 2 дней после поступления оплаты.</p>
          <h3>Для расчетов</h3>
          <p>Все персональные консультации проходят в режиме аудио и фото-сообщений (оптимально, так как Вы можете прослушать сообщения в удобное для Вас время и вернуться к ним неоднократно, даже через несколько лет). После оформлени заказа, с Вами свяжется специалист для подтверждения заказа, выставления ссылки - счета на оплату (онлайн банкинг). После оплаты Вам будет сообщена дата, когда Вы получите результаты расчёта. Вам будет назначена онлайн консультация. Если Вас интересует офф-лайн формат консультации, укажите это, когда с Вами будет связываться специалист. Также Вы сможете указать желаемую дату проведения консультации или заказать консультацию по срочному тарифу (день в день, + 100% к стоимости расчета).</p>
        </div>
        <div className="cart_container">
          <div className="cart_products">
            <h3>Выбранные</h3>
            {
              cartItems.map((data, i) => {
                if (data.images) {
                  return (
                    <KorzinaCard changeCount={changeCount} handleRemoveFromCart={handleRemoveFromCart} key={i} data={data} />
                  )
                } else {
                  return (
                    <KorzinaCardTwo changeCount={changeCount} handleRemoveFromCart={handleRemoveFromCart} key={i} data={data} />
                  )
                }


              })
            }


          </div>
          <TotalSum jewelSum={jewelSum} countingSum={countingSum} />
        </div>
      </div>
    </main>
  )
}

export default Korzina
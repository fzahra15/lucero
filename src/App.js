import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';
import Usluqi from './pages/Usluqi';
import AboutPage from './pages/AboutPage';
import Market from './pages/Market';
import Korzina from './pages/Korzina';
import NavVTwo from './components/Header/NavVTwo';
import Footer from './components/Footer/Footer';
import MoneyCodePage from './pages/MoneyCodePage';
import CheckOutPage from './pages/CheckOutPage';
import { useDispatch, useSelector } from 'react-redux';
import { getCounting } from './actions/MainActions';
import { changeStateValue } from './redux/MainReducer';
import Text from './components/CheckOutComponents/Text';
import Loading from './components/Loading';
import Rospatent from './components/MarketComponents/Rospatent';
import Offerta from './components/CheckOutComponents/Offerta';

const HeaderOrNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return currentPath === '/' ? <Header /> : <NavVTwo />;
};

const updateLocalStorage = (updatedCart) => {
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};



function App() {
  const [jewelSum, setJewelSum] = useState(0)
  const [countingSum, setCountingSum] = useState(0)
  const cartItems = useSelector(state => state.Data.cartItems)
  const loading = useSelector(state => state.Data.loading)
  const dispatch = useDispatch()
  function totalSum() {
    let sumOfJewel = 0
    let sumOfCounting = 0
    cartItems.map((data, i) => {
      if (data.model) {
        sumOfJewel += data.price * data.count
      } else {
        sumOfCounting += data.price * data.count
      }
    })

    setJewelSum(sumOfJewel)
    setCountingSum(sumOfCounting)
  }

  useEffect(() => {
    totalSum()
    dispatch(getCounting())
  }, [cartItems])
  useEffect(() => {
    dispatch(getCounting())
  }, [dispatch])
  const counting = useSelector(state => state.Data.counting)
  const moneyCodePrice = counting.find(data => data.id == 17)
  const [moneyPrice, setMoneyPrice] = useState()



  useEffect(() => {
    if (moneyCodePrice) {
      setMoneyPrice(moneyCodePrice.price);
    }
  }, [moneyCodePrice])



  return (
    <div>
      <BrowserRouter>
        <HeaderOrNav />

        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/услуги' element={<Usluqi counting={counting} totalSum={totalSum} updateLocalStorage={updateLocalStorage} />} />
          <Route path='/обо-мне' element={<AboutPage />} />
          <Route path='/jewelery' element={<Market totalSum={totalSum} updateLocalStorage={updateLocalStorage} />} />
          <Route path='/корзина' element={<Korzina jewelSum={jewelSum} countingSum={countingSum} totalSum={totalSum} updateLocalStorage={updateLocalStorage} />} />
          <Route path='/денежный-код' element={<MoneyCodePage moneyPrice={moneyPrice} />} />
          <Route path='/оплата' element={<CheckOutPage />} />
          <Route path='/условия-конфидентальности' element={<Text />} />
          <Route path='/роспатент' element={<Rospatent />} />
          <Route path='/оферта' element={<Offerta />} />
        </Routes>
        <Footer />
        {loading?<Loading />:null}
      </BrowserRouter>
    </div>

  );
}

export default App;

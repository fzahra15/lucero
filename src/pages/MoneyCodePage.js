import React, { useEffect, useState } from 'react'
import AnswNumContainer from '../components/MoneyCode/AnswNumContainer'
import MainInputs from '../components/MoneyCode/MainInputs'
import TextArea from '../components/MoneyCode/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import UsluqiUslovie from '../components/CheckOutComponents/UsluqiUslovie'
import Galery from '../components/MoneyCode/Galery'
import { checkOut, getCheckOutStatus, getCounting } from '../actions/MainActions'
import { changeStateValue } from '../redux/MainReducer'
import UsloviyaOferti from '../components/CheckOutComponents/UsloviyaOferti'
import alertify from 'alertifyjs';



function MoneyCodePage({ moneyPrice }) {
    const dispatch = useDispatch()
    const num6 = useSelector(state => state.Data.num6)
    const num7 = useSelector(state => state.Data.num7)
    const num8 = useSelector(state => state.Data.num8)
    const rasshifrovki = useSelector(state => state.Data.rasshifrovki)
    const num6Info = rasshifrovki.find(data => data.num == Number(num6))
    const num7Info = rasshifrovki.find(data => data.num == Number(num7))
    const num8Info = rasshifrovki.find(data => data.num == Number(num8))
    const answerArray = [num6Info, num7Info, num8Info]
    const [moneyBtnClick, setClick] = useState(false)
    const [isCheckedPrivacy, setCheckedPrivacy] = useState(false);
    const [isCheckedOffer, setCheckedOffer] = useState(false);
    const isBothChecked = isCheckedPrivacy && isCheckedOffer;
    const [userPhone, setUserPhone] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const handleCheckboxChangePrivacy = () => {
        setCheckedPrivacy(!isCheckedPrivacy);
    };

    const handleCheckboxChangeOffer = () => {
        setCheckedOffer(!isCheckedOffer);
    };

    const handleButtonClick = () => {
        if (userPhone && userEmail) { // Check if both inputs are non-empty
            dispatch(
                checkOut({
                    apikey: '74ec6072dab16197970fff776502ea50',
                    login: '79933531459',
                    amount: moneyPrice,
                    customer_phone: userPhone,
                    method: 'sbp',
                    description: 'Оплата для расчета денежного кода',
                    callback_url: 'https://ngrok.ru/',
                    customer_email: userEmail
                })
            );
            setUserEmail('')
            setUserPhone('')
            setCheckedOffer(false)
            setCheckedPrivacy(false)
        } else {
            alertify.alert('', 'Пожалуйста запишите данные для оплаты');
        }
    };





    return (
        <main>
            <div className="container">
                <h2 className="section_header">Что такое денежный код и для чего он нужен? </h2>
                <div className="text_container">
                    <p>Денежный код - это комбинация чисел, которые максимально с Вами сонастроены.

                        Если Вы будете их использовать в качестве паролей, пинкодов,  при формировании прайса, они будут открывать еще большие возможности для Вас. </p>
                    <p>Что значат эти числа? </p>
                    <div className="rashifrovki">
                        <p>
                            <span>1</span>-
                            Как попасть в свой денежный канал
                        </p>
                        <p>
                            <span>2</span>-
                            Как увеличить доход,пробить финансовый потолок
                        </p>
                        <p>
                            <span>3</span>-
                            Как стабилизировать доход и выйти на новый уровень
                        </p>
                    </div>
                    <p>Откуда берутся эти числа? </p>
                    <p>Путем вычисления из даты рождения, по формулам </p>
                    <p>Узнайте свои денежные числа прямо сейчас! </p>
                    <h2>После оплаты Вы сможете <br /> внести свои данные и мгновенно получить свой денежный код! </h2>
                </div>



                <h2 className="section_header">Проведите оплату ({moneyPrice}₽)</h2>
                <div className="checkOut_container">
                    <span>Формат введения электронной почты: zvezda@yandex.ru</span>
                    <br/>
                    <span>Формат введения мобильного телефона: 79096789999</span>
                    <br/>
                
                    <div className='checkOut_inputs'>
                        <input className="cardNo" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" placeholder="Введите, пожалуйста, свою электронную почту.... " />
                        <input type='tel' value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className='cardNo' placeholder='Укажите, пожалуйста, свой мобильный телефон....' />
                        <button onClick={handleButtonClick} className='oplate_btn' disabled={!isBothChecked} style={{ backgroundColor: isBothChecked ? '#C90' : '#525252' }}>Оплатить</button>
                    </div>
                </div>
                <UsluqiUslovie isCheckedPrivacy={isCheckedPrivacy} handleCheckboxChangePrivacy={handleCheckboxChangePrivacy} />
                <UsloviyaOferti isCheckedOffer={isCheckedOffer} handleCheckboxChangeOffer={handleCheckboxChangeOffer} />
                <h2 className="section_header">Рассчитайте свой денежный код</h2>
                <MainInputs moneyBtnClick={moneyBtnClick} setClick={setClick} num6={num6} num7={num7} num8={num8} />
                {
                    moneyBtnClick == true ? <AnswNumContainer answerArray={answerArray} /> : null
                }
                <h2 className="section_header">Создай свой браслет с денежным кодом</h2>
                <p className="section_sub_title">На фотографиях представлены образцы браслетов с денежным кодом.<br />Мы можем
                    подобрать
                    для Вас индивидуально подходящие камни и создать персональный браслет.
                </p>
                <Galery />
                <p className='section_sub_title title_2'>Для этого напишите,
                    пожалуйста,
                    свой запрос.</p>
                <ol className='zaprosi'>
                    <li> ФИО</li>
                    <li> Дата рождения</li>
                    <li> Мобильный телефон для подтверждения заказа и связи</li>
                    <li> Адрес пункта выдачи СДЭК (из которого удобно получить заказ)</li>
                    <li> Каких оттенков предпочли бы видеть камни в браслете.</li>
                    <li> Шармы с денежными числами делаем в серебре или позолоте.  </li>
                </ol>
                <TextArea />
            </div>
        </main>
    )
}

export default MoneyCodePage
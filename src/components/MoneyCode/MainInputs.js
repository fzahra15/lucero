import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStateValue } from '../../redux/MainReducer'
import { getCheckOutStatus } from '../../actions/MainActions'
import alertify from 'alertifyjs';

function MainInputs({ num6, num7, num8, moneyBtnClick, setClick }) {
    const [birthDate, setBirthDate] = useState('')
    const dispatch = useDispatch()
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const btnRef = useRef()


    function moneyCodeClick() {
        if(localStorage.getItem("payNumber")){
            dispatch(getCheckOutStatus(localStorage.getItem("payNumber")))
            .then(resp=>{
                if(resp !="error"){
                    if(resp == 10){
                            btnRef.current.style.backgroundColor = '#C90'
                            let dateOfBirth = birthDate
                            let day = dateOfBirth.substring(0, 2)
                            let month = dateOfBirth.substring(3, 5)
                            let year = dateOfBirth.substring(6, 10)
                            let num1;
                            let num2
                            let num3
                            let num4
                            let num5
                            let num6
                            let num8
                            let num7
                            if (day >= 23 && day <= 29) {
                                num1 = day - 18
                            } else if (day == 30) {
                                num1 = 3
                            } else if (day == 31) {
                                num1 = 4
                            } else {
                                num1 = day
                            }                
                            num2 = month
                            let yearSum = 0
                            let resultSum = 0
                            for (let i = 0; i < year.length; i++) {
                                yearSum += Number(year[i])
                            }                
                            if (yearSum <= 22) {
                                num3 = yearSum
                            } else {
                                for (let i = 0; i < String(yearSum).length; i++) {
                                    resultSum += Number(String(yearSum)[i])
                                }
                                num3 = resultSum
                            }
                            let x = 0
                            let resFor4 = Number(num1) + Number(num2) + Number(num3)
                            if (resFor4 <= 22) {
                                num4 = resFor4
                            } else {
                                for (let i = 0; i < String(resFor4).length; i++) {
                                    x += Number(String(resFor4)[i])
                                }
                                num4 = x
                            }
                            let resultForFive = Number(num1) + Number(num2) + Number(num3) + Number(num4)
                            let y = 0
                            if (resultForFive <= 22) {
                                num5 = resultForFive
                            } else {
                                for (let i = 0; i < String(resultForFive).length; i++) {
                                    y += Number(String(resultForFive)[i])
                                }
                                num5 = y
                            }
                            let resultForSix = num4 + num5
                            let z = 0
                            if (resultForSix <= 22) {
                                num6 = resultForSix
                            } else {
                                for (let i = 0; i < String(resultForSix).length; i++) {
                                    z += Number(String(resultForSix)[i])
                                }
                                num6 = z
                            }
                            let resultForEight = Number(num3) + Number(num5)
                            let k = 0
                            if (resultForEight <= 22) {
                                num8 = resultForEight
                            } else {
                                for (let i = 0; i < String(resultForEight).length; i++) {
                                    k += Number(String(resultForEight)[i])
                                }
                                num8 = k
                            }
                            let resultForSeven = Number(num6) + Number(num8)
                            let s = 0
                            if (resultForSeven <= 22) {
                                num7 = resultForSeven
                            } else {
                                for (let i = 0; i < String(resultForSeven).length; i++) {
                                    s += Number(String(resultForSeven)[i])
                                }
                                num7 = s
                            }
                            dispatch(changeStateValue({
                                name: 'num6',
                                value: num6
                            }))
                            dispatch(changeStateValue({
                                name: 'num7',
                                value: num7
                            }))
                            dispatch(changeStateValue({
                                name: 'num8',
                                value: num8
                            }))
                            localStorage.removeItem('payNumber')
                            setButtonDisabled(true);
                            btnRef.current.style.backgroundColor = 'grey';
                            setClick(true)

                        
                    }else{
                        // Условия относительно статуса
                        return
                    }
                }else{
                    return;
                }
            })
        }else{
            return
        }
       

    }

    return (
        <>

            <div className="birthDay_info_container">
                <input type="text" placeholder="Имя и фамилия" />
                <input type="text" onChange={(e) => setBirthDate(e.target.value)} id="dateOfBirth" placeholder="Дата рождения (ДД.ММ.ГГГГ)" />
                <button
                    id="count"
                    ref={btnRef}
                    onClick={moneyCodeClick}
                    // disabled={buttonDisabled}
                >
                    вычислить
                </button>
            </div>
            <p className='formText'>Формат введения даты рождения: 01.01.2000 (точки - обязательны)</p>
            {
                moneyBtnClick == true ? <h2 style={{ 'textAlign': 'center', fontSize: '180%', fontWeight: '500', marginTop: '40px' }}>Cделайте снимок или скриншот ваших чисел</h2> : null
            }
            {
                moneyBtnClick == true ? <h2 className='section_header'>{num6}-{num7}-{num8}</h2> : null
            }


        </>
    )
}

export default MainInputs
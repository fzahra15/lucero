import React from 'react'
import logoFooter from '../img/logoFooter.png'
import inst from '../img/instagram 1 (1).png'
import tg from '../img/telegram.png'
import wp from '../img/whatsapp 1.svg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Footer() {
    const headerData = useSelector(state => state.Data.headerData);
    return (
        <footer>
            <div className="footer_container">
                <Link to={'/'}><img className="footer_logo" src={logoFooter} alt="" /></Link>
                <div className="footer_center">
                    <h3>Все права защищены</h3>
                    <p>ИП Завгородняя Светлана Юрьевна <br />
                        ОГРНИП 322774600039821 <br /> (ювелирные изделия)</p>
                    <p>ИП Завгородний Артем Владимирович <br />
                        ОГРНИП 319715400010024 (консультирование)</p>
                </div>
                <div className="sm_container_footer">
                    <div className="footer_circle">
                        <a href={headerData.instagram} target='_blank'><img src={inst} alt="" /></a>
                    </div>
                    <div className="footer_circle">
                        <a href={headerData.linkedin}><img src={tg} alt="" /></a>
                    </div>
                    <div className="footer_circle">
                        <a href={headerData.whatsapp}><img src={wp} alt="" /></a>
                    </div>
                </div>
            </div>
            <h3>График работы интернет - магазина</h3>
            <p className='time'>Понедельник - пятница 10.00 - 20.00 <br />
                Суббота - 12.00 - 18.00 <br />
                Воскресенье - выходной. <br />
                Выходные и праздничные дни, в соответствии с производственным календарем России, - магазин не работает</p>
        </footer>
    )
}

export default Footer
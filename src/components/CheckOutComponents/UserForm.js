import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveForm } from '../../actions/MainActions';
import UsluqiUslovie from './UsluqiUslovie';
import alertify from 'alertifyjs';

function UserForm({ cartItems }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    address: '',
    email: ''
  });

  const [productData, setProductData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const tempProductData = [];
    for (let i = 0; i < cartItems.length; i++) {
      // Your existing logic to populate tempProductData
    }
    setProductData(tempProductData);
  }, [cartItems]);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setBtnDisable(!e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isAnyFieldEmpty = Object.values(formData).some(value => value.trim() === '');

    if (isAnyFieldEmpty) {
      alertify.alert('', "Заполните, пожалуйста, все данные по форме.")
    }

    if (!isChecked) {
      alertify.alert('', "Отметьте, пожалуйста, согласие на условия конфиденциальности")

      return;
    }

    // Continue with other validations and form submission logic
    try {
      setBtnDisable(true);
      let cartData = [];
      if (localStorage.getItem("cart")) {
        let ls = JSON.parse(localStorage.getItem("cart"));
        ls.forEach(item => {
          if (item?.model_id) {
            cartData.push({
              count: item?.count,
              product_id: item?.id
            })
          } else {
            cartData.push({
              count: item?.count,
              count_id: item?.id
            })
          }
        })
      }
      dispatch(
        saveForm({
          userData: formData,
          tempProductData: cartData
        })
      ).then(result => {
        setBtnDisable(false)

        if (result === 'success') {
          alertify.alert('', 'Ваш заказ оформлен')
        } else {
          alertify.alert('', 'Ваш заказ не оформлен, заполните все данные')
        }
      })

    } catch (error) {
      alertify.alert('','Произошла ошибка при отправке формы')
    }
  };




  return (
    <div className='container'>
      <h2 className='section_header'>Условия возврата</h2>
      <div className="usloviya_container usloviya_cont_two">
        <h3>Для товаров</h3>
        <p>В силу п.4 ст. 26.1 Закона РФ «О защите прав потребителей» потребитель вправе отказаться от ювелирного изделия в любое время до его передачи, а после передачи товара - в течение семи дней.</p>
        <h3>Для расчетов</h3>
        <p>Возврат средств, полученных при оформлении заказа нумерологических расчетов, возможен, в случае, если Вы приняли решение отказаться от получения услуги не позднее, чем за 3 рабочих дня до назначенной Вам даты консультации (потому как за 3 дня до консультации уже производится расчёт и подготовка информации).</p>
      </div>
      <h2 className='section_header'>Заполните данные для оформления заказа</h2>
      <form className='form_container' onSubmit={handleSubmit}>
        <input type="text" placeholder='ФИО' name='full_name' value={formData.full_name} onChange={handleInputChange} />
        <input type="tel" placeholder='Номер телефона' name='phone_number' value={formData.phone_number} onChange={handleInputChange} />
        <input type="email" placeholder='Адрес электронной почты' name='email' value={formData.email} onChange={handleInputChange} />
        <input type="text" placeholder='Aдрес' name='address' value={formData.address} onChange={handleInputChange} />
        <button type='submit' disabled={btnDisable}>Отправить</button>
      </form>
      <UsluqiUslovie isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
    </div>
  )
}

export default UserForm
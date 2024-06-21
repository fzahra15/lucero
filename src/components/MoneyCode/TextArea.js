import React, { useState } from 'react'
import { saveRequest } from '../../actions/MainActions'
import { useDispatch } from 'react-redux'
import alertify from 'alertifyjs';


function TextArea() {
    const [textArea, setTextArea] = useState('');
    const [btnDisable, setBtnDisable] = useState(false)
    const dispatch = useDispatch()
    function saveData() {
        if (textArea != '') {
            setBtnDisable(true)

            dispatch(saveRequest(textArea))
                .then(resp => {
                    setBtnDisable(false);
                    setTextArea('')
                })
            alertify.alert('','Ваш запрос отправлен!');
        } else {
            alertify.alert('','Заполните, пожалуйста, все данные!')
        }
    }

    return (
        <>
            <textarea className="textarea" value={textArea} onChange={(e) => setTextArea(e.target.value)} cols="30" rows="10"></textarea>
            <button disabled={btnDisable} className="send" onClick={() => saveData()}>отправить запрос</button>
        </>
    )
}

export default TextArea
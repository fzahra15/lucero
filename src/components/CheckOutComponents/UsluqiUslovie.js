import React from 'react'
import { Link } from 'react-router-dom'

function UsluqiUslovie({ isCheckedPrivacy, handleCheckboxChangePrivacy }) {
  return (
    <div className='uslovieUsluq'>
        <input type="checkbox" checked={isCheckedPrivacy} onChange={handleCheckboxChangePrivacy}/>
        <p>Я согласен с <Link to={'/условия-конфидентальности'}>условиями конфидентальности</Link></p>
    </div>
  )
}

export default UsluqiUslovie
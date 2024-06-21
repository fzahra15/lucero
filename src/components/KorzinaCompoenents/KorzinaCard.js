import React  from 'react'
import img from '../img/trash-can-regular 3.png'

function KorzinaCard({data,handleRemoveFromCart,changeCount}) {
    return (
        <div className="cart_product">
            <div className="cart_prod_img">
                <img src={data.images[0].image_full_url} alt="" />
            </div>
            <div className="cart_prod_info">
                <div className="cart_info_top">
                    <div className="cart_info_top_left">
                        <h2>{data.title}</h2>
                        <p>{data.price}</p>
                    </div>
                    <img onClick={() => handleRemoveFromCart(data.id)} src={img} alt="" />
                </div>
                <div className="cart_info_bottom">
                    <div className="counter">
                        <button onClick={()=>changeCount('dec',data)}>-</button>
                        <span>{data.count}</span>
                        <button onClick={()=>changeCount('inc',data)}>+</button>
                    </div>
                    <p>Итоговая цена:<span>{data.price*data.count}₽</span></p>
                </div>
            </div>

        </div>
    )
}

export default KorzinaCard
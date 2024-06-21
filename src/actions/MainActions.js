import axios from "axios"
import { mainApi } from "../api"
import { changeStateValue } from "../redux/MainReducer"
import { useSelector } from "react-redux"
import alertify from 'alertifyjs';



export const getAboutInfo = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/about`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'about',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))

            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))

            return 'error'
        })
}

export const getHeaderData = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/header-data`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'headerData',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const getNumerologyInfo = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/numeralogy`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'numerology',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const getNumCategories = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/numeralogy-categories`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'numCategories',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}
export const getInfo = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/info`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'info',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const getActions = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/actions`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'actions',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const getAdvantages = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/advantages`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'advantages',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const getCounting = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/counting`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'counting',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}



export const getProducts = (material_id = "", type_id = "", model_id = "", page = 1) => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    try {
        const resp = await axios.get(`${mainApi}/product?material_id=${material_id}&type_id=${type_id}&model_id=${model_id}&page=${page}`);

        dispatch(changeStateValue({
            name: 'products',
            value: resp.data.data
        }));

        dispatch(changeStateValue({
            name: 'totalPages',
            value: resp.data.last_page
        }));
        dispatch(changeStateValue({ name: 'loading', value: false }))
        return 'success';
    } catch (err) {
        dispatch(changeStateValue({ name: 'loading', value: false }))
        return 'error';
    }
};


export const getGalery = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/gallery?type=event`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'gallery',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const getCase = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/gallery?type=case`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'case',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const getBraclets = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/gallery?type=bracelets`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'braclets',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const getMoneyCodeBraclets = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/gallery?type=moneycodebraclets`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'moneyBraclets',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}


export const getCertificates = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))

    return await axios.get(`${mainApi}/certificates`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'certificates',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}
export const getMaterials = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/materials`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'materials',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const getModels = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/model`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'models',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}


export const getType = () => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    return await axios.get(`${mainApi}/type`)
        .then(resp => {
            dispatch(changeStateValue({
                name: 'types',
                value: resp.data
            }))
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}


export const saveForm = ({ userData, tempProductData }) => async dispatch => {
    dispatch(changeStateValue({ name: 'loading', value: true }))
    const obj = {
        full_name: userData.full_name,
        phone_number: userData.phone_number,
        email: userData.email,
        address: userData.address,
        card_number: userData.card_number,
        card_year: userData.card_year,
        card_cvv: userData.card_cvv,
        productData: JSON.stringify(tempProductData)
    }
    try {
        const response = await axios.post('https://lucero.zakirabd.com/public/api/forms', obj);
        dispatch(changeStateValue({ name: 'loading', value: false }))
        return 'success';
    } catch (error) {
        dispatch(changeStateValue({ name: 'loading', value: false }))
        return 'error';
    }
};


export const saveRequest = (text = '') => async dispatch => {
    await axios.post(`${mainApi}/user-requests`, { text })
        .then(resp => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'success'
        }).catch(err => {
            dispatch(changeStateValue({ name: 'loading', value: false }))
            return 'error'
        })
}

export const checkOut = (data) => async dispatch => {
    await axios.post(`https://api.life-pay.ru/v1/bill`, data, {
        headers: {
            'Content-Type': 'text/plain',
        }
    })
        .then(resp => {
            if(resp?.data?.data?.paymentUrlWeb){
                window.open(resp?.data?.data?.paymentUrlWeb, '_blank');
                localStorage.setItem("payNumber", resp?.data?.data?.number)
                return resp.data.number
            }else{
                alertify.alert('', 'Пожалуйста  напишите данные правильно');
            }
           
        }).catch(err => {
            return 'error'
        })

}

export const getCheckOutStatus = (num) => async dispatch => {
    return await axios.get(`https://api.life-pay.ru/v1/bill/status?apikey=74ec6072dab16197970fff776502ea50&login=79933531459&number=${num}`)
        .then(resp => {
            if(localStorage.getItem("payNumber")){
                let num = 15;
                try{
                    num = resp?.data?.data[localStorage.getItem("payNumber")]?.status;
                }catch(err){num=15}
                return num
            }else{
                return 15
            }
           
        }).catch(err => {
            return 'error'
        })
}
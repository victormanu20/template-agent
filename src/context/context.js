import React,{useState} from 'react'
import { data } from '../hooks/getInmuebles';

const initialState = {
    showSlide:false
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const clickSlide=(value) =>{
      setState({
        ...state,
        showSlide: value
      }
      )
    }

    return{
        state,
        clickSlide,
        data
    }
}

export {useInitialState}
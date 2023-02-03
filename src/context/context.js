import React,{useState} from 'react'

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
        clickSlide
    }
}

export {useInitialState}
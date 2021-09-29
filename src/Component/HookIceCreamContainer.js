import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import buyIceCream from '../redux/iceCream/iceCreamAction'
function HookIceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Number of iceCreams: {numOfIceCream}</h1>
            <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default HookIceCreamContainer

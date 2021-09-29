import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import buyCake from '../redux/cakes/cakesAction'
function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>number of cakes from hooks: {numOfCakes}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer

import React from 'react';
import {connect} from 'react-redux'
import buyCake from '../redux/cakes/cakesAction'
const CakeContainer = props => {
    return (
        <div>
            <h2>Number of cakes: {props.cake.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

const mapStatetoProps= (state) => {
    return{
        numOfCakes:state.cake.numOfCakes
    }
}

const mapDispatchtoProps = (dispatch) => {
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(CakeContainer);
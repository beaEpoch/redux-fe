import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { actions } from '../actions/index'

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { value, action } = this.props;
        return (
            <div>
                <p>Clicked: {value} times</p>
                <button onClick={action.increment}>
                    +
                </button>
                <button onClick={action.decrement}>
                    -
                </button>
            </div>
        )
    }
}

// const Counter = ({value, action}) => {
//     console.log(value);
//     const { increment, decrement } = action;
//     return (
//         <div>
//             <p>Clicked: {value} times</p>
//             <button onClick={increment}>
//                 +
//             </button>
//             <button onClick={decrement}>
//                 -
//             </button>
//         </div>
//     )
// };

const mapStateToProps = (state) => {
    return {value: state.value}
};

const mapDisPatchToProps = (dispatch) => {
    return {action: bindActionCreators(actions, dispatch)}
};
const CounterCont = connect(mapStateToProps, mapDisPatchToProps)(Counter);

export default CounterCont;

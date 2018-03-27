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

// 函数定义组件的方式同样可以，不过没有this指针，需要传入与connect函数相同命名的参数
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
    return {value: state.counter}    // 将 state.counter 返回的值赋给 value
    // return {value: state.val}
};

const mapDisPatchToProps = (dispatch) => {
    return {action: bindActionCreators(actions, dispatch)}
};

const CounterCont = connect(mapStateToProps, mapDisPatchToProps)(Counter);    // 将value和action传入作为组件Counter的props

export default CounterCont;

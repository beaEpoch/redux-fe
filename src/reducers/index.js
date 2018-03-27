import { combineReducers } from 'redux'
import counter from './counter'

export default combineReducers({
    counter,                // state.counter 返回新的 state 值
    // val: counter,        // val 就是该 reducer 对应管理的 state，state.val 等价与 state.counter
})

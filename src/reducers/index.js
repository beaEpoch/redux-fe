import { combineReducers } from 'redux'
import counter from './counter'

export default combineReducers({
    value: counter,        // value 就是该 reducer 对应管理的 state
})

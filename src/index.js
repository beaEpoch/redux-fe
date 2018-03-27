import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),    // 启用浏览器 redux 调试组件
    applyMiddleware(thunk),
    );

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

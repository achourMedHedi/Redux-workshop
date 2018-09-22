import React from 'react'
import ReactDom from 'react-dom'
import {createStore , compose , applyMiddleware } from 'redux' // create store 
import { Provider} from 'react-redux' // provider 
import App from './component/App' // app componenet
import reducers from './reducers/index' // combine reducer


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
 reducers,
 composeEnhancers()
)

ReactDom.render(
    <Provider store={store} >
        <App />
    </Provider> , document.getElementById('root')
)
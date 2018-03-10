// react: 2个
import React from 'react'
import ReactDOM from 'react-dom'
// react-router路由: 1个
import {BrowserRouter as Router, Route} from 'react-router-dom'
// redux: 3个
import {createStore, applyMiddleware} from "redux"
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'



import Nav from './componets/nav/nav.jsx'
import Todos from './page/todos/todos.jsx'
import reducer from './reducer/reducer.js'
import Input from './page/input/input.jsx'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Nav></Nav>
                <Route exact path="/" component={Todos}></Route>
                <Route exact path="/input" component={Input}></Route>
            </div>
        </Router>
    </Provider>,
    document.getElementById("app")
)
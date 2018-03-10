import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './todos.less'
import TodoList from '../../componets/list/list.jsx'
import TodoFooter from '../../componets/footer/footer.jsx'
import TodoHeader from '../../componets/header/header.jsx'

class Todos extends React.Component{
    render(){
        return (
            <div className="todos">
                <div>
                    <TodoHeader></TodoHeader>
                    <TodoList></TodoList>
                    <TodoFooter></TodoFooter>
                </div>
            </div>
        )
    }
}

export default Todos
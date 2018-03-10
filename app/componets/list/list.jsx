import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './list.less'
import * as actions from '../../actions/actions.js'

class TodoList extends React.Component{
    constructor({visible, actions, todos}){
        super()
        this.state = {
            'flage': true
        }
    }
    render(){
        let f = []
        if(this.props.visible==0){
            f = this.props.todos
        }else if(this.props.visible==1){
            f = this.props.todos.filter(item=> item.done==true)
        }else if(this.props.visible==2){
            f = this.props.todos.filter(item=> item.done==false)
        }
        return(
            <div className="todo-list">
                
                {
                    f.map((item, index)=> {
                        let title = item.title
                        let done = item.done
                        let class_done = done==true?'cur':''
                        return (
                            <p key={index}>
                                <span className={'title '+class_done} onClick={()=> this.props.actions.change_todo(title, done)}>{item.title}</span>
                                <span className='del' onClick={()=> this.props.actions.del_todo(title)}>X</span>
                            </p>
                        )
                    })
                }
            </div>
        )
    }
}



export default connect(
    (state) => {
        return {
            visible: state.visible,
            todos: state.todos
        }
    },
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(TodoList)
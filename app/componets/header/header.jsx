import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions/actions.js'

class TodoHeader extends React.Component{
   constructor({todos, actions}){
       super()
   }
   add_todo(t){
       if(t!=''){
           this.props.actions.add_todo(t)
           this.refs.t.value = ''
       }
   }
    render(){
        return(
            <div className="todo-header">
                <input type="text" ref='t'/>
                <button onClick={()=> this.add_todo(this.refs.t.value)}>添加</button>
            </div>
        )
    }
}



export default connect(
    (state) => {
        return {
            todos: state.todos
        }
    },
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(TodoHeader)
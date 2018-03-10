import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './footer.less'
import * as actions from '../../actions/actions.js'

class TodoFooter extends React.Component{
    constructor({visible}){
        super()
        this.state = {
            'visible': visible
        }
    }
    render(){
        return(
            <div className="todo-footer">
                <span onClick={this.props.actions.find_todo.bind(this, 0)} className={this.props.visible==0?'cur':''}>全部</span>
                <span onClick={this.props.actions.find_todo.bind(this, 1)} className={this.props.visible==1?'cur':''}>已完成</span>
                <span onClick={this.props.actions.find_todo.bind(this, 2)} className={this.props.visible==2?'cur':''}>未完成</span>
            </div>
        )
    }
}



export default connect(
    (state) => {
        return {
            visible: state.visible,
        }
    },
    (dispatch) => {
        return {
            actions: bindActionCreators(actions, dispatch)
        }
    }
)(TodoFooter)
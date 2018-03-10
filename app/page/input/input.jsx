import React from 'react'
import {NavLink} from 'react-router-dom'


import './input.less'

class Input extends React.Component{
    constructor(){
        super()
        this.state = {
            'value': "change"
        }
    }
    change(e){
        this.setState({
            'value': e.target.value
        })
    }
    render(){
        return (
            <div className="input">
                <h2>input</h2>
                <input type="text" onChange={this.change.bind(this)} value={this.state.value}/>
                <h2>{this.state.value}</h2>
            </div>
        )
    }
}

export default Input
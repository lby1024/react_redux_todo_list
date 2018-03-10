import React from 'react'
import {NavLink} from 'react-router-dom'

import './nav.less'


class Nav extends React.Component{
    render(){
        return (
            <div className="nav">
                <NavLink exact to='/'><span>todos</span></NavLink>
                <NavLink exact to='/input'><span>input</span></NavLink>
            </div>
        )
    }
}

export default Nav
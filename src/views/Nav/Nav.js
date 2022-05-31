import React, {Component} from 'react';
import "./Nav.css"
import {Link, NavLink} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/listtodo">List todo</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/user">User</NavLink>
            </div>
        );
    }
}

export default Nav;

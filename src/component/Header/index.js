import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './style.css';
function Header(props) {
    const route = [
        { path: '/', name: 'Home', exact: true },
        { path: '/Blog', name: 'Blog', exact: false },
        { path: '/Contact', name: 'Contact', exact: false },
        { path: '/About', name: 'About', exact: false }
    ]
    useEffect(() => {
        return () => {

        }
    }, []);
    return (
        <div className="header">
            <ul>
                {/* <li> Home </li>
                <li> Blog </li>
                <li> Contact </li>
                <li> About </li> */}
                {route.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.path} exact={item.exact}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Header;
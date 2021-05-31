import React, { useState, useEffect } from 'react';
import Header from '../Header'
function Layout(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
            <Header />
            {props.children}
        </>
    )
}

export default Layout;
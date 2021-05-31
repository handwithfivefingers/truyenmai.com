import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
function Homepage(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);
console.log(props);
    return (
        <Layout>
            Home page
        </Layout>
    )
}

export default Homepage;
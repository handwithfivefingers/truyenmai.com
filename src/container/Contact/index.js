import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
function Contact(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <Layout>
           Contact
        </Layout>
    )
}

export default Contact;
import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
function Blog(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <Layout>
           Blog
        </Layout>
    )
}

export default Blog;
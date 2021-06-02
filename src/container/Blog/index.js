import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlogPost } from '../../action';
import CardItem from '../../component/UI/CardItem';
function Blog(props) {
    const dispatch = useDispatch();
    const blog = useSelector(state => state.blog);
    useEffect(() => {
        dispatch(FetchBlogPost());
    }, []);
    console.log(blog.data);
    return (
        <Layout>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        blog.data && blog.data.length > 0 ? blog.data.map((post, index) => {
                            return (
                                <CardItem {...post} />)
                        })
                            : ''
                    }

                </div>
            </div>

        </Layout>
    )
}

export default Blog;
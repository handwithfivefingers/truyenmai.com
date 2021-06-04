import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlogPost } from '../../action';
import CardItem from '../../component/UI/CardItem';
import { BiGridAlt } from 'react-icons/bi';
function Blog(props) {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(FetchBlogPost());
  }, []);
  // console.log(props);
  return (
    <Layout sidebar breadcrumb {...props}>
      <div className="d-flex justify-content-between align-items-center">
        <h3 style={{ color: '#333', textAlign: 'left' }}>Our Blog</h3>
        <span>
          Column: <BiGridAlt size="22" animation="spin" />
        </span>
      </div>
      <div className="dropdown-divider"></div>
      <div className="row">
        {blog.data && blog.data.length > 0
          ? blog.data.map((post, index) => {
              return (
                <div className="col-md-6 col-lg-4 mt-3" key={index}>
                  <CardItem {...post} />
                </div>
              );
            })
          : ''}
      </div>
    </Layout>
  );
}

export default Blog;

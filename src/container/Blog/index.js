import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../component/UI/CardItem';
function Blog(props) {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);

  useEffect(() => {
    if(blog.data && blog.data.length > 0) {
      blog.data.map((item,index) => {
      })
    };
  }, []);
  // Fetch Image post
  return (
    <Layout sidebar pagination breadcrumb title="Our Blog" col {...props}>
      <div className="row">
        {blog.data && blog.data.length > 0
          ? blog.data.map((post, index) => {
              return (
                <div className="col-md-6 col-lg-4 mt-3" key={index}>
                  <CardItem {...post}/>
                </div>
              );
            })
          : ''}
      </div>
    </Layout>
  );
}

export default Blog;

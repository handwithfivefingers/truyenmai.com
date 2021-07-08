import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../component/UI/CardItem';
// import { FetchBlogPost, FetchImageBlog } from '../../action';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './style.scss';
function Blog(props) {
  const blog = useSelector((state) => state.blog);


  return (
    <Layout sidebar pagination breadcrumb title="Our Blog" col {...props}>
      <CSSTransition
        in={props.breadcrumb}
        timeout={500}
        classNames="item-transition"
      >
        <TransitionGroup className="row">
          {blog.data &&
            blog.data.map((post, index) => {
              return (
                <CSSTransition
                  key={index}
                  timeout={500}
                  classNames="item-transition"
                >
                  <div className="col-md-6 col-lg-4 mt-4">
                    <CardItem {...post} />
                  </div>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </CSSTransition>
    </Layout>
  );
}

export default Blog;

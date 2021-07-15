import React, { useState, useEffect } from 'react';
import Layout from '../../../component/Viewer/Layout';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../../component/Viewer/UI/CardItem';
// import { FetchBlogPost, FetchImageBlog } from '../../action';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../Style/style.scss';
function Blog(props) {
  const blog = useSelector((state) => state.blog);
  const renderCardPost = () => {
    let xhtml = null;
    xhtml =
      blog.data &&
      blog.data.map((post, index) => {
        return (
          <CSSTransition key={index} timeout={500} classNames="item-transition">
            <div className="col-md-6 col-lg-4 mt-4">
              <CardItem {...post} />
            </div>
          </CSSTransition>
        );
      });
    return xhtml;
  };
  return (
    <Layout sidebar pagination breadcrumb title="Our Blog" col {...props}>
      <CSSTransition
        in={props.breadcrumb}
        timeout={500}
        classNames="item-transition"
      >
        <TransitionGroup className="row">{renderCardPost()}</TransitionGroup>
      </CSSTransition>
    </Layout>
  );
}

export default Blog;

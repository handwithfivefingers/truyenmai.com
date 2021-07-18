import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { FetchBlogPost, FetchImageBlog } from '../../../action';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from '../../../component/Viewer/Layout';
import CardItem from '../../../component/Viewer/UI/CardItem';
import '../Style/style.scss';
import LoadingScreen from '../../../helper/LoadingScreen';

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
  // if (blog.loading) {
  //   return <LoadingScreen />;
  // }
  return (
    <Layout sidebar pagination breadcrumb title="Our Blog" col {...props}>
      <CSSTransition
        in={props.breadcrumb}
        timeout={500}
        classNames="item-transition"
      >
        <TransitionGroup className="row">
          {renderCardPost()}
        </TransitionGroup>
      </CSSTransition>
    </Layout>
  );
}

export default Blog;

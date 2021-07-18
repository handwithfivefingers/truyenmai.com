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
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function Blog(props) {
  const blog = useSelector((state) => state.blog);

  const renderCardPost = () => {
    let xhtml = null;
    xhtml =
      blog.data &&
      blog.data.map((post, index) => {
        return (
          // <CSSTransition key={index} timeout={500} classNames="item-transition">
          <div className="col-md-6 col-lg-4 mt-4" key={index}>
            <CardItem {...post} />
          </div>
          // </CSSTransition>
        );
      });
    return xhtml;
  };
  const renderSkeleton = () => {
    let xhtml = [];

    for (let i = 1; i <= 9; i++) {
      xhtml.push(
        <div className="col-md-6 col-lg-4 mt-4">
          <SkeletonTheme>
            <p>
              <Skeleton height={150} duration={3} className="card-ui" />
            </p>
          </SkeletonTheme>
          ;
        </div>
      );
    }
    return xhtml;
  };
  return (
    <Layout sidebar pagination breadcrumb title="Our Blog" col {...props}>
      {/* <CSSTransition
        in={props.breadcrumb}
        timeout={500}
        classNames="item-transition"
      >
        <TransitionGroup className="row"> */}
      <div className="row">
        {blog.data ? renderCardPost() : renderSkeleton()}
      </div>

      {/* </TransitionGroup>
      </CSSTransition> */}
    </Layout>
  );
}

export default Blog;

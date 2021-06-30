import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../component/Layout';
import { LoadPostContent } from './../../action';
import ReactHtmlParser from 'react-html-parser';
import './style.scss';
function BlogPost(props) {
  const loading = useSelector((state) => state.blog.loading);
  const post = useSelector((state) => state.blog.post);
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.match.params.slug) {
      dispatch(LoadPostContent(props.match.params.slug));
    }
  }, []);
  const renderContent = () => {
    let xhtml = null;
    if (post.length > 0) {
      xhtml = ReactHtmlParser(post[0].content.rendered);
    }
    return xhtml;
  };
  const renderTitle = () => {
    let xhtml = null;
    if (post.length > 0) {
      xhtml = ReactHtmlParser(post[0].title.rendered);
    }
    return xhtml;
  };
  const img =
    'https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg';
  return (
    <Layout sidebar breadcrumb {...props} title={`Post Content`} img={img}>
      <div className="content">
        <h3 className="text-center">{renderTitle()}</h3>
        <div className="content-body">{renderContent()}</div>
      </div>
    </Layout>
  );
}

export default BlogPost;

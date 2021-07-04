import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../component/Layout';
import { LoadPostContent } from './../../action';
import ReactHtmlParser from 'react-html-parser';
import { useHistory, useParams } from 'react-router-dom';
import './style.scss';
function BlogPost(props) {
  const loading = useSelector((state) => state.blog.loading);
  
  const post = useSelector((state) => state.blog.post);
  const blog = useSelector((state) => state.blog.data);
  const [title, Settitle] = useState('');
  const [content, Setcontent] = useState('');
  const [img, Setimg] = useState('');
  const dispatch = useDispatch();
  let { slug } = useParams();

  useEffect(() => {
    if (slug) {
      if (blog && blog.length > 0) {
        blog.find((item) => {
          if (item.slug === slug) {
            Settitle(item.title.rendered);
            Setcontent(item.content.rendered);
          }
        });
      } else {
        Setcontent('');
        Settitle('');
      }
      dispatch(LoadPostContent(slug));
    }
  }, [slug]);
  useEffect(() => {
    window.scrollTo(0, 0);
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
  return (
    <Layout sidebar breadcrumb {...props} title={`Post Content`} img={img}>
      <div className="content">
        <h3 className="text-center">
          {title ? ReactHtmlParser(title) : renderTitle()}
        </h3>
        <div className="content-body">
          {content ? ReactHtmlParser(content) : renderContent()}
        </div>
      </div>
    </Layout>
  );
}

export default BlogPost;

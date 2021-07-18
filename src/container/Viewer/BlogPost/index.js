import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../../component/Viewer/Layout';
import { LoadPostContent, FetchImageBlog } from './../../../action';
import ReactHtmlParser from 'react-html-parser';
import { useHistory, useParams } from 'react-router-dom';
import '../Style/style.scss';
function BlogPost(props) {
  const post = useSelector((state) => state.blog.post);
  const blog = useSelector((state) => state.blog.data);
  const [title, Settitle] = useState('');
  const [content, Setcontent] = useState('');
  const [img, Setimg] = useState(null);
  const dispatch = useDispatch();
  let { slug } = useParams();

  useEffect(() => {
    if (slug) {
      if (blog && blog.length > 0) {
        blog.find((item) => {
          if (item.slug === slug) {
            Settitle(item.title.rendered);
            Setcontent(item.content.rendered);
            Setimg(item._embedded['wp:featuredmedia'][0].source_url);
          }
        });
      } else {
        Setcontent('');
        Settitle('');
        Setimg(null);
      }
      dispatch(LoadPostContent(slug));
    }
  }, [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <Layout
      sidebar
      breadcrumb
      {...props}
      title={`Post Content`}
      img={
        post.length > 0
          ? post[0]._embedded['wp:featuredmedia'][0].source_url
          : img
      }
      back
    >
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

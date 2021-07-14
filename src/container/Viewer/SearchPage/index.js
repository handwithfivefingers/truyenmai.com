import React, { useState, useEffect } from 'react';
import Layout from '../../../component/Viewer/Layout';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../../component/Viewer/UI/CardItem';
// import { FetchBlogPost, FetchImageBlog } from '../../action';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
// import './style.scss';
function SearchPage(props) {
  const [post, Setpost] = useState([]);
  let location = useLocation();
  useEffect(() => {
    let params = location.search.split('?')[1];
    const result = axios.get(`http://localhost/api/post/search/${params}`);
    result
      .then((res, req) => {
        if (res.status === 200) {
          Setpost(res.data.post);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location.search]);

  const renderCardPost = () => {
    let xhtml = null;
    xhtml = post?.map((item, index) => {
      return (
        <div className="col-md-6 col-lg-4 mt-4" key={item.title}>
          <div className={`card-ui`}>
            <div
              className="card-ui-imageContainer"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_PUBLIC_FILE}/${item.postImage[0].img})`,
              }}
            >
              <div className="card-ui-cat">
                {/* {props.categories && props.categories.length > 0
            ? props.categories.map((cat, index) => {
                return <span key={index}>{cat}</span>;
              })
            : ''} */}
              </div>
            </div>
            <div className="card-ui-title">
              <h5>{ReactHtmlParser(item.title)}</h5>
            </div>
            <div className="card-ui-content">
              {ReactHtmlParser(item.excerpt)}
              <hr className="dropdown-divider" />
            </div>

            <div className="card-ui-action">
              <ul className="card-ui-block">
                <li>
                  <Link className="card-ui-item" to={`/blog/${item.slug}`}>
                    Xem thêm
                    {/* <BsForwardFill /> */}
                  </Link>
                </li>
              </ul>
              <div className="card-ui-author">
                {/* <BsInfo size="1rem" /> */}
                <span>David Simon</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return xhtml;
  };
  return (
    <Layout sidebar breadcrumb title="Search Page" col {...props}>
      <div className="row">
        {post ? <h3>Result for: {location.search.split('?')[1]}</h3> : ''}
        {post ? renderCardPost() : ' '}
      </div>
    </Layout>
  );
}

export default SearchPage;

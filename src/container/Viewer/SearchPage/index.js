import React, { useState, useEffect } from 'react';
import Layout from '../../../component/Viewer/Layout';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../../component/Viewer/UI/CardItem';
// import { FetchBlogPost, FetchImageBlog } from '../../action';;
import { Link } from 'react-router-dom';
import { SearchBlogPost } from './../../../action';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import './style.scss';
function SearchPage(props) {
  const search = useSelector((state) => state.blog.search);

  let location = useLocation();

  // useEffect(() => {
  //   let params = location.search.split('?')[1];
  //   const result = axios.get(`http://localhost/api/post/search/${params}`);
  //   result
  //     .then((res, req) => {
  //       if (res.status === 200) {
  //         Setpost(res.data.post);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [location.search]);

  const dispatch = useDispatch();
  useEffect(() => {
    let params = location.search.split('?')[1];
    dispatch(SearchBlogPost(params));
    window.scrollTo(0, 0);
  }, [location.search]);

  const renderCardPost = () => {
    let xhtml = null;
    xhtml = search?.map((post, index) => {
      return (
        // <CSSTransition key={index} timeout={500} classNames="item-transition">
        <div className="col-md-6 col-lg-4 mt-4" key={index}>
          <CardItem {...post} />
        </div>
        // </CSSTransition>
      );
    }) || <Skeleton count={9} />;
    return xhtml;
  };
  const renderSkeleton = () => {
    let xhtml = [];

    for (let i = 1; i <= 9; i++) {
      xhtml.push(
        <div className="col-md-6 col-lg-4 mt-4">
          {/* <SkeletonTheme color="#eee" highlightColor="#ccc"> */}
          <SkeletonTheme>
            <p>
              <Skeleton
                height={150}
                duration={3 }
                className="card-ui"
              />
            </p>
          </SkeletonTheme>
          ;
        </div>
      );
    }
    return xhtml;
  };
  return (
    <Layout sidebar breadcrumb title="Search Page" col {...props}>
      {/* <CSSTransition
        in={props.breadcrumb}
        timeout={500}
        classNames="item-transition"
      >
        <TransitionGroup className="row"> */}
      <div className="row">
        {<h3>Result for: {location.search.split('?')[1]}</h3>}
        {search? renderCardPost(): renderSkeleton()}
      </div>

      {/* </TransitionGroup>
      </CSSTransition> */}
    </Layout>
  );
}

export default SearchPage;

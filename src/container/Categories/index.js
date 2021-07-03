import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../component/UI/CardItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useHistory } from 'react-router-dom';
import './style.css';

function Categories(props) {
  const history = useHistory();
  console.log(history);
  return (
    <Layout sidebar pagination breadcrumb title="Our Categories" col {...props}>
      {/* <CSSTransition
        in={props.breadcrumb}
        timeout={500}
        classNames="item-transition"
      >
        <div className="row">
          <TransitionGroup className="row">
            {blog.data &&
              blog.data.map((post, index) => {
                return (
                  <CSSTransition
                    key={index}
                    timeout={500}
                    classNames="item-transition"
                  >
                    <div className="col-md-6 col-lg-4 mt-3">
                      <CardItem {...post} />
                    </div>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </div>
      </CSSTransition> */}
      Categories
    </Layout>
  );
}

export default Categories;

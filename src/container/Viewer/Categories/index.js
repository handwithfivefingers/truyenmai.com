import React, { useState, useEffect } from 'react';
import Layout from '../../../component/Viewer/Layout';
import { useHistory, useParams } from 'react-router-dom';
import './style.scss';

function Categories(props) {
  let history = useHistory();
  let {slug} = useParams();
  console.log(slug);
  // console.log(history);
  return (
    <Layout sidebar breadcrumb title="Our Categories" col {...props}>
      <div className="main-cate">
        <div className="cate-img">
          <img src="..." alt="..." />
        </div>
        <div className="cate-content">
          <div className="cate-title">
            <h3>First Category </h3>
          </div>
          <div className="cate-desc">
            <p>First Description</p>

            <ul class="card-ui-block">
              <li>
                <a class="card-ui-item" href="/blog/css-padding-serie-css-8">
                  Go to Somewhere
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Categories;

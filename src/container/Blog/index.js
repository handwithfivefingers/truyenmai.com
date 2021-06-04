import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { FetchBlogPost } from '../../action';
import CardItem from '../../component/UI/CardItem';
import { BiGridAlt } from 'react-icons/bi';
const data = [
  {
    id: '1',
    title: 'Post Demo 1',
    slug: 'post-demo-1',
    excerpt: 'đây là post demo 1',
    featureImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
    categories: ['demo', 'test'],
    type: 'post',
    status: 'publish',
  },
  {
    id: '2',
    title: 'Post Demo 2',
    slug: 'post-demo-2',
    excerpt: 'đây là post demo 2',
    featureImage:
      'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
    categories: ['newtest', 'test'],
    type: 'post',
    status: 'draft',
  },
  {
    id: '3',
    title: 'Post Demo 3',
    slug: 'post-demo-3',
    excerpt: 'đây là post demo 3',
    featureImage:
      'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg',
    categories: ['none', 'nonetest'],
    type: 'post',
    status: 'private',
  },
];
function Blog(props) {
  const dispatch = useDispatch();
  // const blog = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(FetchBlogPost());
  }, []);
  // console.log(props);
  return (
    <Layout sidebar match={props.match}>
      <div className="d-flex justify-content-between align-items-center">
        <h3 style={{ color: '#333', textAlign: 'left' }}>Our Blog</h3>
        <BiGridAlt size="22" animation="spin" />
      </div>
      <div className="row">
        {data && data.length > 0
          ? data.map((post, index) => {
              return (
                <div className="col-md-6 col-lg-4 mt-3" key={index}>
                  <CardItem {...post} />
                </div>
              );
            })
          : ''}
      </div>
    </Layout>
  );
}

export default Blog;

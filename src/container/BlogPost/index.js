import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';

function BlogPost(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);
  // console.log(props);
  return (
    <Layout sidebar breadcrumb {...props}>
      <div className="content">
        <div className="content-title">Our content</div>
        <div className="content-body"></div>
      </div>
    </Layout>
  );
}

export default BlogPost;

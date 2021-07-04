import React, { useState, useEffect } from 'react';
import Layout from '../../component/Layout';
import { useHistory } from 'react-router-dom';
import './style.css';

function Categories(props) {
  const history = useHistory();
  console.log(history);
  return (
    <Layout sidebar pagination breadcrumb title="Our Categories" col {...props}>
      Categories
    </Layout>
  );
}

export default Categories;

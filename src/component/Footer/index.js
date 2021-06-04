import React, { useState, useEffect } from 'react';

function Footer(props) {
  useEffect(() => {
    return () => {};
  }, []);

  return <footer style={{ height: '200px' , marginTop:'50px', background:'#fff'}}>Footer Here</footer>;
}

export default Footer;

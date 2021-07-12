import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADM_Fetch_Post } from '../../../action';
import { Link } from 'react-router-dom';
import { BsPencilSquare } from 'react-icons/bs';
function AdminPosts(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.action.posts);
  useEffect(() => {
    dispatch(ADM_Fetch_Post());
  }, []);
  // console.log(posts);
  const Editmode = () => {
    console.log('editting');
  };
  return (
    <>
      <div className="action-btn" style={{ float: 'left', margin: ' 5px' }}>
        <button className="btn btn-light">Add new <BsPencilSquare /></button>
      </div>
      <div className="content">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title </th>
              <th>Slug</th>
              <th>Content</th>
              <th>Img</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map((item, index) => {
              return (
                <tr key={item._id}>
                  <th>
                    {item._id.substring(item._id.length - 5, item._id.length)}
                  </th>
                  <td
                    style={{
                      cursor: 'pointer',
                      color: 'var(--bs-primary)',
                    }}
                  >
                    <Link to={`/dashboard/posts/${item.slug}`} post={item}>
                      {item.title}
                    </Link>
                  </td>
                  <td>{item.slug}</td>
                  <td>{item.content}</td>
                  <td>
                    <img
                      src={`${process.env.REACT_APP_PUBLIC_FILE}/${item.postImage[0].img}`}
                      width="150"
                      height="auto"
                    />
                  </td>
                  <td>
                    <button className="btn btn-light">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminPosts;

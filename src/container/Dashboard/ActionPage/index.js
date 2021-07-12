import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADM_Fetch_Single_Post } from '../../../action';

function ActionPage(props) {
  const [post, SetPost] = useState({});

  const [title, SetTitle] = useState('');
  const [content, SetContent] = useState('');
  const [excerpt, SetExcerpt] = useState('');
  // const [slug,SetSlug] = useState('');
  const [postImage, SetPostImage] = useState({});
  const [status, SetStatus] = useState(false);

  let { slug } = useParams();
  console.log(slug);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ADM_Fetch_Single_Post(slug)).then((res) => {
      SetTitle(res.title);
      SetContent(res.content);
      SetExcerpt(res.excerpt ? res.excerpt : '');
      SetPostImage(res.postImage[0]);
      SetStatus(res.status);
    });
    return () => {};
  }, []);

  return (
    <>
      {console.log(post)}
      <h4>Chỉnh sửa bài viết</h4>
      <form>
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              Small
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </form>
      <h1> {title}</h1>
      <p>{content}</p>
      <p> {status}</p>
      <img src={`${process.env.REACT_APP_PUBLIC_FILE}/${postImage.img}`} />
      <p> {excerpt}</p>
    </>
  );
}

export default ActionPage;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADM_Fetch_Single_Post } from '../../../action';
import Input from '../../../component/Dashboard/UI/Input';
import './style.scss';
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
    <div className="row action-page ">
      <h4>Chỉnh sửa bài viết</h4>
      <div className="col-12">
        <form className="row">
          <div className="col-9">
            <div class="mb-3">
              <label class="form-label">Title</label>
              <input
                type="text"
                class="form-control form-control-sm"
                value={title}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Excerpt</label>
              <Input type="text" data={excerpt} />
            </div>
            <div class="mb-3">
              <label class="form-label">Content</label>
              <Input type="editor" data={content} />
            </div>
          </div>
          <div className="col-3">
            <div class="mb-3">
              <label class="form-label">Status</label>
              <Input type="select" defaultValue={status}>
                <option value={true}> True </option>
                <option value={false}> False </option>
              </Input>
            </div>
            <div
              class="mb-3 img-features"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_PUBLIC_FILE}/${postImage.img})`,
              }}
            >
              <span>Image Features</span>
              <input id="file-upload" class=" form-control" type="file" />
            </div>
            <div class="mb-3 img-features">
              <button type="submit" className="btn btn-primary">
                Saves change
              </button>
            </div>
          </div>
        </form>

        <p> {excerpt}</p>
      </div>
    </div>
  );
}

export default ActionPage;

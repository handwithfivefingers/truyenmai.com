import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ADM_Fetch_Single_Post } from '../../../action';
import Input from '../../../component/Dashboard/UI/Input';
import './style.scss';
function ActionPage(props) {
  const [post, SetPost] = useState({});
  const [title, SetTitle] = useState('');
  const [content, SetContent] = useState('');
  const [excerpt, SetExcerpt] = useState('');
  const [category, Setcategory] = useState(null);
  const [postImage, SetPostImage] = useState({});
  const [status, SetStatus] = useState(false);
  const categoryList = useSelector((state) => state.action.category);
  let { slug } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ADM_Fetch_Single_Post(slug)).then((res) => {
      SetTitle(res.title);
      SetContent(res.content);
      SetExcerpt(res.excerpt ? res.excerpt : '');
      SetPostImage(res.postImage[0]);
      SetStatus(res.status);
      // Setcategory(res.category);
      console.log(categoryList);
    });
    return () => {};
  }, []);
  useEffect(() => {
    if (categoryList.length <= 0) {
      history.push('/dashboard/posts');
    }
  }, [categoryList]);
  const handleCategories = (val) => {
    let cate = [val];
    if (category !== undefined) {
      for (let cat of category) {
        cate.push(cat);
      }
    }
    Setcategory(cate);
  };
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
            {/** Status  */}
            <div class="mb-3">
              <label class="form-label">Status</label>
              <Input type="select" defaultValue={status}>
                <option value={true}> True </option>
                <option value={false}> False </option>
              </Input>
            </div>
            {/** Status  */}
            {/** Categories  */}
            <div class="mb-3">
              <label class="form-label">Categories</label>
              <ul>
                {categoryList?.map((item) => {
                  return <li className="category">{item.name}</li>;
                })}
              </ul>

              <Input
                type="select"
                defaultValue={1}
                onChange={(e) => handleCategories(e.target.value)}
              >
                {categoryList?.map((item) => {
                  return <option value={item._id}> {item.name} </option>;
                })}
              </Input>
            </div>
            {/** Categories  */}
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

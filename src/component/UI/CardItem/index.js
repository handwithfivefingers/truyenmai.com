import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BiCalendarEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ModalForm from '../Modal';
import Input from '../Input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MyCustomUploadAdapterPlugin from '../../../helper/UploadAdapter';
import ReactHtmlParser from 'react-html-parser';
import './style.scss';
import { useDispatch } from 'react-redux';

function CardItem(props) {
  const [show, setShow] = useState(false);
  const [EditPostModal, setEditPostModal] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editExcerpt, setEditExcerpt] = useState('');
  const [editCat, setEditCat] = useState([]);
  const [editType, setEditType] = useState('');
  const [featureImage, setFeatureImage] = useState([]);
  const [image, Setimage] = useState('');
  const dispatch = useDispatch();
  const handleClose = () => {
    setShow(false);
    setEditPostModal(false);
  };

  // const EditPost = (props) => {
  //   return (
  //     <Modal show={EditPostModal} onHide={handleClose} size="lg">
  //       <Modal.Header>
  //         <Modal.Title>{`Edit Post`}</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <div className="row">
  //           <div className="col-8 mt-3">
  //             <label>Title</label>
  //             <Input
  //               className="form-control form-control-sm"
  //               type="text"
  //               placeholder={`${props.title}`}
  //               value={editTitle}
  //               onChange={(e) => setEditTitle(e.target.value)}
  //             />
  //             <label className="mt-3">Description</label>
  //             <CKEditor
  //               editor={ClassicEditor}
  //               data={props.excerpt}
  //               config={{ extraPlugins: [MyCustomUploadAdapterPlugin] }} //use
  //               // onReady={(editor) => {
  //               //   // You can store the "editor" and use when it is needed.
  //               //   console.log('Editor is ready to use!', editor);
  //               // }}
  //               onChange={(event, editor) => {
  //                 const data = editor.getData();
  //                 console.log({ event, editor, data });
  //               }}
  //               // onBlur={(event, editor) => {
  //               //   console.log('Blur.', editor);
  //               // }}
  //               // onFocus={(event, editor) => {
  //               //   console.log('Focus.', editor);
  //               // }}
  //             />
  //           </div>

  //           <div className="col-4 mt-3">
  //             <label>Feature Image</label>
  //             <input
  //               type="file"
  //               className="imageContainer form-control form-control-sm"
  //               onChange={handleFeatureImage}
  //               name="featureImage"
  //               style={{
  //                 background: `url(${props.featureImage}) no-repeat center`,
  //                 backgroundSize: 'cover',
  //                 height: '125px',
  //               }}
  //             />

  //             <label>Type</label>
  //             <Input
  //               type="select"
  //               className="form-control form-control-sm"
  //               onChange={(e) => setEditType(e.target.value)}
  //               options={['post', 'page', 'widget']}
  //             />

  //             <label>Categories</label>
  //             <Input
  //               type="select"
  //               className="form-control form-control-sm"
  //               multiple
  //               onChange={(e) =>
  //                 setEditCat(
  //                   [].slice
  //                     .call(e.target.selectedOptions)
  //                     .map((item) => item.value)
  //                 )
  //               }
  //               options={props.categories}
  //             />
  //             <p>
  //               Status:{' '}
  //               <span style={{ fontWeight: 'bold' }}> {props.status}</span>
  //             </p>
  //             <div className="col mt-3">
  //               <Button variant="secondary" onClick={handleSave}>
  //                 Save Change
  //               </Button>
  //             </div>
  //           </div>
  //         </div>
  //       </Modal.Body>
  //     </Modal>
  //   );
  // };
  // const handleFeatureImage = (e) => {
  //   setFeatureImage(e.target.files[0]);
  // };
  // const handleSave = () => {
  //   const form = new FormData();
  //   form.append('title', editTitle);
  //   form.append('excerpt', editExcerpt);
  //   form.append('categories', editCat);
  //   form.append('type', editType);
  //   form.append('featureImage', featureImage);
  //   // console.log(editTitle, editExcerpt, editCat, editType, featureImage);
  // };
  // const OnEdittingExcerpt = (e) => {
  //   setEditExcerpt(e.toString());
  // };
  const renderModal = () => {
    return (
      <ModalForm
        show={show}
        handleClose={handleClose}
        title={ReactHtmlParser(props.title.rendered)}
      >
        {ReactHtmlParser(props.excerpt.rendered)}
      </ModalForm>
    );
  };

  // Lỗi chỗ này nè
  // const FetchImagePost = async () => {
  //   const img = await dispatch(FetchImageBlog(props.featured_media));
  //   Setimage(img.guid.rendered);
  // };
  // Hết rồi nè

  return (
    <div className="card-ui">
      <div
        className="card-ui-imageContainer"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="card-ui-cat">
          {/* {props.categories && props.categories.length > 0
            ? props.categories.map((cat, index) => {
                return <span key={index}>{cat}</span>;
              })
            : ''} */}
        </div>
      </div>
      <div className="card-ui-title">
        <h5>
          {props.title.rendered.length
            ? ReactHtmlParser(props.title.rendered)
            : ''}
        </h5>
      </div>
      <div className="card-ui-content">
        {props.excerpt.rendered.length > 150
          ? ReactHtmlParser(props.excerpt.rendered.slice(0, 150).concat(' ...'))
          : ReactHtmlParser(props.excerpt.rendered)}
      </div>
      <div className="card-ui-action">
        <ul className="card-ui-block">
          <li>
            <a className="card-ui-item" onClick={(e) => setShow(true)}>
              Excerpt
            </a>
          </li>
          <li>
            <Link className="card-ui-item" to={`/blog/${props.slug}`}>
              Access
            </Link>
          </li>
        </ul>

        {/* <a className="btn" onClick={() => setEditPostModal(true)}>
          <BiCalendarEdit />
        </a> */}
      </div>
      {renderModal()}
      {/* {EditPost(props)} */}
    </div>
  );
}

export default CardItem;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BiCalendarEdit } from 'react-icons/bi';
import ReactQuill from 'react-quill'; // ES6
import { Link } from 'react-router-dom';
import ModalForm from '../Modal';
import Input from '../Input';
import './style.scss';
function CardItem(props) {
  const [show, setShow] = useState(false);

  const [EditPostModal, setEditPostModal] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editExcerpt, setEditExcerpt] = useState('');
  const [editCat, setEditCat] = useState([]);
  const [editType, setEditType] = useState('');
  const [featureImage, setFeatureImage] = useState([]);
  const handleClose = () => {
    setShow(false);
    setEditPostModal(false);
  };

  useEffect(() => {}, []);

  const EditPost = (props) => {
    return (
      <Modal show={EditPostModal} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>{`Edit Post`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-8 mt-3">
                <label>Title</label>
                <Input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder={`${props.title}`}
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <label>Description</label>
                <ReactQuill
                  style={{ height: '100px' }}
                  value={editExcerpt !== '' ? editExcerpt : props.excerpt}
                  onChange={(e) => OnEdittingExcerpt(e)}
                />
              </div>

            <div className="col-4 mt-3">
              <label>Feature Image</label>
              <input
                type="file"
                className="imageContainer form-control form-control-sm"
                onChange={handleFeatureImage}
                name="featureImage"
                style={{
                  background: `url(${props.featureImage}) no-repeat center`,
                  backgroundSize: 'cover',
                  height: '125px',
                }}
              />

              <label>Type</label>
              <Input
                type="select"
                className="form-control form-control-sm"
                onChange={(e) => setEditType(e.target.value)}
                options={['post', 'page', 'widget']}
              />

              <label>Categories</label>
              <Input
                type="select"
                className="form-control form-control-sm"
                multiple
                onChange={(e) =>
                  setEditCat(
                    [].slice
                      .call(e.target.selectedOptions)
                      .map((item) => item.value)
                  )
                }
                options={props.categories}
              />
              <p>
                Status:{' '}
                <span style={{ fontWeight: 'bold' }}> {props.status}</span>
              </p>
              <div className="col mt-3">
                <Button variant="secondary" onClick={handleSave}>
                  Save Change
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  };
  const handleFeatureImage = (e) => {
    setFeatureImage(e.target.files[0]);
  };
  const handleSave = () => {
    const form = new FormData();
    form.append('title', editTitle);
    form.append('excerpt', editExcerpt);
    form.append('categories', editCat);
    form.append('type', editType);
    form.append('featureImage', featureImage);
    console.log(editTitle, editExcerpt, editCat, editType, featureImage);
  };
  const OnEdittingExcerpt = (e) => {
    setEditExcerpt(e.toString());
  };
  const renderModal = () => {
    return (
      <ModalForm show={show} handleClose={handleClose} title={props.title}>
        {props.excerpt}
      </ModalForm>
    );
  };
  return (
    <div className="card-ui">
      <div
        className="card-ui-imageContainer"
        style={{ background: `url(${props.featureImage}) no-repeat center` }}
      >
        <div className="card-ui-cat">
          {props.categories && props.categories.length > 0
            ? props.categories.map((cat, index) => {
                return <span key={index}>{cat}</span>;
              })
            : ''}
        </div>
      </div>
      <div className="card-ui-title">
        <h4>
          {props.title.length > 65
            ? props.title.slice(0, 65).concat(' ...')
            : props.title}
        </h4>
      </div>
      <div className="card-ui-content">
        <p>
          {props.excerpt.length > 150
            ? props.excerpt.slice(0, 150).concat(' ...')
            : props.excerpt}
        </p>
      </div>
      <div className="card-ui-action">
        <a className="btn" onClick={(e) => setShow(true)}>
          Excerpt
        </a>
        <Link className="btn" to={`/blog/${props.slug}`}>
          Access
        </Link>
        <a className="btn" onClick={() => setEditPostModal(true)}>
          <BiCalendarEdit />
        </a>
      </div>
      {renderModal()}
      {EditPost(props)}
    </div>
  );
}

export default CardItem;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { BiCalendarEdit } from 'react-icons/bi';
import ReactQuill from 'react-quill'; // ES6
import { Link } from 'react-router-dom';
import './style.scss';
function CardItem(props) {
  const [show, setShow] = useState(false);

  const [EditPostModal, setEditPostModal] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editCat, setEditCat] = useState('');
  const [editType, setEditType] = useState('');
  const handleClose = () => {
    setShow(false);
    setEditPostModal(false);
  };

  useEffect(() => {}, []);

  const renderModal = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.excerpt}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  const EditPost = (props) => {
    return (
      <Modal show={EditPostModal} onHide={handleClose} size="md">
        <Modal.Header>
          <Modal.Title>{`Edit Post`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 mt-3">
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder={`${props.title}`}
              />
            </div>
            <div className="col-12 mt-3">
              <ReactQuill
                value={props.excerpt}
                onChange={(e) => OnEdittingExcerpt(e)}
              />
            </div>

            <div className="col-12 mt-3">
              <div class="row">
                <div class="col-2">
                  <label>{props.type}</label>
                </div>
                <div class="col-10">
                  <select className="form-control form-control-sm">
                    <option value="">Select Type ?</option>
                    <option value="post">Post</option>
                    <option value="page">Page</option>
                    <option value="widget">Widget</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Save Change
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  const OnEdittingExcerpt = (e) => {
    console.log();
  };
  const renderContent = (e) => {
    console.log(props);
  }
  return (
    <div className="card-ui">
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
        <Link className="btn" to={`/blog/${props.slug}`} onClick={(e) => renderContent()}>
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

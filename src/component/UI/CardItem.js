import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
function CardItem(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    useEffect(() => {
    }, []);
    const renderModal = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{props.title.rendered}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.excerpt.rendered}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    return (
        <div className="card">
            <div className="title">
                <h4>
                    {props.title.rendered.length > 65 ? props.title.rendered.slice(0, 65).concat(' ...') : props.title.rendered}
                </h4>
            </div>
            <div className="content">
                <p>
                    {props.excerpt.rendered.length > 150 ? props.excerpt.rendered.slice(0, 150).concat(' ...') : props.excerpt.rendered}
                </p>
            </div>
            <div className="action">
                <button className="btn btn-light" style={{ margin: '0 5px' }} onClick={(e) => setShow(true)}>
                    Mô tả ngắn
                </button>
                <button className="btn btn-light">
                    Truy cập
                </button>
            </div>
            { renderModal()}
        </div >

    )
}

export default CardItem;
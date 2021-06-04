import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
function ModalForm(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleSave}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;

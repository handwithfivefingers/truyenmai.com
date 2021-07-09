import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
function ModalForm(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Modal show={props.show} onHide={props.handleClose} size="lg">
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Closed
        </Button>
        <Button variant="primary" onClick={props.handleSave}>
          Saving
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalForm;

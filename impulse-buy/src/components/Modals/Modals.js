import React from 'react';

// Import from Bootstrap
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

// Import from Js files
import Buttons from "../Buttons/Grey/ButtonsGrey.js";

/* A modal with styling to be used in the website */

// Accept show and onHide as props
const Modals = ({ show, onHide, modalTitle, modalBody }) => {

  return (
    <Container className='container'>
      <Modal
        show={show} // Use the show prop
        onHide={onHide} // Use the onHide prop
        centered>
        <Modal.Header closeButton>
          {/* Displays the modal's title */}
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Renders the content provided */}
          {modalBody}
        </Modal.Body>
        <Modal.Footer>
          {/* Renders a custom grey button */}
          <Buttons onClick={onHide} label="Got it!" /> {/* Use onHide for the footer button */}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Modals;
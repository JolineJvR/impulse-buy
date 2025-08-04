// Import from React
import React from 'react';

// Import from bootstrap
import Button from "react-bootstrap/Button";

// Import styling
import "./ButtonsPurple.css";
import Container from 'react-bootstrap/esm/Container';

/* Styled purple button */

const Buttons = ({ label, ...props }) => {
  return (
    <Container className='space-please'>
    <Button
      variant='secondary'
      className="btn-purple styling-purple"
      size="lg"
      // Allows for anything that controls the button to be added here
      // (e.g. onClick...)
      {...props}>
      {/* Display the Name/label as the text content of the button */}
      {label}
    </Button>
    </Container>
  );
};

export default Buttons;
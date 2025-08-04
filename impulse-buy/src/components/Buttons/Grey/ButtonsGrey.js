// Import from React
import React from 'react';

// Import from bootstrap
import Button from "react-bootstrap/Button";

// Import styling
import "./ButtonsGrey.css";

/* Styled grey button */

const Buttons = ({ label, ...props }) => {
  return (
    <Button
      variant='secondary'
      className="btn-grey styling-grey"
      // Allows for anything that controls the button to be added here
      // (e.g. onClick...)
      size="lg"
      {...props}>
      {/* Display the Name/label as the text content of the button */}
      {label}
    </Button>
  );
};

export default Buttons;
// Import from React
import React from 'react';

// Import from Bootstrap
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

// Import from JS components
import Buttons from "../../Buttons/Grey/ButtonsGrey.js";

// Import from css files
import "./CardsPurple.css";

/* A card styled with purple background and grey box shadow */

const CardsPurple = ({
  cardImg,
  cardTitle,
  cardInfo,
  cardText1,
  cardText2,
  cardButton1,
  cardButton2,
  cardButton3,
  cardButton4,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  showModal,
  newCard,
  children
}) => {
  return (
    <Container className='container'>
      <Card className='card-purple bg-purple item-alignment-purple'>
        {/* Conditionally renders an image at the top of the card if given */}
        {cardImg && <Card.Img variant='top' src={cardImg} className='card-img' />}
        {/* Conditionally renders another React component if given */}
        {newCard && newCard}
        <Card.Body>
          {/* The Main Title of the card */}
          <Card.Title className='card-decoration-purple'>
            {cardTitle}{" "}
            {/* Conditionally renders info if given */}
            {cardInfo && (
              <span onClick={showModal} style={{ cursor: 'pointer' }}>
                {cardInfo}
              </span>
            )}
          </Card.Title>
          {/* Conditionally render text */}
          {cardText1 && <Card.Text>{cardText1}</Card.Text>}
          {/* Conditionally renders any children that might be passed */}
          {children}
          {/* Conditionally render text */}
          {cardText2 && <Card.Text>R {cardText2}</Card.Text>}
          {/* Stacks for vertically arranging buttons */}
          <Stack>
            <div style={{height: "7px"}}/>
            {/* Conditionally renders buttons if given */}
            {cardButton1 && <Buttons label={cardButton1} onClick={onClick1} />}
            <div style={{height: "15px"}}/>
            {/* Conditionally renders buttons if given */}
            {cardButton2 && <Buttons label={cardButton2} onClick={onClick2} />}
            <div style={{height: "15px"}}/>
            {/* Conditionally renders buttons if given */}
            {cardButton3 && <Buttons label={cardButton3} onClick={onClick3} />}
            <div style={{height: "15px"}}/>
            {/* Conditionally renders buttons if given */}
            {cardButton4 && <Buttons label={cardButton4} onClick={onClick4} />}
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardsPurple;

// Import from React
import React from 'react';

// Import from bootstrap
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Import from Js Components
import Buttons from "../../Buttons/Purple/ButtonsPurple.js";

// Import from CSS files
import "./CardsGrey.css";

/* Styled Grey card with a purple box shadow */

const CardsGrey = ({
  cardImg,
  cardTitle,
  cardSubtitle1,
  cardSubtitle2,
  cardText1,
  cardText2,
  cardText3,
  subTotal,
  costs,
  cardButton1,
  cardButton2,
  onClick1,
  onClick2,
  cardForm }) => {
  return (
    <Container >
      <Card className='card-grey bg-grey item-alignment-grey'>
        {/* Conditionally renders an image at the top of the card if "cardImg" prop */}
        {cardImg && <Card.Img variant='top' src={cardImg} />}
        <Card.Body>
          {/* The Main Title of th card, with a custom class */}
          <Card.Title className='card-decoration'>{cardTitle}</Card.Title>
          <Row>
            {/* Column for the first subtitle and related text. Goes full width */}
            <Col xs={12}>
              {cardSubtitle1 && <Card.Subtitle>{cardSubtitle1}</Card.Subtitle>}
              <div style={{ height: "20px" }} />
              {cardText2 &&
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {cardText2}
              </div>}
            </Col>
            {/* Column for the second subtitle and related text. */}
            <Col>
            {/* Conditionally render the second subtitle */}
              {cardSubtitle2 && <Card.Subtitle>{cardSubtitle2}</Card.Subtitle>}
              <div style={{ height: "20px" }} /> {/* div for vertiacl spacing */}
              {cardText3 && <Card.Text>{cardText3}</Card.Text>}
            </Col>
            {/* Conditionally render as cardForm if provided */}
            <Col>
              {cardForm && cardForm}
            </Col>
          </Row>
          <Card.Text>{cardText1}</Card.Text>
          <Row>
            {/* Conditionally renders a subtotal if given */}
            <Col>
              {subTotal && <Card.Subtitle>{subTotal}</Card.Subtitle>}
            </Col>
            {/* Conditionally renders a cost if given */}
            <Col>
              {costs && <Card.Subtitle>R {costs}</Card.Subtitle>}
            </Col>
          </Row>
          {/* Conditionally render custom buttons */}
          {cardButton1 && <Buttons label={cardButton1} onClick={onClick1} />}
          {cardButton2 && <Buttons label={cardButton2} onClick={onClick2} />}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardsGrey;
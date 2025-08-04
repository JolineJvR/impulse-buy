// Import from React
import React from 'react';
import { useEffect } from "react";

//Import from Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import from Redux
import { useDispatch, useSelector } from "react-redux";

// Import functions from productSlice.js
import { addItem, featuredItem } from "../../Store/productsSlice.js";

// Import JS components
import Cards from "../../components/Cards/Purple/CardsPurple.js";
import Navigationbar from "../../components/Navigation/Navigationbar.js";

// Import css files
import "./Featured.css";

/* Displays a list of random products to the user */

const Featured = () => {
  // useDispatch hook to send actions to redux
  const dispatch = useDispatch();

  // useSelector hook to extract the featuredItems array
  const featured = useSelector(state => state.products.featuredItems);

  // All other side effects
  useEffect (() => {
    // Dispatches the featuredItem array to send actions to the redux page
    dispatch(featuredItem());
  }, [dispatch]);

  // Handles adding a featured item to the shopping cart
  const handleAddToCart = (item) => {
    dispatch(addItem({ cartItem: { ...item,qty:1 }}));
  };

  return (
    <div className='center-page'>
      {/* Renders global navbar at the top of the page */}
      <Navigationbar />
      <div style={{ height: "120px" }} />
      <div>
        {/* Heading for the section */}
        <h1>Featured Items:</h1>
      </div>
      <div style={{ height: "10px" }} />
      <Container className='container'>
        <Row>
          {/* Conditionally renders if the array exists */}
          {featured && featured.length > 0 ? (
            featured.map((item) => (
              // Each item is renders in a grid
              <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
                {/* Renders a purple card for each item */}
                <Cards
                  cardImg={item.image} // Item img
                  cardTitle={item.name} // item name
                  cardText1={item.description} // Item description
                  cardText2={item.price.toFixed(2)} // Item price
                  cardButton1="Add to Cart" // Button Label
                  // Button function
                  onClick1={() => handleAddToCart(item)} />
              </Col>
            ))
          ) : (
            // Renders loading page if there are no items loaded
            <Col><p>Loading featured items...</p></Col>
          )}
          <div style={{ height: "15px" }} />
        </Row>
      </Container>
    </div>
  );
};

export default Featured;

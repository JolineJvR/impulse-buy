// Import from React
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// Import from Redux
import { useDispatch, useSelector } from "react-redux";

// Import functions from productsSlice.js
import { addItem, setSearchResults } from "../../Store/productsSlice.js";

// Import from Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';


// Import JS components
import Cards from "../../components/Cards/Purple/CardsPurple.js";
import Navigationbar from "../../components/Navigation/Navigationbar.js";

// Import Css files
import "./Products.css";

/* Products page displays a list of products, allowing users to search for their
   desired product */

const Products = () => {
  // useDispatch hook to send actions to redux
  const dispatch = useDispatch();
  // Array that holds the items
  const displayedProducts = useSelector(state => state.products.searchResults);
  // Manages the search field
  const [searchTerm, setSearchTerm] = useState("");

  // Implements search functionality
  useEffect(() => {
    // Sets a timeout to dispatch the search action after a delayed time
    const handler = setTimeout(() => {
      dispatch(setSearchResults(searchTerm));
    }, 300);

    // Clear function after action
    return () => {
      clearTimeout(handler);
    };
  }, [dispatch, searchTerm]);

  // Handle searching of items
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handles adding items to cart
  const handleAddToCart = (item) => {
    dispatch(addItem({ cartItem: { ...item, qty: 1 }}));
  };

  return (
    <div className='center-page'>
      {/* Renders global navbar at the top of the page */}
      <Navigationbar />
      <div style={{ height: "120px" }} />
      <div className='search-bar-container'>
        {/* Search input */}
        <Form.Control
          size="lg"
          type="text"
          placeholder="Search for your product"
          value={searchTerm} // Binds the input value
          onChange={handleSearchChange} />
      </div>
      <div style={{ height: "20px" }} />
        <Container className='container'>
          <Row>
            {displayedProducts.length > 0 ? (
              displayedProducts.map(item => (
                // Each product is rendered within a grid
                <Col key={item.id}>
                  {/* Renders a Purple card */}
                  <Cards
                    cardImg={item.image} // Items img
                    cardTitle={item.name} // Items name
                    cardText1={item.description} // items description
                    cardText2={item.price.toFixed(2)} // Items price
                    cardButton1="Add To Cart" // Button label
                    // Button actions
                    onClick1={() => handleAddToCart(item)} />
                </Col>
              ))
            ) : (
              // Displays message if there are no products
              <p>No products found for your search</p>
            )}
          <div style={{ height: "15px" }} />
        </Row>
      </Container>
    </div>
  );
};

export default Products;

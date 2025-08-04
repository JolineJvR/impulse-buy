// Import from React
import React from 'react';

// Import from Bootstrap
import Container from 'react-bootstrap/esm/Container.js';
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import from Router
import { useNavigate } from 'react-router-dom';

// Import from Redux
import { useSelector, useDispatch } from "react-redux";

// Import reducers from productSlice.js in Store folder
import { addItem, removeItem } from "../../../Store/productsSlice.js";

// Import JS Components
import Buttons from "../../../components/Buttons/Purple/ButtonsPurple.js"
import Navigationbar from "../../../components/Navigation/Navigationbar.js";
import Cards from "../../../components/Cards/Grey/CardsGrey.js";

// Import from css
import "./Cart.css";

/* This page displays the users cart, bringing any chosen item into a
   scrollable list. */

const Cart = () => {
  // useNavigate hook to allow for navigation around the different pages
  const nav = useNavigate();

  // useDispatch hook to send actions to redux
  const dispatch = useDispatch();

  // Extract data from the redux store
  const { cart, qty, total } = useSelector(state => state.products);

  // Handle adding item(s) to cart
  const handleAddItem = (item) => {
    // Dispatches an action to add the item and is set for incrementing and or
    // decrementing
    dispatch(addItem({ cartItem: { ...item, qty: 1 } }));
  };

  // Handle removing item(s) from cart
  const handleRemoveItem = (id) => {
    // Dispatches an action to remove the item from the cart
    dispatch(removeItem({ id }));
  }

  return (
    <div className='center-page'>
      {/* Renders global navbar at the top of the page */}
      <Navigationbar />
      <Container className='container'>
        {/* Renders the grey card component to hold the content */}
        <Cards
          cardTitle="Cart" // Title of the card
          cardSubtitle1={`Items in cart: ${qty}`} // Displays the amount in the cart
          // Renders the list of cart items
          cardText2={
            <ListGroup variant="flush">
              {/* Conditionally renders only if there are items in the cart */}
              {cart.length > 0 ? (
                cart.map(item => (
                  // Each item is render as a ListGroup item
                  <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                    {/* Organises the item details */}
                    <Row className="flex-grow-1 align-items-center">
                      <Col xs={50}>
                      {/* Column for the item name. */}
                        {item.name}
                      </Col>
                      <Col xs={10} className="d-flex justify-content-between">
                        {/* Displays the amount of the item in the cart */}
                        <span>Qty: {item.qty}</span>
                        {/* Displays the total price of the item using formula:
                          (The price of the item) * (The qty of the item) */}
                        <b>R{(item.price * item.qty).toFixed(2)}</b>
                      </Col>
                      {/* Column for action buttons */}
                      <Col>
                        {/* Buttons for incrementation, decrementation or
                            completely removing item */}
                        <ButtonGroup className="cart-item-actions ms-3">
                          {/* Button for incrementation */}
                          <Button variant="success" size="sm" onClick={() => handleAddItem(item)}><i class="bi bi-plus-square"></i></Button>
                          {/* Button for decrementation */}
                          <Button variant="warning" size="sm" onClick={() => handleRemoveItem(item.id)}><i class="bi bi-x-square"></i></Button>
                          {/* Button for completely removing the item */}
                          <Button variant="danger" size="sm" onClick={() => {dispatch(removeItem({ id: item.id, removeAll: true }));}}><i class="bi bi-trash3"></i></Button>
                        </ButtonGroup>
                        {/* Allow for separation from every item */}
                        <hr />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))
              ) : (
                // Renders content only if the cart is empty
                <ListGroup.Item className="text-center py-5">
                  <h4>Your cart is empty.</h4>
                  <p>Looks like you haven't added anything yet. Start shopping!</p>
                  {/* Button to navigate back to the products page */}
                  <Buttons onClick={() => nav("/products")} label={<i class="bi bi-arrow-return-left"></i>}/>
                </ListGroup.Item>
              )}
            </ListGroup>
          }
          cardButton1="Proceed to Shipment" // Label for primary action
          subTotal="Sub Total:" // label for sub-total
          costs={total.toFixed(2)} // Displays the total cost
          // Click handler for the action
          onClick1={() => nav("/shipment")} />
      </Container>
    </div>
  );
};

export default Cart;

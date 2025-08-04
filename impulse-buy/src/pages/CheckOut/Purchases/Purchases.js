// Import from React
import React from 'react';

// Import from Bootstrap
import Container from 'react-bootstrap/esm/Container.js';
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import from Redux
import { useSelector } from "react-redux";

// Import from Router
import { useNavigate } from 'react-router-dom';

// Import JS components
import Navigationbar from "../../../components/Navigation/Navigationbar.js";
import Cards from "../../../components/Cards/Grey/CardsGrey.js";
import Buttons from "../../../components/Buttons/Purple/ButtonsPurple.js"

// Import css Files
import "./Purchases.css";

/* Page that confirm the payment history of the most recent purchase */

const Purchases = () => {
  // useNavigate hook to navigate throughout the website
  const nav = useNavigate();

  // useSelector hook to extract the purchase history from the Redux store
  const { purchaseHistory } = useSelector(state => state.products);

  // Calculates the total number of items across all purchases
  const totalItemsAcrossPurchases = purchaseHistory.reduce((acc, purchase) => acc + purchase.qty,0);
  // Calculates the overall total cost across all purchases
  const totalCostAcrossPurchases = purchaseHistory.reduce((acc, purchase) => acc + purchase.total, 0);

  return (
    <div className='center-page'>
      {/* Renders the global navbar at the top of the page */}
      <Navigationbar />
      <Container className='container'>
        {/* Renders grey card component */}
        <Cards
          cardTitle="Your Purchases History" // Title of the card
          // Renders the list of items purchased
          cardSubtitle1={`Total Items Purchased: ${totalItemsAcrossPurchases}`}
          cardText2={
            <ListGroup variant="flush">
              {/* Conditionally renders the purchases if any  */}
              {purchaseHistory.length > 0? (
                // Iterates through each purchase
                purchaseHistory.map((purchase, index) => (
                  <ListGroup.Item key={index} className='mb-2'>
                    <Row className='align-items-center'>
                      <Col xs={8}>
                      {/* Displays purchase number and cost */}
                        <h5>Purchase {index + 1}</h5>
                      </Col>
                      <Col xs={4} className='text-end'>
                      {/* Displays the total cost per item */}
                      <b>Total: R{purchase.total.toFixed(2)}</b></Col>
                    </Row>
                    {/* Virtual separation between each item  */}
                    <hr />
                    <ListGroup variant="flush">
                      {/* Nested ListGroup to display individual items  */}
                      {purchase.items.map(item => (
                        <ListGroup.Item key={item.id} className='d-flex justify-content-between align-items-center py-1'>
                          {/* Displays qty and name */}
                          <span>{item.name} (Qty: {item.qty})</span>
                          {/* Displays the total price using formula:
                              (Price of the item) * (qty of the item) */}
                          <span>R {(item.price * item.qty).toFixed(2)}</span>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </ListGroup.Item>
                ))
              ) : (
                // Renders this content if there is nothing in purchaseHistory
                <ListGroup.Item className='text-center py-5'>
                  <h4>You haven't made any purchases yet.</h4>
                  <p>Once you complete an order, it will appear here!</p>
                  {/* Button that navigates to the products page */}
                  <Buttons onClick={() => nav("/products")} label={<><i className="bi bi-shop me-2"></i></>} />
                </ListGroup.Item>
              )}
            </ListGroup>
          }
          cardButton1="Continue Shopping" // Label for button
          onClick1={() => nav("/products")} // Navigation location for button
          subTotal="Overall Total:" // Label for the overall cost
          // Displays the sum of the costs
          costs={totalCostAcrossPurchases.toFixed(2)} />
      </Container>
    </div>
  );
};

export default Purchases;

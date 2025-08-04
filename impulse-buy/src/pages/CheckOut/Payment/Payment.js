// Import from React
import React from 'react';

// Import from Bootstrap
import Container from 'react-bootstrap/esm/Container.js';

// Import from Router
import { useNavigate } from 'react-router-dom';

// Import JS components
import Navigationbar from "../../../components/Navigation/Navigationbar.js";
import CardsPurple from "../../../components/Cards/Purple/CardsPurple.js";

// Import css files
import "./Payment.css";

/* Displays a page where the user can choose payment methods */

const Payment = () => {
  // useNavigate hook to allow for navigation throughout the website
  const nav = useNavigate();

  return (
    <div className='center-page'>
      {/* Render Global navbar at the top of the page */}
      <Navigationbar />
      <Container className='container'>
        {/* Render a Purple Card component to display the payment method options. */}
        <CardsPurple
          cardTitle="Payment Methods:" // Title of the card
          cardButton1="Credit/Debit Card" // Button label
          onClick1={() => nav("/Purchases")} // Navigated to purchases page
          cardButton2="PayPal" // Button label
          onClick2={() => nav("/Purchases")}// Navigated to purchases page
          cardButton3="EFT" // Button label
          onClick3={() => nav("/Purchases")}// Navigated to purchases page
          cardButton4="Cash on Delivery (COD)" // Button label
          // Navigated to purchases page
          onClick4={() => nav("/Purchases")} />
      </Container>
      <div style={{ height: "40px" }} />
      <Container>
        {/* Disclaimer text explaining the behaviour of the buttons on the fake
            site, ensuring understanding the this page will nat actually  sell
            anything nor will the user have to pay anything */}
        <p>
          <small>*<b>Disclaimer:</b> As this website is fake, pressing one of
            <br />
            these buttons will automatically take you to the purchases page.
            <br />
            <br />
            You will not be paying for any of these items, nor will they
            <br />actually be delivered to you.</small>
        </p>
      </Container>
    </div>
  );
};

export default Payment;
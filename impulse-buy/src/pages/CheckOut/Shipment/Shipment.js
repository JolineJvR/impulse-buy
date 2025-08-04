// Import from React
import React from 'react';
import { useState } from 'react';

// Import from Redux
import { useDispatch, useSelector } from "react-redux";

// Import from Bootstrap
import Container from "react-bootstrap/Container";

// Import Js components
import Navigationbar from "../../../components/Navigation/Navigationbar.js";
import Cards from "../../../components/Cards/Purple/CardsPurple.js";
import Modals from "../../../components/Modals/Modals.js";

// Import Router
import { useNavigate } from 'react-router-dom';

// Import functions from productsSlice.js
import { addPurchase } from "../../../Store/productsSlice.js";

// Import from css files
import "./Shipment.css";

/* Page that allows the user to select the shipment methods and proceed to
  payment page */

const Shipment = () => {
  // State hook to control the visibility of the shipment modal
  const [showShipmentInfoModal, setShowShipmentInfoModal] = useState(false);

  // Handle function to open the shipment modal
  const handleShowShipmentInfoModal = () => setShowShipmentInfoModal(true);
  // Handle function to close the shipment modal
  const handleCloseShipmentInfoModal = () => setShowShipmentInfoModal(false);

  // useNavigate hook to navigate throughout the website
  const nav = useNavigate();
  // useDispatch hook to send actions to redux
  const dispatch = useDispatch();

  // Extract data from the redux store
  const { cart, total, qty } = useSelector(state => state.products);

  // Handle function to place an order
  const handlePlaceOrder = () => {
    // Prevents placing an order if the cart is empty
    if (cart.length === 0) {
      alert("Your cart is empty! Please add items before proceeding to payment.");
      return;
    }

    // Dispatches the addPurchase action to save the current details
    dispatch(addPurchase({
      items: cart,
      total: total,
      qty: qty
    }));

    // Navigates the user back to the "/payment" route
    nav("/payment");
  }

  return (
    <div className='center-page'>
      {/* Renders global navbar at the top of the page */}
      <Navigationbar />
      <Container>
        {/* Renders the purple card component to hold the content */}
        <Cards
          cardTitle="Shipment Methods:" // Title of the Card
          cardInfo={<><i class="bi bi-info-circle"></i></>}
          showModal={handleShowShipmentInfoModal} // Pass the show modal handler
          cardButton1="Collection" // Label for button
          cardButton2="Delivery" // Label for button
          // both buttons handles the place order
          onClick1={handlePlaceOrder}
          onClick2={handlePlaceOrder} />
      </Container>
      <div style={{ height: "50px"}}/>
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

      {/* Render the Modals component */}
      <Modals
        show={showShipmentInfoModal} // Modal visibility
        onHide={handleCloseShipmentInfoModal} // close function
        modalTitle="Shipment Information" // Modal title
        // Adds details about the shipment methods into the modal body
        modalBody={
          <>
            <p>
              <strong>Collection:</strong> You can pick up your order directly
              from our designated location during business hours. We will
              notify you when your order is ready for collection.
            </p>
            <p>
              <strong>Delivery:</strong> Your order will be delivered to the
              address you provide. Delivery times and costs may vary depending
              on your location and the size of your order.
            </p>
            <p>Please ensure all details are correct to avoid delays.</p>
          </>
        }
      />
    </div>
  )
}

export default Shipment;
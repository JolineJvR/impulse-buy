// Import from React
import React from 'react';
import { useState } from 'react';

// Import JS components
import GButtons from "../../components/Buttons/Grey/ButtonsGrey";
import PButtons from "../../components/Buttons/Purple/ButtonsPurple";

// Import from Router
import { useNavigate } from "react-router-dom";

// Import from formik
import { useFormik } from "formik";

// Import from yup
import * as Yup from "yup";

// Import from Bootstrap
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";

// Import from css
import "./Login.css";

/* Login page */

const Login = () => {
  // useNavigate hook to allow for navigation around the different pages
  const nav = useNavigate();

  // State to control the visibility of an alert message
  const [showAlert, setShowAlert] = useState(false);
  // State to store the content of the alert message
  const [alertMessage,setAlertMessage] = useState("");
  // State to toggle the visibility of the password input field
  const [showPassword, setShowPassword] = useState(false);

  //  Initialize Formik for handling and validation and Submission
  const formik = useFormik({
    // Initial values for the form fields
    initialValues: {
      email: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      // Email field: must have a valid email format, Required
      email: Yup.string()
        .email("Invalid email address.")
        .required("*Required"),
      // Username Field: must have between 5 and 10 characters, Required
      userName: Yup.string()
        .min(5, "Too Short!")
        .max(30, "Too Long!")
        .required("*Required"),
      // Password: must have at least 8 characters, Required
      password: Yup.string()
        .min(8, "Password must be 8 characters long.")
        .required("*Required"),
    }),
    // Submission handler for the form
    onSubmit: (values) => {
      // Retrieves stored data from session storage
      const storedData = sessionStorage.getItem("signupForm");

      // If there is data
      if (storedData) {
        // Parse the stored string back
        const user = JSON.parse(storedData);

        // Compare the submitted form values with the stored user data for authentication
        if (values.email === user.email && values.userName === user.userName && values.password === user.password) {
          // If the credentials match, set "isLoggedIn" in SessionStorage
          sessionStorage.setItem("isLoggedIn", user.userName);
          nav("/featured"); // Redirects to the "/featured" page
        } else {
          // If credentials do not match, aet alert
          setAlertMessage("Invalid email or username or password. Please try again.");
          setShowAlert(true);
        }
      } else {
        // Id no user data is found, display alert
        setAlertMessage("No user registered. Please sign up first.");
        setShowAlert(true);
        nav("/");
      }
    },
  });

  return (
    <div className='login-container'>
      <div className='card-and-button-wrapper'>
        {/* Renders the grey card component to hold the content */}
        <Card className='card-grey bg-grey item-alignment-grey'>
          <Card.Body>
            {/* Title for the login section */}
            <Card.Title className='mb-3'>
              Welcome back to Impulse Buy Kingdom
            </Card.Title>
            {/* Subtitle with welcome message */}
            <Card.Subtitle className='mb-3'>
              We knew you couldn't stay away! Your next favourite (and
              completely unexpected) find is waiting. Dive back into the
              glorious chaos.
            </Card.Subtitle>
            {/* Inner card with purple theme */}
            <Card className='car-purple bg-purple item-alignment-purple'>
              <Card.Body>
                {/* Form component, uses the Formik handleSubmit */}
                <Form onSubmit={formik.handleSubmit}>
                  {/* Group for Email */}
                  <Form.Group>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      placeholder='Email'
                      className='mb-3 w-100'
                      autoComplete="email"
                      // connects bootstrap validation styling to the formik
                      // state
                      isInvalid={formik.touched.email && !!formik.errors.email}
                      // Links Formik's state and handlers to the input field
                      {...formik.getFieldProps("email")}/>
                    {/* Displays email validation error messages */}
                    {formik.touched.email && formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </Form.Group>
                  {/* Group for userName */}
                  <Form.Group>
                    <Form.Control
                      id="userName"
                      name="userName"
                      type="userName"
                      placeholder='Username'
                      className='mb-3 w-100'
                      autoComplete="username"
                      // connects bootstrap validation styling to the formik
                      // state
                      isInvalid={formik.touched.userName && !!formik.errors.userName}
                      // Links Formik's state and handlers to the input field
                      {...formik.getFieldProps("userName")}/>
                    {/* Displays email validation error messages */}
                    {formik.touched.userName && formik.errors.userName ? (
                      <div>{formik.errors.userName}</div>
                    ) : null}
                  </Form.Group>
                  {/* Group for password */}
                  <Form.Group>
                    <InputGroup className='mb-3 w-100'>
                      <Form.Control
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder='Password'
                        autoComplete="current-password"
                        // connects bootstrap validation styling to the formik
                        // state
                        isInvalid={formik.touched.password && !!formik.errors.password}
                        // Links Formik's state and handlers to the input field
                        {...formik.getFieldProps("password")}/>
                      {/* Adds a clickable eye icon */}
                      <InputGroup.Text
                      // Toggles the showPassword state
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer"}}>
                        {/* Renders the icons */}
                        {showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                      </InputGroup.Text>
                      {/* Displays email validation error messages */}
                      {formik.touched.password && formik.errors.password ? (
                        <>
                          <div>{formik.errors.password}</div>
                        </>
                      ) : null}
                    </InputGroup>
                  </Form.Group>
                  {/* Conditionally renders alert messages */}
                  {showAlert && (
                    <Alert
                      variant='danger'
                      onClose={() => setShowAlert(false)}
                      dismissible>
                      {alertMessage}
                    </Alert>
                  )}
                  {/* Grey custom buttons */}
                  <GButtons label="Login" type="submit" />
                </Form>
              </Card.Body>
            </Card>
            <div className='mt-5'/>
            {/* Purple custom buttons */}
            <PButtons label="Don't have an account? Sign Up!" onClick={() => nav("/")} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;

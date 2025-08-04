// Import from React
import React from 'react';
import { useState } from 'react';

// Import JS Components
import PButtons from "../../components/Buttons/Purple/ButtonsPurple";
import GButtons from "../../components/Buttons/Grey/ButtonsGrey";

// Import from Router
import { useNavigate } from "react-router-dom";

// Import from Formik
import { useFormik } from "formik";

// Import from Yup
import * as Yup from "yup";

// Import from Bootstrap
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"
import InputGroup from "react-bootstrap/InputGroup";

// Import from Css
import "./SignUp.css";

/* Sign up page */

const SignUp = () => {
  // useNavigate hook to allow for navigation around the different pages
  const nav = useNavigate();

  // State to control cisibility of passwords
  const [showPassword, setShowPassword] = useState(false);

  //  Initialize Formik for handling and validation and Submission
  const formik = useFormik({
    // Initial values for the form fields
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      // firstName field: 15 character max, Required
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less.")
        .required("*Required"),
      // lastName field: 20 character max, Required
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less.")
        .required("*Required"),
      // userName field: 5 min, 30 max, Required
      userName: Yup.string()
        .min(5, "Too short!")
        .max(30, "Too long!")
        .required("*Required"),
      // Email field: must have a valid email format, Required
      email: Yup.string()
        .email("Invalid email address")
        .required("*Required"),
      // Password field:8 character min, 1 of( uppercase and lowercase letters, number, and special character), Required
      password: Yup.string()
        .min(8, "Password must more than 8 characters.")
        .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter.")
        .matches(/[a-z]/, "Password must contain at least 1 lowercase letter.")
        .matches(/[0-9]/, "Password must contain at least 1 number")
        .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least 1 special character.")
        .required("*Required"),
      // confirmPassword field: must match the password field, Required
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match!")
        .required("Confirm password is required!"),
    }),
    // Submission handler for the form
    onSubmit: value => {
      // Do not add the confirm password
      const { confirmPassword, ...dataToStore } = value;
      // Store the rest in session Storage
      sessionStorage.setItem("signupForm", JSON.stringify(dataToStore));
      // Navigate to login page
      nav("/login");
    },
  });
  return (
    <div className='signup-container'>
      <div className='card-and-button-wrapper'>
        {/* Renders the purple card component to hold the content */}
        <Card className='card-purple bg-purple item-alignment-purple'>
          <Card.Body>
            {/* Title for the login section */}
            <Card.Title className='mb-3'>Welcome to Impulse Buy Kingdom!</Card.Title>
            {/* Subtitle with welcome message */}
            <Card.Subtitle className='mb-3'>
              Your here because you love unexpected delights and those perfectly
              random items you "suddenly need". No judgement, just pure shopping
              joy ahead. Dive in!
            </Card.Subtitle>
            {/* Inner card with grey theme */}
            <Card className='card-grey bg-grey item-alignment-grey'>
              <Card.Body>
                <Form onSubmit={formik.handleSubmit}>
                  {/* Group for firstName */}
                  <Form.Group>
                    <Form.Control
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      type="text"
                      className="mb-3 w-100"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      autoComplete="given-name"
                      // connects bootstrap validation styling to the formik
                      // state
                      isInvalid={formik.touched.firstName && !!formik.errors.firstName} />
                    {/* Displays email validation error messages */}
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className='text-danger'>{formik.errors.firstName}</div>
                    ) : null}
                  </Form.Group>
                  {/* Group for lastName */}
                  <Form.Group>
                    <Form.Control
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                      className='mb-3 w-100'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      autoComplete="family-name"
                      // connects bootstrap validation styling to the formik
                      // state
                      isInvalid={formik.touched.lastName && !!formik.errors.lastName} />
                    {/* Displays email validation error messages */}
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className='text-danger'>{formik.errors.lastName}</div>
                    ): null}
                  </Form.Group>
                  {/* Group for userName */}
                  <Form.Group>
                    <Form.Control
                      id="userName"
                      name="userName"
                      placeholder="Username"
                      type="text"
                      className='mb-3 w-100'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.userName}
                      autoComplete="username"
                      // connects bootstrap validation styling to the formik
                      // state
                      isInvalid={formik.touched.userName && !!formik.errors.userName} />
                    {/* Displays email validation error messages */}
                    {formik.touched.userName && formik.errors.userName ? (
                      <div className='text-danger'>{formik.errors.userName}</div>
                    ): null}
                  </Form.Group>
                  {/* Group for Email */}
                  <Form.Group>
                    <Form.Control
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="email"
                      className='mb-3 w-100'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      autoComplete="email"
                      // connects bootstrap validation styling to the formik
                      // state
                      isInvalid={formik.touched.email && !!formik.errors.email} />
                    {/* Displays email validation error messages */}
                    {formik.touched.email && formik.errors.email ? (
                      <div className='text-danger'>{formik.errors.email}</div>
                    ): null}
                  </Form.Group>
                  {/* Group for password */}
                  <Form.Group>
                    <InputGroup className='mb-3 w-100'>
                      <Form.Control
                        id="password"
                        name="password"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        autoComplete="new-password"
                        // connects bootstrap validation styling to the formik
                        // state
                        isInvalid={formik.touched.password && !!formik.errors.password} />
                      {/* Adds a clickable eye icon */}
                      <InputGroup.Text
                      // Toggles the showPassword state
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor : "pointer"}}>
                          {/* Renders the icons */}
                          {showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                      </InputGroup.Text>
                      {/* Displays email validation error messages */}
                        {formik.touched.password && formik.errors.password ? (
                          <div className='text-danger'>{formik.errors.password}</div>
                        ): null}
                      </InputGroup>
                    </Form.Group>
                    {/* Group for confirmPassword */}
                  <Form.Group>
                    <InputGroup className='mb-3 w-100'>
                      <Form.Control
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type={showPassword ? "text" : "password"}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        autoComplete="new-password"
                        // connects bootstrap validation styling to the formik
                        // state
                        isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword} />
                      {/* Adds a clickable eye icon */}
                      <InputGroup.Text
                        // Toggles the showPassword state
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: "pointer" }}>
                        {/* Renders the icons */}
                        {showPassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                        </InputGroup.Text>
                      {/* Displays email validation error messages */}
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className='text-danger'>{formik.errors.confirmPassword}</div>
                      ): null}
                    </InputGroup>
                  </Form.Group>
                  <PButtons type="submit" label="Sign Up!" />
                </Form>
              </Card.Body>
            </Card>
            <div className='mt-5'/>
            {/* Grey custom buttons */}
            <GButtons
              onClick={() => nav("/login")}
              label="Already have an account? Login"/>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;

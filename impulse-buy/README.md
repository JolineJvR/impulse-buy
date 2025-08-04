# online-store

An incredibly honest online retail store

Product Data & State Management
At its core, the application manages a list of products, each with details like
an ID, name, description, price, category, and an associated image. This product
data is centrally managed using Redux Toolkit, which defines a productsSlice.
This slice holds the application's global state related to:

The shopping cart (cart), including the total quantity of items (qty) and the
overall cost (total).

Search results (searchResults), which initially contains all products but gets
filtered based on user searches.

Featured items (featuredItems), a randomly selected subset of products.

Purchase history (purchaseHistory), which stores details of completed orders.

Key Features & User Interactions
The application provides several key functionalities that respond to user
interactions:

User Authentication (Register & Login):

Registration (SignUp.jsx): Users can create an account by providing their first
name, surname, username, email, and a password. This process includes robust
validation using Formik and Yup to ensure data quality (e.g., strong password
requirements, valid email format, matching passwords).

Login (Login.jsx): Registered users can log in using their username/email and
password. Upon successful login, the username is stored in sessionStorage
(though displaying it in the header isn't explicitly shown in the provided
Navigationbar code).

Navigation (Navigationbar.jsx): A fixed navigation bar at the top of every page
allows users to move between different sections like "Featured" products, the
main "Products" page, "About Us", "Cart", and also provides a "Logout" option.

Product Browse (Products.jsx & Featured.jsx):

The Products page displays all available items and includes a search bar that
dynamically filters products by name, description, or category as the user
types.

The Featured page showcases a selection of 4 random products, demonstrating the
array.map() method for rendering lists of components.

Shopping Cart Functionality (Cart.jsx):

Users can add products to their cart from the product and featured pages.

On the Cart page, users can view their selected items, adjust quantities
(increase/decrease), or remove items entirely. The cart automatically calculates
and displays the total cost.

Checkout Process (Shipment.jsx & Payment.jsx):

From the cart, users can proceed to select a shipment method (Collection or
Delivery).

A dedicated help feature (via an info icon and modal) provides details about the
shipping options.

After selecting shipment, users proceed to a payment page.

Upon successful "purchase," the cart is cleared, and the order details are added
to the purchaseHistory state.

Code Structure & Best Practices
The project follows good React development practices:

Component-Based: The application is broken down into modular, reusable
components (e.g., Cards, Buttons, Modals).

Redux for Global State: Redux Toolkit effectively manages shared data, ensuring
a predictable state flow.

Styling: A combination of React-Bootstrap and custom CSS files ensures an
attractive and consistent UI.

Readability: The code uses meaningful variable and component names, consistent
indentation, and clear structure, making it easy to understand and maintain.

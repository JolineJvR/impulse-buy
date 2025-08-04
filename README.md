# impulse-buy

This project is an e-commerce application built with React. It features a modern, intuitive user interface for browsing products, managing a shopping cart, and checking out. The application demonstrates a range of front-end development skills, including state management with Redux, form validation, and responsive component design.

Features
User Registration: A form to create a new user account with robust validation for first name, surname, username, email, and password strength.

User Authentication: A simple login system where a user's username is stored in the application's state and displayed in the header.

Product Display: A dedicated store page that fetches and displays a list of products. Components are rendered dynamically using the Array.prototype.map() method.

Shopping Cart: Users can add products to a cart, which is managed in the Redux store. The cart page displays the selected items, their quantities, and the total cost.

Shipping Options: The cart page includes a section for selecting a shipping method.

Help & Information: A dedicated "Help" feature provides detailed information about the available shipping options.

Global State Management: The entire application's state (user, cart, products) is managed centrally using Redux for predictable data flow.

Responsive UI: The application is styled with a combination of custom CSS and React-Bootstrap to ensure an attractive and consistent experience across different screen sizes.

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
You need to have Node.js and npm installed on your machine.

Installation
Clone the repository:

git clone [repository-url]
cd [project-folder]

Install dependencies:
This command will install all the required packages listed in the package.json file.

npm install

Start the application:
This command runs the app in development mode. Open http://localhost:3000 to view it in your browser.

npm start

The page will automatically reload if you make changes. You can also see any linting errors in the console.

Project Structure
The project is structured to be clean and maintainable, following best practices for a React application.

/src
├── components/          # Reusable UI components
│   ├── Header.js
│   ├── Footer.js
│   ├── ProductCard.js
│   └── ...
├── pages/               # Top-level components representing each page
│   ├── LandingPage.js
│   ├── StorePage.js
│   └── CartPage.js
├── redux/               # Redux-related files
│   ├── store.js
│   ├── actions/
│   │   └── cartActions.js
│   └── reducers/
│       └── cartReducer.js
├── styles/              # Custom stylesheets
│   └── main.css
├── App.js               # Main application component
└── index.js             # Entry point of the application

Technologies Used
React: The core JavaScript library for building the user interface.

React-Bootstrap: A front-end framework for responsive and attractive UI components.

Redux: A predictable state container for managing the application's global state.

React-Redux: The official React bindings for Redux.

HTML & CSS: Standard web technologies for structure and styling.

Git: Version control for tracking project changes.

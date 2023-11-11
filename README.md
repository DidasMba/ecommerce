

# E-Shoping D.
----------------------------
Autor : Didas Mbarushimana
Github : DidasMba
Linkedin: Didas Mbarushimana
-----------------------------

E-Shoping D. is a single-page e-commerce application built with React. It allows users to browse a list of clothing items, add them to the cart, and view the total price.

## Features

- **Product List:** View a list of clothing items with prices.
- **Add to Cart:** Click the "+" button to add items to the cart.
- **Quantity Management:** Adjust the quantity of items in the cart using the "+" and "-" buttons.
- **View Product Details:** Click the "eye" button to zoom in and view details of a product.
- **Total Price:** See the total price of items in the cart.
- **Responsive Design:** The application is designed to work on various screen sizes.

## Technologies Used

- React
- React Router
- RESTful API (FakeStoreAPI)
- CSS for styling
- Material-UI Icons for visual elements

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>` 

2.  Install dependencies:
    
    bashCopy code
    
    `cd your-app-directory
    npm install` 
    
3.  Run the application:
    
    bashCopy code
    
    `npm start` 
    
    Open [http://localhost:3000](http://localhost:3000/) in your browser to view the app.
    

## Deployment

The app can be deployed using Netlify or other hosting services. Set up continuous deployment to automatically update the deployed site when changes are pushed to the main branch.

## Environment Variables

-   Create a `.env.development` file for development variables and a `.env.production` file for production variables.
    
-   Example `.env.development`:
    
    envCopy code
    
    `REACT_APP_API_URL=https://fakestoreapi.com/products` 
    
    Example `.env.production`:
    
    envCopy code
    
    `REACT_APP_API_URL=https://fakestoreapi.com/products` 
    

## License

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/c/LICENSE) file for details.

## Acknowledgments

-   Thanks to [FakeStoreAPI](https://fakestoreapi.com/) for providing the mock product data.
-   This project was created as part of a React learning project.

Feel free to customize this README according to your specific application and project structure.

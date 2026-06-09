# SunnyStyles - Kids' Affiliate Store

A modern affiliate-style e-commerce website for selling children's products like water bottles, clothes, and accessories.

## Features

- 🛍️ Product catalog with search and filters
- 🛒 Shopping cart management
- 💳 Stripe payment processing
- 📦 Order tracking and history
- 👤 User accounts and profiles
- 📊 Affiliate commission tracking
- 🎨 Responsive design

## Project Structure

```
SunnyStyles/
├── index.html              # Home page
├── products.html           # Product catalog
├── cart.html              # Shopping cart
├── checkout.html          # Checkout page
├── orders.html            # Order tracking
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   ├── main.js            # Main app logic
│   ├── cart.js            # Cart management
│   ├── products.js        # Product handling
│   ├── orders.js          # Order management
│   └── stripe.js          # Payment processing
├── server.js              # Express server (Node.js backend)
├── package.json           # Node dependencies
└── data/
    └── products.json      # Sample product data
```

## Setup Instructions

### Frontend Only (Local Testing)
1. Open `index.html` in your browser
2. No installation required

### Full Setup with Backend & Payments
1. Install Node.js
2. Run `npm install`
3. Add your Stripe API keys to environment variables
4. Run `npm start`
5. Visit `http://localhost:3000`

## Technologies

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **Payments**: Stripe API
- **Database**: JSON (can be upgraded to MongoDB/PostgreSQL)

## Getting Started

See individual files for detailed setup instructions.

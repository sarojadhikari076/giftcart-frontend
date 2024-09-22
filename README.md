# GiftCart Frontend

## Overview

GiftCart Frontend is a React-based application that provides users with an engaging shopping experience on the GiftCart e-commerce platform. It allows customers to register, browse products, manage their shopping cart, and receive personalized birthday discounts.

## Technologies Used

- **Next.js**: A React framework that enables server-side rendering and static site generation for optimal performance and SEO.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that enhances code quality with static types.
- **Material-UI (MUI)**: A popular React UI framework that provides a set of pre-designed components for faster development.
- **Redux**: A state management library for managing application state in a predictable way.
- **Formik**: A library for building forms in React, simplifying form state management and validation.
- **Yup**: A schema builder for value parsing and validation, commonly used with Formik.
- **Axios**: A promise-based HTTP client for making API requests.
- **Stripe**: A payment processing platform for handling secure transactions.
- **date-fns**: A modern JavaScript date utility library for date manipulation.
- **React Toastify**: A library for displaying notifications and alerts in a user-friendly manner.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14.x or higher)
- npm (Node Package Manager)

### Cloning the Repository

Clone the repository from GitHub:

```bash
git clone https://github.com/sarojadhikari076/giftcart-frontend
cd giftcart-frontend
```

### Installation

Install the dependencies:

```bash
npm install
```

### Configuration

Create a `.env.local` file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=yoursecretstripekey
```

### Running the Application

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Features

- **User Authentication**: Users can register and log in to their accounts.
- **User Profile**: Users can view and update their profile information.
- **Product Browsing**: Users can view products, filter by category, and search for products.
- **Shopping Cart**: Users can add products to their cart, update quantities, and remove items.
- **Checkout**: Users can enter shipping details and complete the purchase using Stripe.
- **Birthday Discounts**: Users receive a personalized discount on their birthday.

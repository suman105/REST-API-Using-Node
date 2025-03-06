# REST API for Customer, Purchase, and Shipping Management 🚚💼

This REST API allows you to manage customers, their purchases, and shipping details. It provides endpoints to perform CRUD operations on customers, purchase records, and shipping information.

## Features 🌟

- **Customer Management**: Create, view, and fetch customer details.
- **Purchase Management**: Add purchases, view purchase records for customers.
- **Shipping Management**: Add shipping details and view shipping records associated with customers and their purchases.
- **Custom Queries**: Fetch data based on specific criteria like city and email.

## Tech Stack 🛠️

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing customer, purchase, and shipping data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Postman**: (Optional) Tool for testing API endpoints.

## Installation ⚙️

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/REST-API-Using-Node.git
```

### 2. Navigate to the project folder and install the required dependencies:
```bash
cd REST-API-Using-Node
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root of your project and add the following:

```bash
PORT=5000
MONGO_URI=<Your MongoDB URI>
```
- PORT: The port your server will listen on (default 5000).
- MONGO_URI: Your MongoDB connection string.
### 4. Run the server
To start the server, run:

```bash
npm start
```
The server should now be running on http://localhost:5000.

### API Endpoints 📡
#### 1. Get All Customers 🧑‍🤝‍🧑
**Endpoint:** GET /customer

Retrieves all customers.

**Response:**
- 200 OK with an array of customers.
- 404 Not Found if no customers are found.
  
####2. Get Shipping Details by City 🏙️
**Endpoint:** GET /shipping/city

Fetch shipping details based on the provided city.

**Query Parameter:**

**City:** The city name to filter customers by.
**Response:**
- 200 OK with shipping details.
- 400 Bad Request if the City parameter is missing.
- 404 Not Found if no shipping details are found.
  
#### 3. Get Customer Purchases and Shipments 📦🚚
**Endpoint:** GET /customer/purchase/shipment
Fetches purchase and shipment details for all customers.

**Response:**
- 200 OK with customer purchase and shipment details.
- 404 Not Found if no customers or records are found.
  
#### 4. Get Customer Purchases 🛍️
**Endpoint:** GET /customer/purchases
Fetches all purchase records for all customers.

**Response:**
- 200 OK with customer purchase details.
- 404 Not Found if no customers or records are found.
  
#### 5. Add a New Customer 🧑‍💼
**Endpoint:** POST /customer
Creates a new customer.
**Request Body:**

```bash
{
  "Customer_Name": "John Doe",
  "Email": "john.doe@example.com",
  "Mobile_Number": "1234567890",
  "City": "New York"
}
```

**Response:**
- 201 Created with the created customer details.
- 400 Bad Request if any required field is missing.
  
#### 6. Add a New Purchase 🛒
**Endpoint:** POST /purchase
Creates a new purchase record for a customer.

**Request Body:**
```bash
{
  "Email": "john.doe@example.com",
  "Product_Name": "Product A",
  "Quantity": 2,
  "Pricing": 100,
  "MRP": 120
}
```

**Response:**
- 201 Created with the created purchase details.
- 400 Bad Request if the customer is not found or the pricing is greater than the MRP.
  
####7. Add a New Shipping Record 🚚
**Endpoint:** POST /shipping
Creates a new shipping record for a customer.

**Request Body:**
{
  "Email": "john.doe@example.com",
  "Address": "1234 Elm Street",
  "City": "New York",
  "Pincode": "10001"
}

**Response:**
- 201 Created with the created shipping details.
- 400 Bad Request if the request body is incomplete.

#### 8. Get All Customers with City Information 🌍
**Endpoint:** GET /details
Fetches all customers along with their city information.

**Response:**
- 200 OK with customer details.
- 404 Not Found if no customers are found.
- 
### Testing the API 🧪
You can use Postman or Insomnia to test the API by making requests to the endpoints listed above. Simply enter the appropriate URL and HTTP method (GET, POST).

## ⭐ **Show Some Support**
If this repository helps you, consider starring ⭐ it on GitHub. Your support encourages further improvements and new additions!

📩 Feel free to open an issue if you have questions or suggestions.

🚀 Happy Coding & DSA Mastery! 🚀

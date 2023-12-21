import React from 'react';

const OrderDetails = ({ order }) => {
  // Assuming 'order' is an object containing details of the order

  return (
    <div>
      <h2>Order Details</h2>
      <p>Order ID: {order.id}</p>
      <p>Date: {order.date}</p>
      
      {/* Display products in the order */}
      <h3>Products:</h3>
      <ul>
        {order.products.map(product => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity} - Price: ${product.price}
          </li>
        ))}
      </ul>
      
      <p>Total Price: ${order.totalPrice}</p>

      {/* Display customer information */}
      <h3>Customer Information:</h3>
      <p>Name: {order.customerName}</p>
      <p>Email: {order.customerEmail}</p>
      <p>Shipping Address: {order.shippingAddress}</p>

      {/* Additional order details */}
      {/* ...

      {/* You can add more details such as payment method, order status, etc. */}

    </div>
  );
};

export default OrderDetails;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const EditOrder = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch the order data based on the orderId from the URL params
    axios
      .get(`http://localhost:8080/order/${orderId}`)
      .then((response) => {
        console.log("Fetched order from backend:", response.data);
        setOrder(response.data);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
        setError(true);
      });
  }, [orderId]);

  const updateQuantity = async (itemId, newQuantity) => {
    try {
      await axios.put(
        `http://localhost:8080/order/${orderId}/item/${itemId}`,
        null,
        {
          params: { quantity: newQuantity }, // Include the quantity parameter in the request
        }
      );
      // Refetch the order data after updating quantity
      const response = await axios.get(`http://localhost:8080/order/${orderId}`);
      setOrder(response.data);
      navigate(`/EditOrder/${orderId}/edit`)
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  const removeItem = async (itemId) => {
    try {
      // Remove the item from the local state without sending a request
      const updatedOrder = {
        ...order,
        cartItems: order.cartItems.filter((item) => item.itemId !== itemId),
      };
      setOrder(updatedOrder);
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  const deleteOrder = async () => {
    try {
      await axios.delete(`http://localhost:8080/order/${orderId}`);
      navigate("/OrderHistory");
    } catch (error) {
      console.error("Failed to delete order:", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Make the API call to update order details
    try {
      const response = await axios.put(
        `http://localhost:8080/order/${orderId}`,
        order
      );
      console.log("Response from server:", response.data);
      navigate('/OrderHistory')
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  if (!order) {
    return null; // Render nothing until order data is fetched
  }

  // Calculate the total price for each product
  const cartItemsWithTotal = order.cartItems.map((item) => ({
    ...item,
    total: item.price * item.quantity,
  }));

  // Calculate the grand total
  const grandTotal = cartItemsWithTotal.reduce(
    (total, item) => total + item.total,
    0
  )

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Order #{orderId}</h2>
          {error && (
            <div className="alert alert-danger" role="alert">
              Error fetching order. Please try again later.
            </div>
          )}
          <form onSubmit={onSubmit}>
            
            {cartItemsWithTotal.map((item) => (
              <div key={item.itemId}>
                <p>{item.itemName}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.total}</p>
                <button
                  onClick={() => updateQuantity(item.itemId, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => updateQuantity(item.itemId, item.quantity - 1)}
                >
                  -
                </button>
                <button onClick={() => removeItem(item.itemId)}>Remove</button>
              </div>
            ))}
            {/* Display grand total */}
            <p>Grand Total: ${grandTotal}</p>
            {/* Proceed to Checkout button */}
            <Link to="/PaymentAdd" className="btn btn-success btn-block">
              Proceed to Checkout
            </Link>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            {/* Delete order button */}
            <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={deleteOrder}
            >
              Delete Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;

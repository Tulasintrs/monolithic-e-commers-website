import "./Cart.css";

const cartItems = [
  { id: 1, name: "Stylish Sneakers", price: 49.99, quantity: 1, emoji: "👟" },
  { id: 2, name: "Wireless Headphones", price: 79.99, quantity: 2, emoji: "🎧" },
  { id: 3, name: "Smartwatch", price: 99.99, quantity: 1, emoji: "⌚" },
];

function Cart() {
  // Calculate total dynamically
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2); // two decimals

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <p>You have {cartItems.length} items in your cart</p>

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-emoji">{item.emoji}</div>
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button className="remove-btn">Remove</button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <h3>Total: ${totalPrice}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;

import "./Orders.css";

const orders = [
  {
    id: "ORD001",
    date: "2026-02-02",
    items: [
      { name: "Stylish Sneakers", quantity: 1, emoji: "👟", price: 49.99 },
      { name: "Wireless Headphones", quantity: 1, emoji: "🎧", price: 79.99 },
    ],
    status: "Delivered",
  },
  {
    id: "ORD002",
    date: "2026-01-28",
    items: [
      { name: "Smartwatch", quantity: 2, emoji: "⌚", price: 99.99 },
      { name: "Backpack", quantity: 1, emoji: "🎒", price: 39.99 },
    ],
    status: "Shipped",
  },
  {
    id: "ORD003",
    date: "2026-01-25",
    items: [
      { name: "Gaming Console", quantity: 1, emoji: "🎮", price: 299.99 },
    ],
    status: "Processing",
  },
];

function Orders() {
  return (
    <div className="orders-page">
      <h2>Your Orders</h2>
      <p>You have {orders.length} orders</p>

      <div className="orders-list">
        {orders.map((order) => {
          const total = order.items
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2);

          return (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <h3>Order ID: {order.id}</h3>
                <p>Date: {order.date}</p>
                <p>Status: <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></p>
              </div>
              <div className="order-items">
                {order.items.map((item, index) => (
                  <div key={index} className="order-item">
                    <div className="item-emoji">{item.emoji}</div>
                    <p>{item.name} x {item.quantity} - ${item.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="order-total">
                <h4>Total: ${total}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;

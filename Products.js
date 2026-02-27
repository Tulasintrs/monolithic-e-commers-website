import "./Products.css";

const products = [
  { id: 1, name: "Stylish Sneakers", price: "$49.99", emoji: "👟" },
  { id: 2, name: "Wireless Headphones", price: "$79.99", emoji: "🎧" },
  { id: 3, name: "Smartwatch", price: "$99.99", emoji: "⌚" },
  { id: 4, name: "Backpack", price: "$39.99", emoji: "🎒" },
  { id: 5, name: "Sunglasses", price: "$29.99", emoji: "🕶️" },
  { id: 6, name: "Gaming Console", price: "$299.99", emoji: "🎮" },
  { id: 7, name: "Laptop", price: "$899.99", emoji: "💻" },
  { id: 8, name: "Smartphone", price: "$699.99", emoji: "📱" },
  { id: 9, name: "Camera", price: "$499.99", emoji: "📷" },
  { id: 10, name: "Watch", price: "$199.99", emoji: "⌛" },
];

function Products() {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <p>Explore our top products!</p>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-emoji">{product.emoji}</div>
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

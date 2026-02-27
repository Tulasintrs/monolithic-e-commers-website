import "./Home.css";
// import Footer from "../Footer/Footer";
import bannerImg from "../Assets/banner.png"; 
// import Navbar from "../Navbar/Navbar";

function Home() {
  const categories = [
    { icon: "🛍️", title: "Clothing", desc: "Latest fashion and trends" },
    { icon: "📱", title: "Electronics", desc: "Smart devices and gadgets" },
    { icon: "🏠", title: "Home & Living", desc: "Furniture and decor" },
    { icon: "🎮", title: "Gaming", desc: "Consoles, games, and accessories" },
    { icon: "📚", title: "Books", desc: "Explore thousands of books" },
    { icon: "💄", title: "Beauty", desc: "Cosmetics and skincare" },
  ];

  return (
    <>
      {/* <Navbar /> */}

      {/* Hero Banner */}
      <header className="home-banner">
        <div className="banner-text">
          <h1>Shop the Best Products Online</h1>
          <p>Quality products, great prices, fast delivery.</p>
        </div>
        <img src={bannerImg} alt="E-Commerce Banner" className="banner-image" />
      </header>

      {/* Categories / Features */}
      <section className="home-categories">
        <h2>Explore Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Home;

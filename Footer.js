import "./Footer.css";
import Facebook from "../Assets/Facebook.avif";
import Instagram from "../Assets/Instagram.avif";
import Twitter from "../Assets/Twitter.jpg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-cls">© 2026 Monolithic E-Commerce </p>

      <div className="social-icons">
        <img src={Facebook} alt="facebook" />
        <img src={Instagram} alt="instagram" />
        <img src={Twitter} alt="twitter" /> 
      </div>
    </footer>
  );
}

export default Footer;

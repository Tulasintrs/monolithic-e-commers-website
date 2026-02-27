// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
import "./Signup.css";

function Signup() {
  return (
    <>
    {/* <Navbar /> */}
    <div className="signup-container">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <p>If you are new to us! Please Sign Up to connect us</p>
        <form className="signup-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="btn-groups">
            <button type="submit">Login</button>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
}

export default Signup;

import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className="home">
      <NavBar />
      <h1 className="home-page-header">Welcome to Acebook!</h1>
      <Link className="home-page-submit-button" to="/signup">Sign Up</Link>
      <Link className="home-page-submit-button" to="/login">Log In</Link>
    </div>
  );
}

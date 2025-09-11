import "../components/Navbar.css";
import logo from "../../public/logo.png";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <img className="logo" src={logo} />
        </div>
        <div className="section">
          <p>Home</p>
          <p>About</p>
          <p>Lab</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

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
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

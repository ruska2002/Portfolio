import "./Contact.css";
import insta from "../../public/insta.png";
import github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";
const Contact = () => {
  return (
    <div className="Contact">
      <h3>Contact</h3>
      <div className="soc-media">
        <a
          href="https://www.linkedin.com/in/ruska-metskhovrishvili-183584360"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} />
        </a>
        <a
          href="https://github.com/ruska2002?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={github} />
        </a>
        <a
          href="https://www.instagram.com/russa_russka/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={insta} />
        </a>
      </div>
      <h4>ruskametskhovrishvili2@gmail.com</h4>
    </div>
  );
};
export default Contact;

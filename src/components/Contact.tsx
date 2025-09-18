import "./Contact.css";
import insta from "../../public/insta.png";
import fb from "../../public/fb.png";
import linkedin from "../../public/linkedin.png";
const Contact = () => {
  return (
    <div className="Contact">
      <h3>Contact</h3>
      <div className="soc-media">
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={fb} />
        </a>
        <a
          href="https://www.instagram.com/?next=%2F"
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

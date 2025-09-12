import "./Contact.css";
import insta from "../../public/insta.png";
import fb from "../../public/fb.png";
import linkedin from "../../public/linkedin.png";
const Contact = () => {
  return (
    <div className="Contact">
      <h3>Contact</h3>
      <div className="soc-media">
        <img src={linkedin} />
        <img src={fb} />
        <img src={insta} />
      </div>
      <h4>ruskametskhovrishvili2@gmail.com</h4>
    </div>
  );
};
export default Contact;

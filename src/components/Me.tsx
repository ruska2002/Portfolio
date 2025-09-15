import me from "../../public/me.jpeg";
import arrow from "../../public/Arrow.png";
import "./Me.css";

const Me = () => {
  return (
    <div className="me">
      <div className="images">
        <div className="gradient"></div>
        <div className="light"></div>

        <div className="image-wrapper">
          <img className="myImage" src={me} />
        </div>

        <img className="arrow" src={arrow} alt="arrow" />

        <p className="text">Hello! I Am RUSKA</p>
        <p className="text2">A Web Developer who </p>
        <h4 className="text3">
          Believes in clean code and
          <span className="highlight"> innovation.</span>
        </h4>
        <p className="text4">
          Because if the foundation isn’t solid, nothing else can stand strong.
        </p>
      </div>

      <div className="miniText">
        <p>
          Currently, I'm building scalable web applications at WebCanvas A
          self-taught and passionate developer, working on different projects
          for over 1.5 years now.
        </p>
        <p className="miniText2">
          I create performant and user-friendly solutions that balance
          technology, creativity, and real-world needs
        </p>
      </div>
    </div>
  );
};

export default Me;

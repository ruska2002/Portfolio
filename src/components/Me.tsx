import memoji from "../../public/memoji.png";
import arrow from "../../public/Arrow.png";
import "./Me.css";

const Me = () => {
  return (
    <div className="me">
      {" "}
      <div className="images">
        <div className="gradient"></div>
        <div className="light"></div>

        <div>
          <div className="small-image1">
            <img className="memoji" src={memoji} />
          </div>
          <div className="small-image2">
            <img className="arrow" src={arrow} />
          </div>
        </div>
        <p className="text">Hello! I Am RUSKA</p>
        <br />
        <p className="text2">A Designer who</p>
        <br />
        <h4 className="text3">
          Judges a book <br />
          by its cover...
        </h4>
        <br />
        <p className="text4">
          Because if the cover does not impress you what else can?
        </p>
      </div>
      <div className="miniText">
        <h1>I'm a Software Engineer.| </h1>
        <p>Currently, I'm a Software Engineer at Facebook,</p>
        <br />
        <p className="miniText2">
          A self-taught UI/UX designer, functioning in the industry for 3+ years
          now.
          <br /> I make meaningful and delightful digital products that create
          an equilibrium
          <br /> between user needs and business goals.
        </p>
      </div>
    </div>
  );
};

export default Me;

import "./WorkExperience.css";
import icon1 from "../../public/Group 2.png";
import icon3 from "../../public/Group 1938.png";

const WorkExperience = () => {
  return (
    <div className="workexperience">
      <div className="Gradient">
        <p className="WREX-title">Work Experience</p>
        <div className="cards">
          <div className="cardline">
            <div className="card card1">
              <img src={icon1} className="icon" />
              <p className="experience">
                1.5 years of experience building projects of different
                complexity. Designed and developed web applications using React,
                TypeScript, TailwindCSS
              </p>
            </div>
            <div className="card card2">
              <img src={icon3} className="icon" />
              <p className="experience">
                Frontend Developer <br />
                WebCanvas May 2025 – Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

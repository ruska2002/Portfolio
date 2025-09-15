import "./Project.css";
import clickIcon from "../../../public/icon-park-solid_click.png";

interface ProjectsProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reversed?: boolean;
}
const Project = ({
  title,
  subtitle,
  description,
  image,
  reversed,
}: ProjectsProps) => {
  return (
    <div className={`projects ${reversed ? "reversed" : ""}`}>
      <div className="bg-sircle">
        <div className="sircle gradient-left"></div>
        <div className="sircle gradient-right"></div>
      </div>

      <div className="project-content">
        <div className="text-side">
          <p className="p-title">{title}</p>
          <h3 className="p-title2">{subtitle}</h3>
          <div className="description-box">
            <p className="description">{description}</p>
          </div>
          <div className="click-img">
            <img src={clickIcon} />
            <img src={clickIcon} />
          </div>
        </div>

        <div className="project-preview">
          <div className="project-background"></div>
          <img src={image} className="project-img" />
        </div>
      </div>
    </div>
  );
};

export default Project;

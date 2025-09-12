import "./Project.css";
import clickIcon from "../../public/icon-park-solid_click.png";
import ecommerce from "../../public/ecommerce.jpg";
const Project = () => {
  return (
    // Projects.jsx
    <div className="projects">
      <div className="bg-sircle">
        <div className="sircle gradient-left"></div>
        <div className="sircle gradient-right"></div>
      </div>

      <div className="project-content">
        <div className="text-side">
          <p className="p-title">Featured Project</p>
          <h3 className="p-title2">Example Project</h3>
          <div className="description-box">
            <p className="description">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>
          <div className="click-img">
            <img src={clickIcon} />
            <img src={clickIcon} />
          </div>
        </div>

        <div className="project-preview">
          <div className="project-background"></div>
          <img src={ecommerce} className="ecommerce-img" />
        </div>
      </div>
    </div>
  );
};

export default Project;

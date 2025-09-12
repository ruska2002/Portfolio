import Navbar from "./components/Navbar";
import Me from "./components/Me.tsx";
import Skills from "./components/Skills.tsx";
import WorkExperience from "./components/WorkExperience.tsx";
import "./App.css";
import Project from "./components/Project.tsx";
import Education from "./components/Education.tsx";
import Contact from "./components/Contact.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="wholeContainer">
        <Me />
        <WorkExperience />
        <Skills />
        <Project />
        <Education />
      </div>
      <Contact />
    </>
  );
};

export default App;

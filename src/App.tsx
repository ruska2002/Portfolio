import Navbar from "./components/Navbar";
import Me from "./components/Me.tsx";
import Skills from "./components/Skills.tsx";
import WorkExperience from "./components/WorkExperience.tsx";
import "./App.css";
import Project from "./components/Project.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Me />
      <WorkExperience />
      <Skills />
      <Project />
    </>
  );
};

export default App;

import Navbar from "./components/Navbar";
import Me from "./components/Me.tsx";
import Skills from "./components/Skills.tsx";
import WorkExperience from "./components/WorkExperience.tsx";
import "./App.css";
import Education from "./components/Education.tsx";
import Contact from "./components/Contact.tsx";
import ProjectSection from "./components/projects/ProjectSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Me />
      <WorkExperience />
      <Skills />
      <ProjectSection />
      <Education />
      <Contact />
    </>
  );
};

export default App;

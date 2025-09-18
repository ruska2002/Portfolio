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
      <section id="home">
        <Me />
      </section>

      <section id="about">
        <WorkExperience />
        <Skills />
      </section>

      <section id="projects">
        <ProjectSection />
      </section>

      <Education />
      <Contact />
    </>
  );
};

export default App;

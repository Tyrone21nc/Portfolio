import "./index.css"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import About from "./components/About.jsx"; // whether I include .jsx or not, React still remembers it as a .jsx file
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import PongosLearningLabLogo from "./assets/PongosLearningLabLogo.webp";
import CHOYCESLogo from "./assets/CHOYCESLogo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faHandSparkles } from '@fortawesome/free-solid-svg-icons'


// For linking and routing
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {

  const va = 3;
  // feed back from Jay from hackUMBC
  // For sections where you have a lot of texts (work XP and Education) make them into bullet points
  // and move the skills section right above your about section
  // Add school orgs that I am a part of for the schools I have attended

  const highSchool = {

  };
  const university = {

  };
  const work1 = {
    companyName: "Pongos Learning Lab",
    altText: "Pongos Learning Lab logo",
    imgSrc: PongosLearningLabLogo,
    location: "Crofton, MD",
    position: "Instructor Intern",
    fromMonth: "Aug",
    fromYear: "2022",
    toMonth: "Aug",
    toYear: "2022",
    description: `
    <li><p>
      As an Instructor intern, I was in charge of helping the kids have an educational and fun experience while learning STEM
    </p></li>
    <li><p>
      I helped children program <a href="https://store.makewonder.com/products/dash?srsltid=AfmBOooHixAr1B7Du657HcpZkoUjo5-SXYukmTWFhjWr6LpP00SadYQI" rel="noopener" target="_blank">Dash Coding Robots</a>
    </p></li>
    <li><p>
      I also taught a STEAM topics, including art projects, minecraft server building and motion pictures (videos) creation
    </p></li>`
  };
  const work2 = {
    companyName: "Pongos Learning Lab",
    altText: "Pongos Learning Lab logo",
    imgSrc: PongosLearningLabLogo,
    location: "Crofton, MD",
    position: "Instructor Intern",
    fromMonth: "Aug",
    fromYear: "2022",
    toMonth: "Aug",
    toYear: "2022",
  };


  return (
    <div className="container">

      <div className="main-container-elements"><Navbar /></div>

      <div className="main-container-elements"><Skills /></div>

      <div className="main-container-elements"><About /></div>

      <div className="main-container-elements">
        <WorkExperience companyName={work1.companyName} altText={work1.altText} imgSrc={work1.imgSrc} location={work1.location} position={work1.position} fromMonth={work1.fromMonth} fromYear={work1.fromYear} toMonth={work1.toMonth} toYear={work1.toYear} description={work1.description} />

      </div>

      <div className="main-container-elements"><Education /></div>


      <div className="main-container-elements"><Projects /></div>



      <div className="main-container-elements"><Contact /></div>
      <div className="navigation"><Navigation /></div>
  
    </div>
  );
}
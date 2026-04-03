import "./index.css"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import About from "./components/About.jsx"; // whether I include .jsx or not, React still remembers it as a .jsx file
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";


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

  return (
    <div className="container">

      <div className="main-container-elements"><Navbar /></div>

      <div className="main-container-elements"><Skills /></div>

      <div className="main-container-elements"><About /></div>

      <div className="main-container-elements"><WorkExperience props={va} /></div>

      <div className="main-container-elements"><Education /></div>


      <div className="main-container-elements"><Projects /></div>



      <div className="main-container-elements"><Contact /></div>
      <div className="navigation"><Navigation /></div>
  
    </div>
  );
}
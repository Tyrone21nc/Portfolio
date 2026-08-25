import "./index.css"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import About from "./components/About.jsx"; // whether I include .jsx or not, React still remembers it as a .jsx file
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import C from "./components/C.jsx";

// img URL used as props
import PongosLearningLabLogo from "./assets/PongosLearningLabLogo.webp";
import CHOYCESLogo from "./assets/CHOYCESLogo.png";
import NorthCountyHighSchoolLogo from "./assets/NorthCountyHSLogo.png";
import UMBCLogo from "./assets/UMBCLogo.png";
import RestResv from "./assets/RestaurantReservation.png";
import LibSystem from "./assets/LibrarySystem.png";
import Wordle from "./assets/Wordle.png";
import CourseSelection from "./assets/CourseSelection.png";
import ResumeBuilder from "./assets/ResumeBuilder.png";
import ResumeBuilder2 from "./assets/ResumeBuilder2.png";
import PassGen from "./assets/PassGen.mp4";
import GoogleCloudServices from "./assets/GoogleCloudServices.png";


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
    companyName: "CHOYCES",
    altText: " CHOYCES logo",
    imgSrc: CHOYCESLogo,
    location: "Remote",
    position: "IT Intern",
    fromMonth: "Jul",
    fromYear: "2024",
    toMonth: "Aug",
    toYear: "2024",
    description: "Technical software support for issues encountered by users. Managed the operation of the Operating System, including the storage and drive. Installed and tested software. I also worked with the set up of user and profile accounts and assisted with troubleshooting issues."
  };
  const school1 = {
    schoolName: "North County High School",
    altText: "North County High School logo",
    imgSrc: NorthCountyHighSchoolLogo,
    location: "Ferndale, MD",
    fromMonth: "Sep",
    fromYear: "2019",
    toMonth: "Jun",
    toYear: "2023",
    description: "I went to high school."
  };
  const school2 = {
    schoolName: "University of Maryland, Baltimore County",
    altText: "University of Maryland, Baltimore County logo",
    imgSrc: UMBCLogo,
    location: "Baltimore, MD",
    fromMonth: "Aug",
    fromYear: "2023",
    toMonth: "May",
    toYear: "2027",
    description: "I will be entering my senior year at UMBC in Fall 2026, working towards my BS in Computer Science."
  };
  const project1 = {
    projectName: "Restaurant Reservation Application",
    imgSrc: RestResv,
    altText: "Restaurant Reservation Picture of GitHub code",
    fromMonth: "Dec",
    fromYear: "2025",
    toMonth: "Jan",
    toYear: "2026",
    description: "This application allows users to reserve a table at a restaurant. It allows for features including the viewing of all current tables, view which ones are currently reserved and still get on the waitlist for those tables. Once a user gets in the system, they can claim their reserved spot.",
    tools: `
      <button>C++</button>
      <button>Thread</button>
      <button>Chrono</button>
    `,
    githubLink: "https://github.com/Tyrone21nc/Restaurant-Reservation-Application",
    liveLink: ""
  };
  const project2 = {
    projectName: "Library System",
    imgSrc: LibSystem,
    altText: "Library System Picture of GitHub code",
    fromMonth: "Sep",
    fromYear: "2024",
    toMonth: "May",
    toYear: "2025",
    description: "Originally programmed in C++, this application allows for the retrieval and deletion of books from a specific library collection. The picture you see is from the web based version. ",
    tools: `
      <button>C++</button>
      <button>HTML</button>
      <button>CSS</button>
      <button>JS</button>
    `,
    githubLink: "https://github.com/Tyrone21nc/Library-System",
    liveLink: `
      <button title="Online version"><a className="project-btn-anchor" href="https://tyrone21nc.github.io/LibrarySystemWeb/" target="_blank"><FontAwesomeIcon icon={faGlobe} size="xl" /></a></button>
      `
  };
  const project3 = {
    projectName: "Resume Builder",
    imgSrc: ResumeBuilder,
    altText: "Resume Builder",
    fromMonth: "Aug",
    fromYear: "2025",
    toMonth: "Dec",
    toYear: "2025",
    description: "This Resume generator allows users to fill in information about their education, introduction, and work experience.",
    tools: `
      <button>React</button>
      <button>TailwindCSS</button>
    `,
    githubLink: "https://github.com/Tyrone21nc/Resume-Builder",
    liveLink: ""
  };
  const project4 = {
    projectName: "Password Saver",
    imgSrc: PassGen,
    altText: "Short gif of Password Generator",
    fromMonth: "Aug",
    fromYear: "2025",
    toMonth: "Dec",
    toYear: "2025",
    description: "Allows users to generate passwords and save it to their local system. Passwords are saved on a NoSQL database on the user's device.",
    tools: `
      <button>Python</button>
      <button>MongoDBCompass</button>
    `,
    githubLink: "https://github.com/Tyrone21nc/Password-Saver",
    liveLink: ""
  };
  const project5 = {
    projectName: "Course Selection",
    imgSrc: CourseSelection,
    altText: "Course Selection image",
    fromMonth: "Jan",
    fromYear: "2026",
    toMonth: "Jan",
    toYear: "2026",
    description: "Students can sign in and enroll, drop and be waitlisted for courses. Student are enrolled on a first come first served basis, but waitlisted based on a priority score.",
    tools: `
      <button>C++</button>
    `,
    githubLink: "https://github.com/Tyrone21nc/Course-Selection-Application",
    liveLink: ""
  };
  const project6 = {
    projectName: "Wordle",
    imgSrc: Wordle,
    altText: "Wordle image",
    fromMonth: "Jan",
    fromYear: "2024",
    toMonth: "Jul",
    toYear: "2024",
    description: "Developed a version of Wordle, still following most rules of the original game. The game is played in the command line.",
    tools: `
      <button>Python</button>
      <button>Wordle</button>
    `,
    githubLink: "https://github.com/Tyrone21nc/Wordle",
    liveLink: ""
  };


  return (
    <div className="container">

      <div className="main-container-elements"><Navbar /></div>

      <div className="main-container-elements"><Skills /></div>

      <div className="main-container-elements"><About /></div>

      <div className="main-container-elements">
        <h2>Work Experience</h2>
        <WorkExperience companyName={work1.companyName} altText={work1.altText} imgSrc={work1.imgSrc} location={work1.location} position={work1.position} fromMonth={work1.fromMonth} fromYear={work1.fromYear} toMonth={work1.toMonth} toYear={work1.toYear} description={work1.description} />
        <WorkExperience companyName={work2.companyName} altText={work2.altText} imgSrc={work2.imgSrc} location={work2.location} position={work2.position} fromMonth={work2.fromMonth} fromYear={work2.fromYear} toMonth={work2.toMonth} toYear={work2.toYear} description={work2.description} />
      </div>

      <div className="main-container-elements">
        <h2>Education</h2>
        <Education schoolName={school1.schoolName} altText={school1.altText} imgSrc={school1.imgSrc} location={school1.location} fromMonth={school1.fromMonth} fromYear={school1.fromYear} toMonth={school1.toMonth} toYear={school1.toYear} description={school1.description} />
        <Education schoolName={school2.schoolName} altText={school2.altText} imgSrc={school2.imgSrc} location={school2.location} fromMonth={school2.fromMonth} fromYear={school2.fromYear} toMonth={school2.toMonth} toYear={school2.toYear} description={school2.description} />
      </div>


      <div className="main-container-elements">
        <h2 className="section-title">Projects</h2>
        <h4>A gallery of my latest projects</h4>
        <div className="projects-container">
          <Projects projectName={project1.projectName} imgSrc={project1.imgSrc} altText={project1.altText} fromMonth={project1.fromMonth} fromYear={project1.fromYear} toMonth={project1.toMonth} toYear={project1.toYear} description={project1.description} tools={project1.tools} githubLink={project1.githubLink} />
          <Projects projectName={project2.projectName} imgSrc={project2.imgSrc} altText={project2.altText} fromMonth={project2.fromMonth} fromYear={project2.fromYear} toMonth={project2.toMonth} toYear={project2.toYear} description={project2.description} tools={project2.tools} githubLink={project2.githubLink} liveLink={project2.liveLink}/>
          <Projects projectName={project3.projectName} imgSrc={project3.imgSrc} altText={project3.altText} fromMonth={project3.fromMonth} fromYear={project3.fromYear} toMonth={project3.toMonth} toYear={project3.toYear} description={project3.description} tools={project3.tools} githubLink={project3.githubLink} />
          <Projects projectName={project4.projectName} imgSrc={project4.imgSrc} altText={project4.altText} fromMonth={project4.fromMonth} fromYear={project4.fromYear} toMonth={project4.toMonth} toYear={project4.toYear} description={project4.description} tools={project4.tools} githubLink={project4.githubLink} />
          <Projects projectName={project5.projectName} imgSrc={project5.imgSrc} altText={project5.altText} fromMonth={project5.fromMonth} fromYear={project5.fromYear} toMonth={project5.toMonth} toYear={project5.toYear} description={project5.description} tools={project5.tools} githubLink={project5.githubLink} />
          <Projects projectName={project6.projectName} imgSrc={project6.imgSrc} altText={project6.altText} fromMonth={project6.fromMonth} fromYear={project6.fromYear} toMonth={project6.toMonth} toYear={project6.toYear} description={project6.description} tools={project6.tools} githubLink={project6.githubLink} />
        </div>

      </div>


      

      <div className="main-container-elements"><C /></div>

      <div className="main-container-elements"><Contact /></div>
      <div className="navigation"><Navigation /></div>
  
    </div>
  );
}
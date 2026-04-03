import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import RestResv from "../assets/RestaurantReservation.png";
import LibSystem from "../assets/LibrarySystem.png";
import Wordle from "../assets/Wordle.png";
import CourseSelection from "../assets/CourseSelection.png";
import ResumeBuilder from "../assets/ResumeBuilder.png";
import ResumeBuilder2 from "../assets/ResumeBuilder2.png";
import PassGen from "../assets/PassGen.mp4";
import GoogleCloudServices from "../assets/GoogleCloudServices.png";

const projects = [
  {
    name: "Movie Recommendation System",
    description: "Machine learning project predicting watched movies"
  },
  {
    name: "Hash Table Implementation",
    description: "Open addressing with double hashing"
  }
];

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <h2 className="section-title">Projects</h2>
      <h4>A gallery of my latest projects</h4>
      <div className="projects-container">

        <div className="project-section">
          <div className="project-img">
            <img src={RestResv} alt="Restaurant Reservation Picture of GitHub code" className='project-img' />
          </div>

          <div className="project-content">
            <div className="project-description">
              <h4>Restaurant Reservation Application</h4>
              <p>Dec 2025 - Jan 2026</p>
              <p>This application allows users to reserve a table at a restaurant. It allows for features including 
                the viewing of all current tables, view which ones are currently reserved and still get on the 
                waitlist for those tables. Once a user gets in the system, they can claim their reserved spot.
              </p>
            </div>
            <div className="project-tools">
              <button>C++</button>
              <button>Thread</button>
              <button>Chrono</button>
            </div>

            <div className="project-access">
              <button><FontAwesomeIcon icon={faGithub} size="xl" />Source</button>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="project-img">
            <img src={LibSystem} alt="Library System" className='project-img' />
          </div>

          <div className="project-content">
            <div className="project-description">
              <h4>Library System</h4>
              <p>Sep 2024 - Jul 2025</p>
              <p>Originally programmed in C++, this application allows for the retrieval and deletion of books from a specific library collection.
                The picture you see is from the web based version. 
              </p>
            </div>
            <div className="project-tools">
              <button>C++</button>
              <button>HTML</button>
              <button>CSS</button>
              <button>JS</button>
            </div>

            <div className="project-access">
              <button><FontAwesomeIcon icon={faGithub} size="xl" />Source</button>
            </div>
          </div>
        </div>


        <div className="project-section">
          <div className="project-img">
            <img src={ResumeBuilder} alt="Resume Builder" className='project-img' />
          </div>

          <div className="project-content">
            <div className="project-description">
              <h4>Resume Builder</h4>
              <p>Aug 2025 - Dec 2025</p>
              <p>This Resume generator allows users to fill in information about their education, 
                introduction, and work experience.
              </p>
            </div>
            <div className="project-tools">
              <button>React</button>
              <button>TailwindCSS</button>
            </div>

            <div className="project-access">
              <button><FontAwesomeIcon icon={faGithub} size="xl" />Source</button>
            </div>
          </div>
        </div>


        <div className="project-section">
          <div className="project-img">
            <video autoPlay loop muted playsInline>
              <source src={PassGen} type="video/mp4" alt="Short gif of Password Generator" />
            </video>
          </div>

          <div className="project-content">
            <div className="project-description">
              <h4>Password Saver</h4>
              <p>Jun 2024 - Dec 2025</p>
              <p>Allows users to generate passwords and save it to their local system. Passwords are 
                saved on a NoSQL database on the user's device
              </p>
            </div>
            <div className="project-tools">
              <button>Python</button>
              <button>MongoDBCompass</button>
            </div>

            <div className="project-access">
              <button><FontAwesomeIcon icon={faGithub} size="xl" />Source</button>
            </div>
          </div>
        </div>


        <div className="project-section">
          <div className="project-img">
            <img src={CourseSelection} alt="Course Selection" className='project-img' />
          </div>

          <div className="project-content">
            <div className="project-description">
              <h4>Course Selection</h4>
              <p>Jan 2026 - Jan 2026</p>
              <p>Students can sign in and enroll, drop and be waitlisted for courses. Student 
                are enrolled on a first come first served basis, but waitlisted based on a
                priority score.
              </p>
            </div>
            <div className="project-tools">
              <button>C++</button>
            </div>

            <div className="project-access">
              <button><FontAwesomeIcon icon={faGithub} size="xl" />Source</button>
            </div>
          </div>
        </div>


        <div className="project-section">
          <div className="project-img">
            <img src={Wordle} alt="Wordle" className='project-img' />
          </div>

          <div className="project-content">
            <div className="project-description">
              <h4>Wordle</h4>
              <p>Jan 2024 - Jul 2024</p>
              <p>Developed a version of Wordle, still following most rules of the 
                original game. The game is played in the command line.
              </p>
            </div>
            <div className="project-tools">
              <button>Python</button>
              <button>Wordle</button>
            </div>

            <div className="project-access">
              <button><FontAwesomeIcon icon={faGithub} size="xl" />Source</button>
            </div>
          </div>
        </div>


        <div className="project-section">
          <div className="project-img">
            <img src={GoogleCloudServices} alt="Google Cloud Services logo" className='project-img' />
          </div>

          <div className="project-content">
            <div className="project-description">
              <h4>Gmail Retriever</h4>
              <p>March 2026 - March 2026</p>
              <p>Used Google Cloud and API services to retrieve mail sent to my gmail on certain restrictions. These restrictions included, 
                sent by "somemail@mail.com" and included the string "full stack development" in the mail content.
              </p>
            </div>
            <div className="project-tools">
              <button>Node.js</button>
              <button>Google Cloud Services</button>
              <button>ChatGPT Prompting</button>
            </div>

            <div className="project-access">
              <button><FontAwesomeIcon icon={faGithub} size="xl" />Source</button>
            </div>
          </div>
        </div>


      </div>

      <p>Discover more projects on my github</p>

      {/* {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))} */}
    </div>
  );
}
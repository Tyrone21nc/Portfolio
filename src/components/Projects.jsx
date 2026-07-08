import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
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

export default function Projects(props) {
  return (
    <div className='projects' id='projects'>
      {/* <h4>A gallery of my latest projects</h4> */}
      <div className="">

        <div className="project-section">
          <div className="project-img">
            <img src={props.imgSrc} alt={props.altText} className='project-img' />
          </div>

          <div className="project-content">
            <div className="project-description">
              <h4>{props.projectName}</h4>
              <p>{props.fromMonth} {props.fromYear} - {props.toMonth} {props.toYear}</p>
              <p>{props.description}</p>
            </div>
            <div className="project-tools">
              <p dangerouslySetInnerHTML={{ __html: props.tools }} />
            </div>

            <div className="project-access">
              <button><a className="project-btn-anchor" href={props.githubLink} target="_blank"><FontAwesomeIcon icon={faGithub} size="xl" />Source</a></button>
              {props.liveLink ? (
                <button title="Online version">
                  <a className="project-btn-anchor" href={props.liveLink} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGlobe} size="xl" />
                  </a>
                </button>
              ) : null}
            </div>  
          </div>
        </div>

      </div>
    </div>
  );
}
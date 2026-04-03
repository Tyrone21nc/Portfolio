import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDocker, faJs, faPython, faLinux, faReact, faCss, faHtml5, faTailwindCss } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
export default function Skills(){

    return(
        <div className="skills-container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-button-container">
                <button className="no-button-bg"><FontAwesomeIcon className="skills-btn" icon={faDocker} size='2xl' /></button>
                <button className="no-button-bg"><FontAwesomeIcon className="skills-btn" icon={faJs} size='2xl' /></button>
                <button className="no-button-bg"><FontAwesomeIcon className="skills-btn" icon={faPython} size='2xl' /></button>
                <button className="no-button-bg"><FontAwesomeIcon className="skills-btn" icon={faLinux} size='2xl' /></button>
                <button className="no-button-bg"><FontAwesomeIcon className="skills-btn" icon={faReact} size='2xl' /></button>
                <button className="no-button-bg"><FontAwesomeIcon className="skills-btn" icon={faDatabase} size='2xl' /></button>
                <button className="no-button-bg"><FontAwesomeIcon className="skills-btn" icon={faCss} size='2xl' /></button>
                <button className="no-button-bg"><FontAwesomeIcon className="skills-btn" icon={faHtml5} size='2xl' /></button>
                <button className="no-button-bg"><FontAwesomeIcon className="skills-btn" icon={faTailwindCss} size='2xl' /></button>
                <button>C++</button>
                <button>MongoDBCompass</button>
                <button>API</button>
                <button>Flask</button>
                <button>Git</button>
            </div>

            {/* <div className="skills-languages-container">
                <h4>Programming Languages</h4>
                <button>C++</button>
                <button>Python</button>
                <button>JS</button>
            </div>
            <div className="skills-technologies-container">
                <h4>Technologies and Frameworks</h4>
                <button>API</button>
                <button>React</button>
                <button>Django</button>
                <button>Flask</button>
                <button>HTML & CSS</button>
                <button>Git</button>
            </div> */}
        </div>
    );
}
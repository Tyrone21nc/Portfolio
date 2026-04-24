import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faMoon, faHouse, faFile } from '@fortawesome/free-regular-svg-icons'
// import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

// importing my resume so it can be downloaded on click
import resumePDF from "./RomainDzeinseResumeJan2026.pdf";
// import resumeDOCX from "./RomainDzeinseResumeJan2026.docx";  // it wont allow me to download .docx unless I install something in my terminal, I say no thank you, for now
export default function Navigation(){


    return (
        <div className='nav-container'>
            <div className='team1'>
                <a href='/' title='home' className='nav-anchors' ><FontAwesomeIcon icon={faHouse} size="xl" className="nav-icons"/></a>
            </div>
            <hr />
            <div className='team2'>
                <p title='github'><a href='https://www.github.com/tyrone21nc' rel="noopener" target="_blank" title='github' className='nav-anchors' ><FontAwesomeIcon icon={faGithub} size="xl" className="nav-icons" /></a></p>
                <p title='linkedin'><a href='https://www.linkedin.com/in/romaindzeinse/' rel="noopener" target="_blank" title='linkedin' className='nav-anchors' ><FontAwesomeIcon icon={faLinkedinIn} size="xl" className="nav-icons" /></a></p>
                <p title='projects'><a href='#projects' title="projects" className='nav-anchors' ><FontAwesomeIcon icon={faLaptopCode} size="xl" className="nav-icons" /></a></p>
                <p title='download resume'><a href={resumePDF} title="resume" className='nav-anchors' download="Romain Dzeinse Resume"><FontAwesomeIcon icon={faFilePdf} size="xl" className="nav-icons" /></a></p>
            </div>
            <hr />
            <div className='team3'>
                <p title='change theme'><a href='/' title='change theme' className='nav-anchors' ><FontAwesomeIcon icon={faMoon} size="xl"  className="nav-icons" /></a></p>
            </div>
        </div>
    );
}
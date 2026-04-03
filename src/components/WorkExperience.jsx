import PongosLearningLabLogo from "../assets/PongosLearningLabLogo.webp";
import CHOYCESLogo from "../assets/CHOYCESLogo.png";


function WorkExperience(props){
    // const fN, lN = [props];

    

    console.log(props);
    return (
        <div className="work-experience">
            <h2 className="section-title">Work Experience</h2>
            <div className="work-experience-container">
                <details>
                    <summary>
                        <img src={PongosLearningLabLogo} alt="Pongos Learning Lab logo" />
                        <div className="summary-details-container">
                            <div>
                                <h5>Pongos Learning Lab  (Crofton, MD)</h5>
                                <p>Intructor Intern</p>
                            </div>
                            <div>
                                <p><span>Aug 2022</span> - <span>Aug 2022</span></p>
                            </div>
                        </div>
                    </summary>
                    <p>
                        <ul>
                            <li>
                                <p>
                                    As an Instructor intern, I was in charge of helping the kids have an educational and fun experience while learning STEM
                                </p>
                            </li>
                            <li>
                                <p>
                                    I helped children program <a href="https://store.makewonder.com/products/dash?srsltid=AfmBOooHixAr1B7Du657HcpZkoUjo5-SXYukmTWFhjWr6LpP00SadYQI" rel="noopener" target="_blank">
                                    Dash Coding Robots</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    I also taught a STEAM topics, including art projects, minecraft server building and motion pictures (videos) creation
                                </p>
                            </li>
                        </ul>
                    </p>
                </details>
                <details id="pongos-LL-exp">
                    <summary>
                        <img src={CHOYCESLogo} alt="Pongos Learning Lab logo" />
                        <div className="summary-details-container">
                            <div>
                                <h5>CHOYCES (Remote)</h5>
                                <p>IT Intern</p>
                            </div>
                            <div>
                                <p><span>Jul 2024</span> - <span>Aug 2024</span></p>
                            </div>
                        </div>
                    </summary>
                    <p>
                        Technical software support for issues encountered by users. Managed the operation of the Operating System, including the 
                        storage and drive. Installed and tested software. I also worked with the set up of user and profile accounts and 
                        assisted with troubleshooting issues. 
                    </p>
                </details>
            </div>

            {/* The html element is summary and details; Use that pair */}

        </div>
    );
}


export default WorkExperience;
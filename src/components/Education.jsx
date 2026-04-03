import NorthCountyHighSchoolLogo from "../assets/NorthCountyHSLogo.png";
import UMBCLogo from "../assets/UMBCLogo.png";

export default function Education(){

    return (
        <div className="education">
            <h2 className="section-title">Education Section</h2>
            <div className="education-container">
                <details>
                    <summary>
                        <img src={NorthCountyHighSchoolLogo} alt="North County High School logo" />
                        <div className="summary-details-container">
                            <div>
                                <h5>North County High School  (Ferndale, MD)</h5>
                            </div>
                            <div>
                                <p><span>Sep 2019</span> - <span>Jun 2023</span></p>
                            </div>
                        </div>
                    </summary>
                    <p>
                        I went to high school.
                    </p>
                </details>
                <details>
                    <summary>
                        <img src={UMBCLogo} alt="University of Maryland, Baltimore County logo" />
                        <div className="summary-details-container">
                            <div>
                                <h5>University of Maryland, Baltimore County  (Baltimore, MD)</h5>
                            </div>
                            <div>
                                <p><span>Aug 2023</span> - <span>May 2027</span></p>
                            </div>
                        </div>
                    </summary>
                    <p>
                        I am currently in my third year at UMBC working towards my <u>BS in Computer Science</u>.
                    </p>
                </details>
            </div>
        </div>
    );
}
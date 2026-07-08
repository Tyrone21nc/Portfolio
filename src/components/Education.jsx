// import NorthCountyHighSchoolLogo from "../assets/NorthCountyHSLogo.png";
// import UMBCLogo from "../assets/UMBCLogo.png";

export default function Education(props){

    return (
        <div className="education">
            <div className="education-container">
                <details>
                    <summary>
                        <img src={props.imgSrc} alt={props.altText} />
                        <div className="summary-details-container">
                            <div>
                                <h5>{props.schoolName}  ({props.location})</h5>
                            </div>
                            <div>
                                <p><span>{props.fromMonth} {props.fromYear}</span> - <span>{props.toMonth} {props.toYear}</span></p>
                            </div>
                        </div>
                    </summary>
                    <p>
                        {props.description}
                    </p>
                </details>
            </div>
        </div>
    );
}
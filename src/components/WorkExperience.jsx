import PongosLearningLabLogo from "../assets/PongosLearningLabLogo.webp";
import CHOYCESLogo from "../assets/CHOYCESLogo.png";


function WorkExperience(props){
    // const fN, lN = [props];

    

    // console.log(props);
    return (
        <div className="work-experience">
            <div className="work-experience-container">
                <details>
                    <summary>
                        <img src={props.imgSrc} alt={props.altText} />
                        <div className="summary-details-container">
                            <div>
                                <h5>{props.companyName}  ({props.location})</h5>
                                <p>{props.position}</p>
                            </div>
                            <div>
                                <p><span>{props.fromMonth} {props.fromYear}</span> - <span>{props.toMonth} {props.toYear}</span></p>
                            </div>
                        </div>
                    </summary>
                    <p>
                        <ul dangerouslySetInnerHTML={{ __html: props.description }}/>
                    </p>
                </details>
            </div>

            {/* The html element is summary and details; Use that pair */}

        </div>
    );
}


export default WorkExperience;
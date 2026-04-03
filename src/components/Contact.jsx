import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage, faPaperPlane, faPhone, faTag, faUser } from "@fortawesome/free-solid-svg-icons";


export default function Contact() {
  return (
    // also known as container
    <div className="contact" id='contact'>

      <div className="form-container">
        <h2 className="section-title">Get in touch</h2>
        <p>Fill out the form below to send me an email</p>
        
        <form>
          <div className="input-group">
            <div className="input-field">
              <FontAwesomeIcon className="contact-icons" icon={faUser}/>
              <input type="text" placeholder='John Doe' required/>
            </div>

            <div className="input-field">
              <FontAwesomeIcon className="contact-icons" icon={faEnvelope}/>
              <input type="email" placeholder='jdoe@somemail.com' required/>
            </div>

            <div className="input-field">
              <FontAwesomeIcon className="contact-icons" icon={faPhone}/>
              <input type="tel" placeholder='123-456-7890 (optional)'/>
            </div>

            <div className="input-field">
              <FontAwesomeIcon className="contact-icons tag-icon" icon={faTag}/>
              <input type="email" placeholder='Subject' required/>
            </div>

          </div>

          
            <div className="message-field">
              <FontAwesomeIcon className="contact-icons" icon={faMessage}/>
              <textarea type="text" rows={5} placeholder='Your Message' required/>
            </div>

            <button type="submit">
              <div className="button-content">
                <span>Send Message</span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </button>


        </form>


      </div>

    </div>
  );
}
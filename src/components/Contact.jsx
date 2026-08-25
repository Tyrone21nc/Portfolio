import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMessage, faPaperPlane, faPhone, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Contact() {

  // this records the form data for the name, email, ..., and msg
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form, 
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5174/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    // if the data was sent, let the user know and set the form back to blank
    if (data.success){
      alert("Message sent!"); // let the user know
      // set the form to blank again
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
    // if the msg didn't send, let the user know
    else{
      alert("Message failed to send. Please try again later."); // let the user know
    }
  };




  return (
    // also known as container
    <div className="contact" id='contact'>

      <div className="form-container">
        <h2 className="section-title">Get in touch</h2>
        <p>Fill out the form below to send me an email</p>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <FontAwesomeIcon className="contact-icons" icon={faUser}/>
              <input name="name" type="text" placeholder='John Doe' value={form.name} onChange={handleChange} required/>
            </div>

            <div className="input-field">
              <FontAwesomeIcon className="contact-icons" icon={faEnvelope}/>
              <input name="email" type="email" placeholder='jdoe@somemail.com' value={form.email} onChange={handleChange} required/>
            </div>

            <div className="input-field">
              <FontAwesomeIcon className="contact-icons" icon={faPhone}/>
              <input name="phone" type="tel" placeholder='123-456-7890 (optional)' value={form.phone} onChange={handleChange}/>
            </div>

            <div className="input-field">
              <FontAwesomeIcon className="contact-icons tag-icon" icon={faTag}/>
              <input name="subject" type="text" placeholder='Subject' value={form.subject} onChange={handleChange} required/>
            </div>
          </div>

          
            <div className="message-field">
              <FontAwesomeIcon className="contact-icons" icon={faMessage}/>
              <textarea name="message" type="text" rows={5} placeholder='Your Message' value={form.message} onChange={handleChange} required/>
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
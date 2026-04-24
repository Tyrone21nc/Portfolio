import ProfilePhoto from "../assets/profile_photo - Copy.jpg";
import ProfilePhoto2 from "../assets/me.JPEG";
import ProfilePhoto3 from "../assets/me_smaller.JPEG";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="name-section">
        <h1>Hi, I'm Romain 👋</h1>
        <p>I am a student at the University of Maryland, Baltimore County (<a href="https://www.umbc.edu" rel="noopener" target="_blank">UMBC</a>), in my third year of majoring in Computer 
          Science. I am a aspiring Software Engineer looking to learn any chance I get.</p>
      </div>
      <div className="img-section">
        <img src={ProfilePhoto3} alt="Romain's profile picture" />
      </div>
    </nav>
  );
}
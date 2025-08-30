import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import linkedin  from '../assets/images/linkedin.jpg';
import '../assets/styles/Main.scss';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={linkedin} className="profile-pic" alt="profile-pic" width="100%"/>  
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Amir-SohailR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amiraja98/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Amir Sohail</h1>
          <p>Full Stack Developer Intern</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Amir-SohailR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amiraja98" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
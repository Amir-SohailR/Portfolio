import * as React from "react";
import mock01 from '../assets/images/mock01.png';
//import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
//import mock05 from '../assets/images/mock05.png';
//import mock06 from '../assets/images/mock06.png';
import mock08 from '../assets/images/mock08.png';
import menu from '../assets/images/menu.png';
import moviebox2 from '../assets/images/moviebox2.jpg';
import facebook from '../assets/images/facebook.png';
import Contacts from "../assets/images/Contacts.png";
import Calculator from "../assets/images/Calculator.jpg";
import Library from "../assets/images/Library.png";
//import img1 from '../assets/images/img1.jpg';
import '../assets/styles/Project.scss';
import { Facebook } from "@mui/icons-material";

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={moviebox2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>Developed movie finder app with semantic search and sentiment analysis using OpenAI GPT-3.5 Turbo, Qdrant, React, and Flask.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Amir-SohailR/Recipe-List" target="_blank" rel="noreferrer"> <img src={menu} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Amir-SohailR/Recipe-List" target="_blank" rel="noreferrer"><h2>Restaurant Menu Card</h2></a>
                <p>Designed, developed, and launched a Restaurant website page with dynamic features.An iconic site for food lovers.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Amir-SohailR/Social-media-app" target="_blank" rel="noreferrer"><img src={facebook} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Amir-SohailR/Social-media-app" target="_blank" rel="noreferrer"><h2>Social Media Template</h2></a>
                <p>This is a simple social Media App which we regularly following the social activities in media.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Amir-SohailR/Contact-App" target="_blank" rel="noreferrer"><img src={Contacts} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Amir-SohailR/Contact-App" target="_blank" rel="noreferrer"><h2>Contact App</h2></a>
                <p>The most basic way of communication is voice over interpretation which is built using dynamic pages CRUD operation. This app is built with and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Amir-SohailR/Library-management-site" target="_blank" rel="noreferrer"><h2>Library Management System</h2></a>
                <a href="https://github.com/Amir-SohailR/Library-management-site" target="_blank" rel="noreferrer"><img src={Library} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>A Library Management System (LMS) app description explains a software that automates and organizes a library's operations, allowing users to manage books, members, 
                    and transactions. The app's core functions cataloging and tracking inventory, managing user registrations and borrowing histories and providing search capabilities for users to find and request books.
                </p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and 
                    various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Amir-SohailR/Calculator---JS" target="_blank" rel="noreferrer"><img src={Calculator} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Amir-SohailR/Calculator---JS" target="_blank" rel="noreferrer"><h2>Calculator Apps</h2></a>
                <p>Created an mathematical Calculator App using JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
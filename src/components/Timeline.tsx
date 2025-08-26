import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          {/* comment line */}

           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Eduversity - Bangalore  </h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Development -Bengaluru</h4>
            <a href="https://edu-versity.in" target="_blank" rel="noreferrer" color="blue"><h4 className="vertical-timeline-element-subtitle" style={{ color: "blue" }}>https://edu-versity.in/</h4></a>
              <a href="https://www.linkedin.com/company/edu-versity/posts/" target="_blank" rel="noreferrer" color="blue"><h4 className="vertical-timeline-element-subtitle" style={{ color: "blue" }}>https://www.linkedin.com/company/edu-versity/posts/</h4></a>
            <p>
              Full-stack Web Development,  Project Management.
            </p>
          </VerticalTimelineElement> 
   
          <VerticalTimelineElement
        
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer (Intern)</h3>
            <h4 className="vertical-timeline-element-subtitle">Coimbatore </h4>
            <br></br>
            <h4  className="vertical-timeline-element-title">Introduction to HTML,CSS,Javacript(IBM Certification Coursera)</h4>
              <a  href="https://www.coursera.org/account/accomplishments/verify/FEMLGF56ZWHS" target="_blank" rel="noreferrer"><h5 className="vertical-timeline-element-subtitle" style={{ color: "blue" }}>https://www.coursera.org/account/accomplishments/verify/FEMLGF56ZWHS</h5></a>
            <h4 className="vertical-timeline-element-subtitle">Coimbatore</h4>

            <p>
              Frontend Development, Backend Development, Github Deployments,
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Front End Developer Intern (Remote)</h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021-2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Govt Organisation</h3>
            <h4 className="vertical-timeline-element-subtitle">Coimbatore</h4>
            <p>
              Assistant
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
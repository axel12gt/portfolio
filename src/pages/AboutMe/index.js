import React from "react";
import "./style.css";

function AboutMe() {
  return (
    <div className="mt-5">
      <ul class="nav">
        <li class="nav-item">
          <a
            className="nav-link"
            href="https://github.com/axel12gt"
            target="blank_"
          >
            Github
          </a>
        </li>
        <li class="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/dameon-brown-23a045186/"
            target="blank_"
          >
            LinkedIn
          </a>
        </li>
        <li class="nav-item">
          <a
            className="nav-link"
            href="mailto:axel12gt@live.com?Subject=Hired!"
            target="_top"
          >
            axel12gt@live.com
          </a>
        </li>
      </ul>
      <h3>About Me</h3>
      <p className="container">
        My name is Dameon Brown a recent graduate of the Trilogy bootcamp for
        web development. I am currently seeking a change in careers which is why
        I decided to pursue this path in web development. I am passionate and
        ready to start a career in tech. The stack I am currently familar with
        is the MERN and my skills include:
        <br />
        <br />
        <ul>
          <li>Vanilla JavaScript</li>
          <li>jquery</li>
          <li>Full Stack Web Development</li>
          <li>Front End Web Development</li>
          <li>Back End Web Development</li>
          <li>Using APIs</li>
          <li>No SQL DB</li>
          <li>SQL DB</li>
          <li>Model View Controller</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node</li>
          <li>Express</li>
          <li>Passport</li>
          <li>CSS Frameworks like Bootstrap</li>
          <li>And more..</li>
        </ul>
      </p>
    </div>
  );
}

export default AboutMe;

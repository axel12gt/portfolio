import React from "react";
import "./style.css"
import crystal from "../../images/Crystal-Collector.png"
import dog from "../../images/giphy.gif"
import train from "../../images/board.png"
import b from "../../images/b.png"

function Projects() {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <hr />
      <div class="row justify-content-center">
        <div class="col-md-3">
          <a
            target="_blank"
            href="https://axel12gt.github.io/Crystal-Collector/"
          >
            <img
              src={ crystal }
              height="240px"
              width="240px"
            />
          </a>
          <h3>Crystal Collector</h3>
        </div>
        <div class="col-md-3">
          <a
            target="_blank"
            href="https://axel12gt.github.io/GifTastic/"
          >
            <img
              src={ dog }
              height="240px"
              width="240px"
            />
          </a>
          <h3>GifTastic</h3>
        </div>
        <div class="col-md-3">
          <a
            target="_blank"
            href="https://immense-hollows-89122.herokuapp.com/"
          >
            <img
              src={ b }
              height="240px"
              width="240px"
            />
          </a>
          <h4>Full Stack Web Scraper</h4>
        </div>
        <div class="col-md-3">
          <a
            target="_blank"
            href="https://axel12gt.github.io/train-activity"
          >
            <img
              src={ train }
              height="240px"
              width="240px"
            />
          </a>
          <h3>Train Board</h3>
        </div>
      </div>
    </div>
  );
}

export default Projects;

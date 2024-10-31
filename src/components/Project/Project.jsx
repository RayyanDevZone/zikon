import React from "react";
import "./Project.scss";
import project1 from "../../images/project1.jpg";
import project2 from "../../images/project2.jpg";
import project3 from "../../images/project3.jpg";
const Project = () => {
  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="projectsimages">
        <div className="card-sites">
          {" "}
          <img src={project1} alt=""></img>
          <h1>PROJECT 1</h1>
        </div>
        <div className="card-sites">
          {" "}
          <img src={project2} alt=""></img>
          <h1>PROJECT 2</h1>
        </div>
        <div className="card-sites">
          {" "}
          <img src={project3} alt=""></img>
          <h1>PROJECT 3</h1> 
        </div>
      </div>
    </div>
  );
};

export default Project;

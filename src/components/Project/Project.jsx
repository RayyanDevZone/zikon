import React from "react";
import "./Project.scss";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaBuildingCircleCheck } from "react-icons/fa6";
const Project = () => {
  return (
    <div className="outer-body">
      <div className="project">
      <div className="h1"><h1>Projects</h1><IoArrowForwardCircleOutline /></div>
      <div className="projectsimages">
        <div className="card-sites">
          {" "}
          <img src="https://images.pexels.com/photos/14466335/pexels-photo-14466335.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""></img>
          <h1>PROJECT 1 <FaBuildingCircleCheck /></h1>
        </div>
        <div className="card-sites">
          {" "}
          <img src="https://images.pexels.com/photos/28950191/pexels-photo-28950191/free-photo-of-construction-worker-on-reinforced-steel-grid.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
          <h1>PROJECT 2<FaBuildingCircleCheck /></h1>
        </div>
        <div className="card-sites">
          {" "}
          <img src="https://images.pexels.com/photos/11176811/pexels-photo-11176811.jpeg?auto=compress&cs=tinysrgb&w=400" alt=""></img>
          <h1>PROJECT 3<FaBuildingCircleCheck /></h1> 
        </div> 
      </div>
    </div>
    </div>
  );  
}; 

export default Project;

import React from "react";
import "./Project.css";
import image from '../../assets/img/bg.png';
import Card from "../Card/Card.jsx";

import projectone from '../../assets/img/jordan.jpeg';

function Project() {
  return (
    <div className="project">
       <div className="header-project">
        <h2>My recent <span>works</span></h2>
        <div className="bottons">
            <button className="All">All</button>
            <button className="Sites">Sites</button>
            <button className="UI/UX">UI/UX</button>
        </div>
       </div>

       <div className="cards-project">

        <Card image={projectone}
         title="Jordan Shoes"
         
         description="Landing page for Jordan Shoes, built with HTML, CSS, and JavaScript."
          
         
         />
        <Card image={projectone} title="Project 2" description="Description of project 2"/>
        <Card image={projectone} title="Project 3" description="Description of project 3"/>

       </div>
       
    </div>
  );
}

export default Project;
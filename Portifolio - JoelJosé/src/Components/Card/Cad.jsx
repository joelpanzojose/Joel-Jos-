import React from "react";
import "./Card.css";

function Card(props) {
    return(
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>

            <div className="descriptionBox">
                 <p className="desc">{props.description}</p>
            </div>
           
            <div className="buttons">
                <button className="btn-view">View</button>
                <button className="btn-source">Source</button>
            </div>
        </div>
    );
}
export default Card;
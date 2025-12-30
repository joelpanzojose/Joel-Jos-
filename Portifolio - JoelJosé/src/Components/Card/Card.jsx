import React from "react";
import "./Card.css";

function Card(props) {
    return(
        <div className="card">
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div className="buttons">
                <a href="https://joelpanzojose.github.io/Jordan-Shoes/"><button className="btn-view">View</button></a>
            </div>
        </div>
    );
}
export default Card;

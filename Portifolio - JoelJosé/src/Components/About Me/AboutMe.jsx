import React from "react";
import "./AboutMe.css";
import me from "../../assets/img/me.png";
import setaenrolada from "../../assets/img/seta-enrolada.png";
import music from "../../assets/img/music.png";
import luz from "../../assets/img/luz.png";


function AboutMe() {
    return (
        <div className="Container">
            <img className="setaenrolada" src={setaenrolada} alt="" />
            <img className="music" src={music} alt="" />
            <img className="luz" src={luz} alt="" />

            <div className="info">
                <h2>About <span>me</span></h2>
                <p>
                    My name is <strong>Joel José</strong>, I am a <strong>Front-End</strong> and UI Designer (I create designs for websites, apps, and more), currently working as a freelancer in this field.
                </p>

                <p>
                    I also have knowledge in <strong>back-End</strong>Back-End development, but my passion is creating and developing interfaces; it is a world I have been exploring since I was <strong>16 </strong>years old.
                </p>

                <p>
                    Have you ever wondered how the beautiful websites or applications we see out there are created? I used to ask myself the same question all the time. To me, it was incredible how it was possible to have such beautiful apps and websites, with animations and everything. That curiosity led me into the world of <strong>technology</strong> and Front-End development, and to this day I remain fascinated by what technology is capable of <strong>creating</strong>. Today, I’m here doing what I’ve always wanted to do.
                </p>

            </div>

            <div className="me">
                <img className="me" src={me} alt="Foto Joel Jose" />
            </div>

        </div>
    );
}
export default AboutMe;
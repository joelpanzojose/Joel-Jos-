import React from "react";
import "./Hero.css";
import Boxseta from "../../assets/img/Box-seta.png";
import imagemHero from "../../assets/img/imagem_hero.png";

function Hero() {
    return (
        <section className="hero flex column">

            <div className="box-left flex">
                <div className="seta">
                    <img className="seta" src={Boxseta} alt="Seta" />
                </div>

                <div className="info">
                    <div className="boxinfo">
                        <div className="text">
                            <h1>Joel Jose</h1>
                            <span>Front End & Ui/Ux</span>
                        </div>

                        <div className="buttons">
                            <button className="btn-1">Hire Me</button>
                            <button className="btn-2">Download CV</button>
                        </div>
    
                    </div>
                </div>

            </div>


            <div className="imagemhero">
                <img className="imagemhero" src={imagemHero} alt="Imagem Hero" />
            </div>
        </section>
    );
}
export default Hero;
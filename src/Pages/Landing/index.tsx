import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.svg";
import LandingImg from "../../Assets/landing.svg";
import api from "../../Services/api";

import StudyIcon from "../../Assets/icons/study.svg";
import GiveClassesIcon from "../../Assets/icons/give-classes.svg";
import PurpleHeartIcon from "../../Assets/icons/purple-heart.svg";

import "./styles.css";

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Logo Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img
          src={LandingImg}
          alt="Plataforma de Estudo"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/estudar" className="study">
            <img src={StudyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/dar-aulas" className="give-classes">
            <img src={GiveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>{" "}
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{" "}
          {process.env.URL_BACKEND}
          <img src={PurpleHeartIcon} alt="S2" />
        </span>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.svg";
import BackIcon from "../../Assets/icons/back.svg";

import "./styles.css";

interface Props {
  title: string;
}

const Header: React.FC<Props> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={BackIcon} alt="Voltar" />
        </Link>
        <img src={Logo} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
};

export default Header;

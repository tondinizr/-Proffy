import React, { ReactChildren, ReactChild } from "react";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo.svg";
import BackIcon from "../../Assets/icons/back.svg";

import "./styles.css";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function Header(props: Props) {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={BackIcon} alt="Voltar" />
        </Link>
        <img src={Logo} alt="Proffy" />
      </div>
      <div className="header-content">{props.children}</div>
    </header>
  );
}

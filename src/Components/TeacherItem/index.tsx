import React from "react";

import WhatsIcon from "../../Assets/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/48892060?s=460&u=ce1d527aa163cbe0e163b1401e7db3b1fe19d086&v=4"
          alt="Welinton Diniz"
        />
        <div>
          <strong>Welinton Diniz</strong>
          <span>Informática</span>
        </div>
      </header>
      <p>
        My name is Welinton Diniz, from Brazil, I am currently unemployed, but
        in my spare time I help to{" "}
        <a href="https://www.instagram.com/projetoemanuel1">
          ONG Projeto Emanuel
        </a>
        . I am in a serious relationship with JavaScript, especially React and
        React Native!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong> R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={WhatsIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;

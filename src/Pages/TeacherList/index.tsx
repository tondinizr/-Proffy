import React from "react";

import Header from "../../Components/Header";
import TeacherItem from "../../Components/TeacherItem";

import "./styles.css";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os Proffy's disponíveis!">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">
              Máteria
              <input id="subject" type="text" />
            </label>
          </div>
          <div className="input-block">
            <label htmlFor="week-day">
              Dia da Semana
              <input id="week-day" type="text" />
            </label>
          </div>
          <div className="input-block">
            <label htmlFor="hour">
              Hora
              <input id="hour" type="text" />
            </label>
          </div>
        </form>
      </Header>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

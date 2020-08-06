import React, { FormEvent, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import Header from "../../Components/Header";
import TeacherItem, {
  Teacher,
  TeacherNone,
} from "../../Components/TeacherItem";
import Input from "../../Components/Input";
import Select from "../../Components/Select";
import Toast, { Warning } from "../../Components/Toastify";
import api from "../../Services/api";

import "./styles.css";

export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setweek_day] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    api.get("all-classes").then((response) => {
      setTeachers(response.data);
    });
  }, []);

  async function searchTeacher(e: FormEvent) {
    e.preventDefault();
    if (subject !== "" && week_day !== "" && time !== "") {
      const response = await api.get("classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });

      setTeachers(response.data);
    }
    if (time === "") Warning("❌ Selecione o horário desejado!");
    if (week_day === "") Warning("❌ Selecione o dia da semana desejado!");
    if (subject === "") Warning("❌ Selecione a matéria desejada!");
    return null;
  }

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os Proffy's disponíveis!">
        <form id="search-teachers" onSubmit={searchTeacher}>
          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciência ", label: "Ciência " },
              { value: "EducaçãoFísica", label: "Educação Física" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Informática", label: "Informática" },
              { value: "Libras", label: "Libras" },
              { value: "Espanhol", label: "Línguas Estrangeiras - Espanhol" },

              { value: "Inglês", label: "Línguas Estrangeiras - Inglês" },
              {
                value: "OutrasLínguas",
                label: "Línguas estrangeiras - Outras Línguas",
              },
              { value: "Português", label: "Língua Portuguesa" },
              { value: "Matemática", label: "Matemática" },
              { value: "Química", label: "Química" },
              { value: "Sociologia", label: "Sociologia" },
            ]}
          />
          <Select
            label="Dia da semana"
            name="week-day"
            value={week_day}
            onChange={(e) => {
              setweek_day(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            label="Horário"
            name="time"
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit">
            <FaSearch /> Buscar
          </button>
        </form>
      </Header>

      <main>
        {teachers.length !== 0 ? (
          teachers.map((teacher: Teacher) => {
            return <TeacherItem teacher={teacher} key={teacher.id} />;
          })
        ) : (
          <TeacherNone />
        )}
      </main>
      <Toast />
    </div>
  );
}

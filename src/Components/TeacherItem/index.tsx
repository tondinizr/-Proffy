import React from "react";
import { useHistory } from "react-router-dom";
import { FaUserTimes } from "react-icons/fa";

import WhatsIcon from "../../Assets/icons/whatsapp.svg";
import "./styles.css";
import api from "../../Services/api";

export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  avatar: string;
  bio: string;
  name: string;
  whatsapp: string;
}

interface teacherItemProps {
  teacher: Teacher;
}

function replace(text: string) {
  return text.replace(/([^\d])+/gim, "");
}

const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {
  function createConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }
  return (
    <article className="teacher-item" key={teacher.id}>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong> R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={createConnection}
          href={`https://wa.me/${replace(teacher.whatsapp)}`}
        >
          <img src={WhatsIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export const TeacherNone = () => {
  const history = useHistory();

  return (
    <article className="teacher-item">
      <header>
        <FaUserTimes />
        <div>
          <strong>Professor não encontrado</strong>
          <span>Matéria não localizada</span>
        </div>
      </header>
      <p>Selecione outras matérias, dias e horários</p>

      <footer>
        <p id="none">
          Selecione outra <strong>matéria</strong>,{" "}
          <strong>dia da semana</strong> e/ou <strong>horário</strong> para
          listar os professores
        </p>
      </footer>
    </article>
  );
};

export default TeacherItem;

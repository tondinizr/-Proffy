import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../Components/Header";
import Input from "../../Components/Input";
import TextArea from "../../Components/TextArea";
import Select from "../../Components/Select";
import api from "../../Services/api";
import Toast, { Error, Sucess, Warning } from "../../Components/Toastify";

import warningIcon from "../../Assets/icons/warning.svg";

import "./styles.css";

export default function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const initialvalue = {
    week_day: 1,
    start: "",
    end: "",
  };

  const [scheduleItems, setScheduleItems] = useState([initialvalue]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, initialvalue]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    let count = 0;
    scheduleItems.map((item, index) => {
      if (item.start === "") {
        Warning(`❌ Informe o horário do início da ${index + 1}ª aula!`);
        count++;
        return null;
      }
      if (item.end === "") {
        Warning(`❌ Informe o horário do fim da ${index + 1}ª aula!`);
        count++;
        return null;
      }
      if (item.start > item.end) {
        Warning(`❌ O horário do fim não pode ser menor que o inicial`);
        count++;
        return null;
      }
      return null;
    });
    if (cost === "") {
      Warning("❌ Informe o custo da sua Hora/Aula!");
      count++;
    }
    if (subject === "") {
      Warning("❌ Selecione a matéria!");
      count++;
    }
    if (bio === "") {
      Warning("❌ Digite a Bio para seu perfil!");
      count++;
    }
    if (bio.length < 35 && bio !== "") {
      Warning("❌ Digite uma Bio completa para seu perfil!");
      count++;
    }
    if (whatsApp === "") {
      Warning("❌ Digite o número do seu WhatsApp!");
      count++;
    }
    if (avatar === "") {
      Warning("❌ Digite a URL da sua foto de Avatar!");
      count++;
    }
    if (name === "") {
      Warning("❌ Digite Seu nome!");
      count++;
    }
    if (count > 0) return;

    api
      .post("classes", {
        name,
        avatar,
        whatsapp: whatsApp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        Sucess("✅ Cadastro realizado com sucesso!", history.push("/"));
      })
      .catch(() => {
        Error("⚠️ Ocorreu um erro no cadastro!");
      });
  }

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome completo"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              label="WhatsApp"
              name="whatsapp"
              value={whatsApp}
              onChange={(e) => {
                setWhatsApp(e.target.value);
              }}
            />
            <TextArea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label="Matéria"
              name="subject"
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
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
            <Input
              label="Custo da sua hora/aula"
              name="cost"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    label="Dia da semana"
                    name="week_day"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
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
                    label="Das"
                    name="start"
                    type="time"
                    value={scheduleItem.start}
                    onChange={(e) =>
                      setScheduleItemValue(index, "start", e.target.value)
                    }
                  />
                  <Input
                    label="Até"
                    name="end"
                    type="time"
                    value={scheduleItem.end}
                    onChange={(e) =>
                      setScheduleItemValue(index, "end", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante!
              <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
      <Toast />
    </div>
  );
}

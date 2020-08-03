import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "../Pages/Landing";
import TeacherForm from "../Pages/TeacherForm";
import TeacherList from "../Pages/TeacherList";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/dar-aulas" component={TeacherForm} />
      <Route path="/estudar" component={TeacherList} />
    </BrowserRouter>
  );
}

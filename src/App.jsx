import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StudentApp1 from "react_app1/StudentApp1";

import {BrowserRouter , Route,  Routes,  Switch } from "react-router-dom";


const App = () =>
{
  return(
    <StudentApp1/>
  // <BrowserRouter>
  //   <Routes>
  //   <Route exact path ="/student2" element={<StudentApp2 />}>
  //   </Route>
  //   <Route exact path="/student3" element={<StudentApp3 />}>
  //   </Route>
  //   </Routes>
  // </BrowserRouter>
  )
  
};

ReactDOM.render(<App />, document.getElementById("app"));



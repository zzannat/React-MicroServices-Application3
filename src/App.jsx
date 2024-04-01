import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StudentApp2 from "./StudentApp2.jsx";
import StudentApp3 from "./StudentApp3.jsx";
import {BrowserRouter , Route,  Routes,  Switch } from "react-router-dom";


const App = () =>
{
  return(
    <StudentApp2/>
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



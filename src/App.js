import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Dashboard from "./containers/Dashboard";
import ProjectsScreen from "./containers/ProjectsScreen";
import Nav from "./components/NavBar";
import "./styles.css";

function App() {
  return (
    <div className="container-fluid backGroundImg">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Projects" element={<ProjectsScreen />} />
      </Routes>
    </div>
  );
}

export default App;

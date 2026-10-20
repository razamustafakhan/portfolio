import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import ProjectDetail from "./pages/projectdetail/ProjectDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-detail/:id" element={<ProjectDetail />} />

        {/* <Route path="/" element={<Resume/>} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </>
  );
};

export default App;

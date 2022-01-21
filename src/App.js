import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask/NewTask";
import EditTask from "./components/EditTask/EditTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/newtask" element={<NewTask />} />
        <Route path="/edittask/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

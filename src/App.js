import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Tasks from "./Components/Tasks";
import NewTask from "./Components/NewTask/NewTask";
import EditTask from "./Components/EditTask/EditTask";

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

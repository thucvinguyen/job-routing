import { Route, Routes } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import React from "react";
import LogInForm from "./components/LogInForm";
import Bar from "./components/Bar";
import UserHomePage from "./pages/UserHomePage";

function App() {
  return (
    <div className="App">
      <Bar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<DetailPage />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/vinguyen" element={<UserHomePage />} />
      </Routes>
    </div>
  );
}

export default App;

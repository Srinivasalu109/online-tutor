import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./routes/Signup";
import Home from "./routes/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/signin" element={Signin} />
      <Route path="/signup" element={Signup} />
      <Route />
    </Routes>
  );
}

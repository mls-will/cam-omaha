import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ClientLinksPage,
} from "./pages/index";

function App() {
  return (
    <Routes>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/client-links" component={ClientLinksPage} />
    </Routes>
  );
}

export default App;

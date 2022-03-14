import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css';
import { HomePage, AboutPage } from './pages/index'

function App() {
  return (
    <Routes>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Routes>
  );
}

export default App;

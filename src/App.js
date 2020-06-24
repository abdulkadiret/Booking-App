import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes />
    </Router>
  );
}

export default App;

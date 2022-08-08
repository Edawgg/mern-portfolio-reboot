import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component.js";
import AboutMe from "./components/about-me.component.js";
import ProjectList from "./components/projects.component.js";
import ContactInfo from "./components/contact-info.component.js";


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/projects" component={ProjectList} />
      <Route path="/contact-info" component={ContactInfo} />
    </Router>
  );
}

export default App;

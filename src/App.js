import React  from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Nav from "./Components/Molecules/Nav/Nav";
import Routes from "./Components/Routes";

import "./sass/style.scss";



export default function App() {
  return (
<Router>
   <Nav/>
   <Routes/>
</Router>

  );
}


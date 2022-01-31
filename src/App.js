import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/index.jsx";
import MainSection from "./components/Main/MainSection.jsx";
import Cards from "./components/Cards/index.jsx";
import Consalting from "./components/Consalting/index.jsx";
import UsefulInformation from "./components/UsefulInformation/index.jsx";
function App() {
  return (
    <div className="App">
       <Header />
       <Cards />
      <MainSection />
      <Consalting />
      <UsefulInformation />
    </div>
  );
}

export default App;

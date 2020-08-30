import React from "react";
import "./App.css";
import axios from "axios";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!!!!!</h1>
        <Loader type="Puff" color="#ffffff" height={100} width={100} />
      </header>
    </div>
  );
}
export default App;

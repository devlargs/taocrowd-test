import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Search" />
      <section className="articles">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      <span class="loader"></span>
    </div>
  );
}

export default App;

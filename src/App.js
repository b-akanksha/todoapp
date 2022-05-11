import React, { useState } from "react";
import "./App.css";
import CreateArea from "./components/Layout/CreateArea";
import Header from "./components/Layout/Header";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevnotes) => [...prevnotes, newNote]);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  return (
    <div className="app">
      <Header />
      <CreateArea onAdd={addNote} />
      <p>Initial setup</p>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import CreateArea from "./components/Layout/CreateArea";
import Header from "./components/Layout/Header";
import Note from "./components/Layout/Note";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("notes");
    setNotes(JSON.parse(items));
  }, []);

  const addNote = (newNote) => {
    const tempNotes = [...notes, newNote];
    setNotes(tempNotes);
    localStorage.setItem("notes", JSON.stringify(tempNotes));
  };

  const deleteNote = (id) => {
    const tempNotes = notes.filter((item, index) => index !== id);
    setNotes(tempNotes);
    localStorage.setItem("notes", JSON.stringify(tempNotes));
  };

  return (
    <div className="app">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes &&
        notes.length > 0 &&
        notes.map((note, index) => (
          <Note key={index} id={index} item={note} onDelete={deleteNote} />
        ))}
    </div>
  );
}

export default App;

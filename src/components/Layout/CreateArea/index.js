import { Fab } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./createArea.css";

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const submitNote = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          rows={3}
          placeholder="Take a note..."
          onChange={handleChange}
          value={note.content}
        />
        <Fab
          onClick={submitNote}
          className="create-note__button"
          disabled={
            note.title.trim().length === 0 || note.content.trim().length === 0
          }
        >
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default CreateArea;

import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { IconButton } from "@mui/material";
import "./note.css";

const Note = ({ id, item, onDelete }) => {
  const handleDelete = () => onDelete(id);
  return (
    <div className="note">
      <h1>{item.title}</h1>
      <p>{item.content}</p>
      <IconButton className="note__button" onClick={handleDelete}>
        <DeleteForeverOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default Note;

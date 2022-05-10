import React from "react";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";
import "./header.css";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <NoteAddOutlinedIcon className="header__logo" />
      <Typography variant="h5" gutterBottom className="header__title">
        ToDo App
      </Typography>
    </div>
  );
};

export default Header;

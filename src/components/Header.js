import React from "react";
import "./Header.css";
import ChecklistIcon from "@mui/icons-material/Checklist";

export const Header = () => {
  return (
    <header
      style={{
        borderRadius: "5px",
        padding: "10px",
        color: "white",
      }}
    >
      <h2>
        <ChecklistIcon fontSize="small" sx={{ color: "#f0ef9c" }} /> Task Mate
      </h2>
    </header>
  );
};

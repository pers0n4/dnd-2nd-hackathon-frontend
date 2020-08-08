import React from "react";
import { Fab as RFab } from "@material/react-fab";
import "@material/react-fab/dist/fab.css";
import { Link } from "react-router-dom";
import bg from "./bg.png";

const Fab = () => {
  return (
    <Link to="/write">
      <RFab
        style={{
          position: "absolute",
          zIndex: 100,
          bottom: "2rem",
          right: "2rem",
        }}
        icon={<img src={bg} style={{ width: "100%", height: "100%" }} />}
      />
    </Link>
  );
};

export default Fab;

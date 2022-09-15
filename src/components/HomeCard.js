import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Slide from "@mui/material/Slide";
import { Paper } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import Portfolio from "../components/Portfolio";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div style={{ color: "black" }}>
        Hi, I am Smeea, I am a full stack developer
      </div>
      <Button variant="contained" onClick={handleClickOpen}>
        click here to see my projects
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Home
            </Button>
          </Toolbar>
        </AppBar>
        <Portfolio />
      </Dialog>
    </div>
  );
}

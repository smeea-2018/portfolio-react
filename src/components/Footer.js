import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Paper from "@mui/material/Paper";

export default function Footer() {
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="LinkedIn"
          href="https://www.linkedin.com/in/smeea-arshad-9a2986246/"
          icon={<LinkedInIcon />}
        />
        <BottomNavigationAction
          label="Github"
          href="https://github.com/smeea-2018"
          icon={<GitHubIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

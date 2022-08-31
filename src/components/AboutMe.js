import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
export const AboutMe = () => {
  return (
    <div>
      <Paper
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          p: 3,
          m: 8,
        }}
      >
        <h1>About Me</h1>

        <Stack spacing={2}>
          <item>
            <Avatar sx={{ bgcolor: grey, width: 80, height: 80 }}>SA</Avatar>
          </item>
          <item>
            <hr sx={{ m: 2 }}></hr>
          </item>
          <item>
            <p sx={{ m: 3, P: 2 }}>
              Full stack web developer, attended Birmingham University boot
              camp, developed new skills in javaScript, CSS,React
              ,MySQL/MongoDB. Focused on developing mobile-first web
              applications involving front and backend.
            </p>
          </item>
        </Stack>
      </Paper>
    </div>
  );
};

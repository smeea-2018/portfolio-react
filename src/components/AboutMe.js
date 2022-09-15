import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { grey } from "@mui/material/colors";
export const AboutMe = () => {
  return (
    <div
      id="about-me"
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <Paper
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80ch" },
          m: 8,
        }}
      >
        <h1 style={{ textAlign: "center" }}>About Me</h1>

        <Stack spacing={2}>
          <item>
            <Avatar sx={{ bgcolor: grey, width: 80, height: 80 }}>SA</Avatar>
          </item>
          <item>
            <hr sx={{ m: 2 }}></hr>
            <br></br>
          </item>
          <item>
            <p sx={{ m: 3, P: 2 }}>
              Full stack web developer,focused on developing mobile-first web
              applications involving front and backend.I can work with MERN
              stack as well as GraphQl and MYSQL.
            </p>
          </item>
        </Stack>
      </Paper>
    </div>
  );
};

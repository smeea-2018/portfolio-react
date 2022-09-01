import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
export const Resume = () => {
  return (
    <div id="resume">
      <Paper
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20em", height: "30em" },
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          p: 3,
          m: 8,
        }}
      >
        <h1>Resume</h1>

        <Stack spacing={2}>
          <item>
            Skills:HTML, CSS, javaScript, JQuery, Node.Js, Express, MongoDB
          </item>
          <item>
            To download CV click
            <a href="Smeea Arshad .pdf" download={"smeea Arshad.pdf"}>
              here
            </a>
          </item>
        </Stack>
      </Paper>
    </div>
  );
};

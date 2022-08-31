import ProjectCard from "../components/ProjectCard";
import Paper from "@mui/material/Paper";
function project() {
  return (
    <div>
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
        <h1>projects</h1>
        <ProjectCard />
      </Paper>
    </div>
  );
}

export default project;

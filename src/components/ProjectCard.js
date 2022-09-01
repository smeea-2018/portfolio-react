import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { display } from "@mui/system";
import Box, { BoxProps } from "@mui/material/Box";

// import dayplannerimg from "../images/dayplannerscreenshot.JPG";

const project = [
  {
    title: "Event Planning",
    description:
      " This app creates an event card detailing host, venue, food served and music played.",
    imageUrl: "eventplanningcard.JPG",
    githubLink: "https://github.com/smeea-2018",
  },
  {
    title: "Eco Bike Hire",
    description:
      "Eco-bike-hire enables customer to hire a bike by following simple steps: search a bike, login and book bike.",
    imageUrl: "ecobikehire.JPG",

    githubLink: "https://github.com/smeea-2018",
  },
  {
    title: "Password Generator",
    description:
      " The responsive web app generates random password based on the criteria specified.",
    imageUrl: "passwordgenerator.JPG",
    githubLink: "https://github.com/smeea-2018",
  },
  {
    title: "Day Planner",
    description: "The responsive app plans activites for a day.",
    imageUrl: "dayplannerscreenshot.JPG",
    githubLink: "https://github.com/smeea-2018",
  },
  {
    title: "Weather Dashboard",
    description: "The app forecasts the weather.",
    imageUrl: "weatherdashbaordlondondata.JPG",
    githubLink: "https://github.com/smeea-2018",
  },
];
function item() {
  return (
    <Box
      sx={{
        p: 1,
        ml: 3,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "10px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    />
  );
}

export default function MediaCard() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          p: 3,
          m: 5,
        }}
      >
        {project.map((x) => (
          <item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="140" src={x.imageUrl} alt="" />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {x.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {x.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="{x.githubLink">
                  Github
                </Button>
                <Button size="small">{x.title}</Button>
              </CardActions>
            </Card>
          </item>
        ))}
      </Box>
    </div>
  );
}

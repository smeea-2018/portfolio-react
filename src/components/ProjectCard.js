import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { display } from "@mui/system";
import Box from "@mui/material/Box";

// import dayplannerimg from "../images/dayplannerscreenshot.JPG";

const project = [
  {
    title: "Event Planning",
    description:
      " This app creates an event card detailing host, venue, food served and music played.",
    imageUrl: "eventplanningcard.JPG",
    githubLink: "https://github.com/smeea-2018/event-planning",
    deployedLink: "https://am0031.github.io/event-planning/",
  },
  {
    title: "Eco Bike Hire",
    description:
      "Eco-bike-hire enables customer to hire a bike by following simple steps: search a bike, login and book bike.",
    imageUrl: "ecobikehire.JPG",

    githubLink: "https://github.com/smeea-2018/eco-bike-hire",
    deployedLink: "https://blooming-meadow-71288.herokuapp.com/",
  },
  {
    title: "Password Generator",
    description:
      " The responsive web app generates random password based on the criteria specified.",
    imageUrl: "passwordgenerator.JPG",
    githubLink: "https://github.com/smeea-2018/password-generator/tree/dev",
    deployedLink: "https://smeea-2018.github.io/password-generator/",
  },
  {
    title: "Day Planner",
    description: "The responsive app plans activites for a day.",
    imageUrl: "dayplannerscreenshot.JPG",
    githubLink: "https://github.com/smeea-2018/dayplanner/tree/dev",
    deployedLink: "https://smeea-2018.github.io/dayplanner/",
  },
  {
    title: "Weather Dashboard",
    description: "The app forecasts the weather.",
    imageUrl: "weatherdashboard.JPG",
    githubLink: "https://github.com/smeea-2018",
    deployedLink: "https://smeea-2018.github.io/weather-dashboard/",
  },
];

export default function MediaCard() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          m: "2",
        }}
      >
        {project.map((x) => (
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="140"
              src={`${process.env.PUBLIC_URL}/images/${x.imageUrl}`}
              alt=""
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {x.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {x.description}
              </Typography>{" "}
            </CardContent>
            <CardActions>
              <Button size="small" href={x.githubLink}>
                Github
              </Button>
              <Button size="small" href={x.deployedLink}>
                Deployed site
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
}

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
          m: 7,
        }}
      >
        {project.map((x) => (
          <Card sx={{ maxWidth: 345 }}>
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
              <Button size="small" href="{x.githubLink}">
                Github
              </Button>
              <Button size="small">Deployed site</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
}

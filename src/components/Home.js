import * as React from "react";
import { Box } from "@mui/system";
import HomeCard from "../components/HomeCard";

export default function Home() {
  return (
    <div
    // style={{ backgroundImage: `${process.env.PUBLIC_URL}/images/gitPic.jpg` }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          minHeight: "100vh",
          backgroundColor: "gray",
          opacity: "0.8",
          backgroundImage:
            "url('https://www.istockphoto.com/photo/bright-lines-and-spheres-gm1143850412-307332918') ",
        }}
      >
        <HomeCard />
      </Box>
    </div>
  );
}

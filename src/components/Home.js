import * as React from "react";
import { Box } from "@mui/system";
import HomeCard from "../components/HomeCard";

export default function Home() {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh", backgroundColor: "gray", opacity: "0.8" }}
      >
        <HomeCard />
      </Box>
    </div>
  );
}

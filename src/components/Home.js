import * as React from "react";
import { Box } from "@mui/system";
import HomeCard from "../components/HomeCard";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <Carousel>
      <Carousel.Item style={{}}>
        <img
          className="d-block w-100"
          src={`${process.env.PUBLIC_URL}/images/bg.jpg`}
          alt="First slide"
          style={{ height: 600, opacity: 0.4 }}
        />
        <div
          style={{
            position: "absolute",
            right: "40%",
            bottom: "50%",
            left: "40%",
          }}
        >
          <Carousel.Caption
            style={{ opacity: "1", fontWeight: "bold", color: "black" }}
          >
            <h3>Hi, I am Smeea</h3>
            <p>Full Stack Developer</p>
            <div sx={{ m: 4 }}>
              <Button
                style={{ m: 3 }}
                variant="primary"
                size="medium"
                href="#projects"
              >
                Portfolio
              </Button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

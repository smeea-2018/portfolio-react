import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import { Resume } from "./components/Resume";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div
      style={{
        backgroundColor: "000814",
      }}
    >
      <header>
        <NavBar
          navItems={[
            {
              label: "About Me",
              href: "#about-me",
            },
            {
              label: "Portfolio",
              href: "#projects",
            },
            {
              label: "Contact Me",
              href: "#contact-me",
            },
            { label: "Resume", href: "#resume" },
          ]}
        />
      </header>
      <Home />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;

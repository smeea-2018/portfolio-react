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
function App() {
  return (
    <div
      style={{
        backgroundColor: "000814",
      }}
    >
      {/*<header>
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavBar />
      </header>*/}

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
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;

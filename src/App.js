import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
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
              href: "/aboutme",
            },
            {
              label: "Portfolio",
              href: "/Portfolio",
            },
            {
              label: "Contact Me",
              href: "/contactme",
            },
            { label: "Resume", href: "/resume" },
          ]}
        />
      </header>
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;

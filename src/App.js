import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/Navigation/Navbar";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Articles from "./components/Articles/Articles";
import Journal from "./components/Journal/Journal";
import Project from "./components/projects/Project";
import Stack from "./components/About/Stack";

const App = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#fff" : "#000",
      },
      secondary: {
        main: "#e57373",
      },
      background: {
        default: darkMode ? "#202020" : "#fff",
      },
    },
    typography: {
      fontFamily: "ubuntu",
      fontSize: 18,
    },
  });

  /*function to change the theme*/
  const changeTheme = () => {
    console.log(darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router basename="/gh-budash">
        <div className={classes.container}>
          <Navbar changeTheme={changeTheme} darkMode={darkMode} />
          <div className="mt-5">
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/resume" component={Resume} />
              <Route path="/articles" component={Articles} />
              <Route path="/journal" component={Journal} />
              <Route path="/projects" component={Project} />
              <Route path="/stack" component={Stack} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    width: "70%",
    padding: "5%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    fontSize: "18px",
    fontFamily: "Ubuntu",
  },
  contentBody: {
    marginTop: "2.5rem",
  },
}));

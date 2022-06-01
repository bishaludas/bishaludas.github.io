import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  content: {
    wordSpacing: "2px",
    "& p": {
      marginBottom: "5%",
      [theme.breakpoints.down("xs")]: {
        marginBottom: "10%",
      },
    },
  },
  links: {
    color: "inherit",
    "&:hover": {
      color: "#e57373",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <p>
        Hi, I'm Bishal! I'm a full-stack engineer with a passion for building
        beautiful things from scratch. I've been building websites and saas
        services since 2017. I love working with React, Express and Postgress,
        more about them in{" "}
        {
          <Link to="/stack" className={classes.links}>
            Stack
          </Link>
        }{" "}
        section.
      </p>

      <p>
        Right now I'm working at{" "}
        <a
          href="https://wolfmatrix.com/"
          target="_blank"
          className={classes.links}
          rel="noreferrer"
        >
          Wolfmatrix
        </a>
        , as a Sr. Software Engineer where I work on solving challenging
        problems, build cloud architecture and mentor associate developers.
      </p>

      <p>
        I have worked on projects for companies such as Chaudhary Group,
        Mobwizards, Cloudchomp, Vline ,Metro Trains and others. I occasionally
        make myself available for contract work and consultancy. Please dont
        hesitate to contact me.
      </p>
      <p>
        You can reach me at{" "}
        <a href="mailto: me@bishaludash.com.np" className={classes.links}>
          me@bishaludash.com.np
        </a>{" "}
      </p>

      <a
        href="https://www.linkedin.com/in/bishal-udash-04a07215a/"
        target="_blank"
        rel="noreferrer"
        className={`${classes.links} mr-2`}
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://github.com/bishaludash"
        target="_blank"
        rel="noreferrer"
        className={classes.links}
      >
        <GitHubIcon />
      </a>
    </div>
  );
};

export default About;

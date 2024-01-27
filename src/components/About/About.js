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
        Namaste! 🙏 I'm Bishal!, a passionate Full Stack Developer from Nepal.
        With a diverse skill set spanning front-end and back-end technologies, I
        bring creativity and technical expertise to every project I undertake. I
        am commitment to building robust, scalable applications.
        {/* {
          <Link to="/stack" className={classes.links}>
            Stack
          </Link>
        }{" "}
        section. */}
      </p>

      <p>
        Right now, I'm pursuing MSc. Computer Science at{" "}
        <a
          href="https://www.epita.fr/en/"
          target="_blank"
          className={classes.links}
          rel="noreferrer"
        >
          Epita
        </a>
        , where my specialization is Software Engineering. Prior to this, I
        served as a Senior Software Engineer at{" "}
        <a
          href="https://wolfmatrix.com/"
          target="_blank"
          className={classes.links}
          rel="noreferrer"
        >
          Wolfmatrix
        </a>
        , where I tackled intricate challenges, designed cloud architectures,
        and provided mentorship to fellow developers.
      </p>

      <p>
        I have worked on projects for companies such as Chaudhary Group,
        Mobwizards, Cloudchomp, WCL Management Service (Vline, Metro Trains) and
        others. I occasionally make myself available for contract work and
        consultancy. Please dont hesitate to contact me.
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

import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const IssuesDevTeam = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        {/* {article.title} */}Issues with building a stable Dev team
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "1rem" }}
      >
        {/* {new Date(article.created_at).toDateString()} */}
        {new Date(props.createdAt).toDateString()}
        {props.tags.split(",").length > 0
          ? props.tags
              .split(",")
              .map((item, key) => (
                <Chip
                  key={key}
                  size="small"
                  label={item}
                  color="secondary"
                  className={classes.pills}
                />
              ))
          : null}
      </Typography>

      {/* Edited date */}
      {props.createdAt !== props.updatedAt ? (
        <Typography variant="caption" display="block">
          <Chip
            size="small"
            label={`Edited : ${new Date(props.updatedAt).toDateString()}`}
            color="secondary"
            className={classes.pills}
          />
        </Typography>
      ) : null}

      {/*content*/}
      <article>
        <p>
          I have been working on a project for overseas Portuguese company for 5
          months now, during this period 5 developers came and left. I had ups
          and down during this period, had to cover for things more than i had
          signed up for. Finally after 5 month, we have a stable team of 3
          developers and in this article I want to share my experiences.
        </p>
        <p>Lets start with the factors effecting the developers:</p>

        <br />
        <h2>Covid and remote working</h2>
        <p>
          The team was new composed of me and 2 other devs (Devs A and B), due
          to covid we all had to work remotely. We used discord for
          communicating with the foreign team, and tasks were assigned to us via
          chats or PMs. We devs would help each other when we could and I would
          encourage them to ask confusion topics, logic to PT team but besides
          that they were on their own. Since other devs were little
          inexperienced , I talked in their behalf at beginning but I was told
          not to do so as each dev should do it by themselves.
        </p>

        <p>
          After a month, dev (A) got frustrated with his work and he left
          without any pre-notice. He was not getting proper help from PT team ,
          didn't raise his issues to related person. Similarly , dev (B) had
          told the PT team guys , the requested feature was being done , but he
          left in 2 month as soon as he got his paycheck.
        </p>

        <p>
          I learned that remote work is feasible only when the team is already
          stable and has proper work process.
        </p>

        <br />
        <h2>Not hiring the right person for the job</h2>
        <p>
          Hiring a junior backend developer and expecting them to help with all
          aspect of the project is failure on the management part. You want to
          build something complex , you need the right person for the job.
        </p>
        <br />
        <h2>No work process and planning</h2>
        <p>
          At the beginning , there was an initial planning document but as the
          project progressed there is none, most of the requirement are verbal
          ie; <strong>we need this feature do this</strong> lol. Another issue I
          had raised from the beginning is make tickets containing all the
          details and requirements for task before assigning.
        </p>

        <br />
        <h2>Low salary</h2>
        <p>
          Developers tend to leave their job when another company offers
          reasonable or better salary.
        </p>
      </article>
    </Fragment>
  );
};

export default IssuesDevTeam;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import GitMeSomeKnowledge1 from "./images/GitMeSomeKnowledge1.png";

const GitMeSomeKnowledge = () => {
  let tags = ["git"];
  const classes = useStyles();

  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        {/* {article.title} */}Git me some knowledge
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "2rem" }}
      >
        {/* {new Date(article.created_at).toDateString()} */}
        {new Date().toDateString()}
        {tags.length > 0
          ? tags.map((item, key) => (
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

      {/*content*/}
      <article>
        <p>
          Due to covid-19, I had been working from home (wfh) for almost a year
          and using my personal laptop for office works. At the beginning of wfh
          , I remembering setting up my office email for setting up git config
          globally.
        </p>

        <pre class="ql-syntax" spellcheck="false">
          git config --global user.name "Your global username" <br />
          git config --global user.email "office email"
        </pre>
        <p>
          <br />
        </p>
        <p>
          Things were working okay, and after some months I began working on
          some side projects, made some commits and pushed it to GitHub. Then i
          went to check into GitHub on repo status and noticed that my timeline
          was not reflecting any commits.
        </p>
        <p>
          <img src={GitMeSomeKnowledge1} alt="Github" />
        </p>
        <p></p>
        <p>
          <br />
        </p>
        <p>
          From November to early January, the commits timeline was empty. I
          searched some posts over stack overflow &amp; google and found out the
          cause for this was my git's globally configured email was different
          than that of GitHub.
        </p>
        <p>
          <br />
        </p>
        <p>
          Found out Git offers other ways on how you can set you username and
          email.
        </p>
        <ol>
          <li>
            project - The data is stored directly in the corresponding
            project(repository) under .git/config.
          </li>
          <li>
            global - for all repositories of the current user. The config file
            can be found in your home directory ~/gitconfig.
          </li>
          <li>
            system - This is a system wide configuration and is available for
            all users and all repositories. You will find it in /etc/gitconfig.
          </li>
        </ol>
        <p>
          <br />
        </p>
        <p>
          In my case, I set my GitHub's email as global config value and used
          work email for work specific configuration.Set the username/email for
          a specific repository
        </p>
        <pre class="ql-syntax" spellcheck="false">
          # change directory to project directory and run command below <br />
          cd &lt;project/directory&gt; <br />
          git config user.name "Your project specific name" <br />
          git config user.email "your@project-specific-email.com"
        </pre>
      </article>
    </Fragment>
  );
};

export default GitMeSomeKnowledge;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

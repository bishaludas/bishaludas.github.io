import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

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
        <Typography variant="body2" component="div" gutterBottom>
          Due to covid-19, I had been working from home (wfh) for almost a year
          and using my personal laptop for office works. At the beginning of wfh
          , I remembering setting up my office email for setting up git config
          globally. git config --global user.name "Your global username" git
          config --global user.email "office email" Things were working okay,
          and after some months I began working on some side projects, made some
          commits and pushed it to GitHub. Then i went to check into GitHub on
          repo status and noticed that my timeline was not reflecting any
          commits. From November to early January, the commits timeline was
          empty. I searched some posts over stack overflow google and found out
          the cause for this was my git's globally configured email was
          different than that of GitHub. Found out Git offers other ways on how
          you can set you username and email. project - The data is stored
          directly in the corresponding project(repository) under .git/config.
          global - for all repositories of the current user. The config file can
          be found in your home directory ~/gitconfig. system - This is a system
          wide configuration and is available for all users and all
          repositories. You will find it in /etc/gitconfig. In my case, I set my
          GitHub's email as global config value and used work email for work
          specific configuration.Set the username/email for a specific
          repository # change directory to project directory and run command
          below cd project/directory git config user.name "Your project specific
          name" git config user.email "your@project-specific-email.com"
        </Typography>
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

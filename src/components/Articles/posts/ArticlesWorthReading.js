import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const ArticlesWorthReading = () => {
  let tags = ["git"];
  const classes = useStyles();

  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        {/* {article.title} */}Articles worth reading
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "1rem" }}
      >
        {/* {new Date(article.created_at).toDateString()} */}
        {new Date("2021-09-02").toDateString()}
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

      <Typography variant="caption" display="block">
        <Chip
          size="small"
          label={`Edited : ${new Date("2021-11-11").toDateString()}`}
          color="secondary"
          className={classes.pills}
        />
      </Typography>

      {/*content*/}
      <article>
        <p>
          Here is a list of articles that I stumbled upon when going through{" "}
          <a
            href="https://news.ycombinator.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Hackernews
          </a>{" "}
          and surfing the web that are worth reading. I found these articles to
          be resourceful and learned from them so I will keep adding new once to
          the list.
        </p>
        <ol>
          <li>
            <a
              href="https://www.fredrikholmqvist.com/posts/why-erlang/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Why Erlang?
            </a>
          </li>
          <li>
            <a
              href="https://hpbn.co/"
              rel="noopener noreferrer"
              target="_blank"
            >
              High Performance Browser Networking
            </a>
          </li>
          <li>
            <a
              href="https://hakibenita.com/sql-for-data-analysis"
              rel="noopener noreferrer"
              target="_blank"
            >
              Practical SQL for Data Analysis
            </a>
          </li>
          <li>
            <a
              href="https://antonfisher.com/posts/2018/03/19/reducing-docker-image-size-of-a-node-js-application/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Reducing Docker image size of a Node.js application
            </a>
          </li>
          <li>
            <a
              href="https://web.eecs.utk.edu/~azh/blog/featurestheywanted.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              When users never use the features they asked for
            </a>
          </li>
          <li>
            <a
              href="https://ic.unicamp.br/~stolfi/bitcoin/2020-12-31-bitcoin-ponzi.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Bitcoin is a Ponzi
            </a>
          </li>
          <li>
            <a
              href="https://www.oreilly.com/library/view/oracle-distributed-systems/1565924320/ch01s04.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Multiple Schema Versus Multiple Databases
            </a>
          </li>
          <li>
            <a
              href="https://hakibenita.com/postgresql-unknown-features#get-the-number-of-updated-and-inserted-rows-in-an-upsert"
              rel="noopener noreferrer"
              target="_blank"
            >
              Lesser Known PostgreSQL Features
            </a>
          </li>
        </ol>
      </article>
    </Fragment>
  );
};

export default ArticlesWorthReading;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

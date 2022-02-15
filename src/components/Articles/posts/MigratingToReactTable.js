import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import MigratingtoreactTable1 from "./images/migratingtoreactTable1.png";
import MigratingtoreactTable2 from "./images/migratingtoreactTable2.png";
import migratingtoreactTable3 from "./images/migratingtoreactTable3.jpeg";

const MigratingToReactTable = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        {/* {article.title} */}Migrating from Material-table to React-table
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
          I had been noticing my simple website was taking 4-10 sec to load
          completely on the first load. Its just one simple static about page
          followed with 4 other links build on top of React, my first reaction
          was <strong>how the hell it so slow ??</strong>. So I opened up the
          Network tab in br/owser console, hard refreshed the website and
          monitored it . below were my findings:
        </p>
        <ul>
          <li>One of my chunk file size 1.7 MB.</li>
          <li>
            No content was being shown until that chunk file was fully loaded.
          </li>
          <li>My build size was ~9.6 MB.</li>
        </ul>

        <img src={MigratingtoreactTable1} alt="BigCo Inc. logo" />

        <p>
          <br />
        </p>
        <p>
          I knew the issue was because of large bundle size, so proceeded with
          analyzing the bundle size for which I used{" "}
          <a
            href="https://create-react-app.dev/docs/analyzing-the-bundle-size/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <strong>source-map-explorer</strong>
          </a>{" "}
          package. The report result helped me determine why the bundle was so
          big.
        </p>
        <p>
          Material-table itself is a big packages and it has dependencies much
          bigger which are left unused 99% of the time. Two package :
        </p>
        <ol>
          <li>jspdf</li>
          <li>react-beutiful-dnd</li>
        </ol>
        <p>
          <a
            href="https://imgur.com/eugJ8AG"
            rel="noopener noreferrer"
            target="_blank"
          >
            Package Analyze Result
          </a>
        </p>
        <p>
          <br />
        </p>
        <p>
          The community has been requesting for Material-table to make these
          packages optional since 2019 but not much has changed.So I searched
          for alternatives and found react table to be dependable and am 100%
          sure i will be using it for future projects. Right now I planning to
          change the code base to use react-table but it will take time and will
          update the post later with full updates,
        </p>
        <p>
          <br />
        </p>
        <p>
          So instead i made a simple optimization to speed up the project. I
          have split the bundles using React's{" "}
          <a
            href="https://web.dev/code-splitting-suspense/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <strong>Lazy</strong>
          </a>
          <strong> </strong>method and it seems to have improved the page
          loading speed down to 3-5 sec.
        </p>

        <img src={MigratingtoreactTable2} alt="BigCo Inc. logo" />

        <p>To be updated after migrating to React-table.</p>
        <p>
          <br />
        </p>
        <p>Update : 30 May 2021</p>
        <p>
          I have updated my code base by replacing material-table with
          react-table, this has significantly reduced my build size. Before it
          was 9.6 MB and now its 4.3 MB and now the website page size has
          reduces from 1.7MB to 493KB and the page loads within 3-5 sec. I am
          really pleased with the optimization result and will keep exploring
          different ways to do so. My next thing on the list is to research and
          implement React-query , a frontend based caching mechanism.
        </p>

        <p>
          <a
            href="https://imgur.com/vCeOr7c"
            rel="noopener noreferrer"
            target="_blank"
          >
            New Package Analysis
          </a>
        </p>
        <img
          src={migratingtoreactTable3}
          alt="BigCo Inc. logo"
          style={{ width: "100%" }}
        />
      </article>
    </Fragment>
  );
};

export default MigratingToReactTable;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { routes } from "./posts/JournalIndex.js";

const ListJournal = () => {
  const classes = useStyles();

  return (
    <Fragment>
      {/*Article start*/}
      {routes.map((item, key) => (
        <div className={classes.article} key={key}>
          <Link to={`/journal/${item.slug_title}`} className={classes.links}>
            <Typography variant="h5" color="primary">
              {item.title}
            </Typography>
          </Link>
          <div className={classes.articleDate}>
            {new Date(item.created_at).toDateString()}
          </div>
        </div>
      ))}

      {/*Article End*/}
    </Fragment>
  );
};

export default ListJournal;

const useStyles = makeStyles({
  article: {
    marginBottom: "1rem",
  },
  articleDate: {
    fontSize: "15px",
    fontWeight: "600",
    color: "#676767",
  },
  links: {
    textDecoration: "none",
    "& h5:hover": {
      color: "#e57373",
    },
    "& p:hover": {
      color: "#e57373",
    },
  },
  chipStyle: {
    fontSize: "15px",
    fontWeight: "normal",
    "& :hover": {
      color: "#000",
      cursor: "pointer",
    },
  },
});

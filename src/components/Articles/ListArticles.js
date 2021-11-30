import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Chip from "@material-ui/core/Chip";

import { routes } from "./posts/PostIndex";

const ListArticles = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const showTags = (tags) => {
    if (!tags || tags === null) {
      return null;
    }

    return tags
      .split(",")
      .map((item, key) => (
        <Chip
          key={key}
          className={`${classes.chipStyle} ml-1`}
          label={item.trim()}
          size="small"
        />
      ));
  };

  if (loading) {
    return (
      <center>
        <CircularProgress className="mt-5" />
      </center>
    );
  }

  return (
    <Fragment>
      {/*Article start*/}
      {routes.map((item, key) => (
        <div className={classes.article} key={key}>
          <div className={classes.articleDate}>
            {new Date(item.created_at).toDateString()}
            <span className="ml-3">{showTags(item.tags)}</span>
          </div>

          <Link to={`/articles/${item.slug_title}`} className={classes.links}>
            <Typography variant="h5" color="primary">
              {item.title}
            </Typography>
          </Link>

          <Typography variant="body2" gutterBottom>
            {item.summary}
          </Typography>

          <Link to={`/articles/${item.slug_title}`} className={classes.links}>
            <Typography gutterBottom color="primary">
              Read this article
              <ArrowRightAltIcon
                variant="overline"
                style={{ marginBottom: "-10px", marginLeft: "10px" }}
              />
            </Typography>
          </Link>
        </div>
      ))}

      {/*Article End*/}
    </Fragment>
  );
};

export default ListArticles;

const useStyles = makeStyles({
  article: {
    marginBottom: "3rem",
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

import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const UpdatingNestedJavascript = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        {/* {article.title} */}Updating a nested object in Javascript
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
          I was required to update a key's value in single object withing a huge
          object containing multiple objects. Using&nbsp;for loop&nbsp;was the
          first option but it didn't seem efficient as we need to loo through
          all the objects checking if thats the one we need to update.
        </p>

        <p>
          Here comes spread operation to rescue, simply store the update object
          in a variable and use it to update in the main object using spread
          operator.
        </p>

        <p>Example :</p>
        <div>
          <pre className="ql-syntax" spellCheck="false">
            let data =
            {JSON.stringify(
              {
                11: {
                  name: "bishal",
                  class: 5,
                  age: 10,
                },
                12: {
                  name: "john",
                  class: 4,
                  age: 9,
                },
              },
              null,
              4
            )}
            <br />
            <br />
            let newData =
            {JSON.stringify(
              {
                12: {
                  name: "john",
                  class: 5,
                  age: 9,
                },
              },
              null,
              4
            )}
            <br />
            let test = {`{ ...data, ...newData }`};<br />
            console.log(test)
          </pre>
        </div>

        <p>Result :</p>
        <div>
          <pre className="ql-syntax" spellCheck="false">
            {JSON.stringify(
              {
                11: { name: "bishal", class: 5, age: 10 },
                12: { name: "john", class: 5, age: 9 },
              },
              null,
              4
            )}
          </pre>
          <br />
        </div>
      </article>
    </Fragment>
  );
};

export default UpdatingNestedJavascript;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

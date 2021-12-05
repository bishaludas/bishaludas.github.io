import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import SecureConnectionDB1 from "./images/SecureConnectionDB1.jpg";
import SecureConnectionDB2 from "./images/SecureConnectionDB2.png";

const SecureConnectionDB = () => {
  let tags = ["Database", "Postgres", "Dbeaver"];
  const classes = useStyles();

  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        Securely Connecting to remote Postgresql database
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "1rem" }}
      >
        {/* {new Date(article.created_at).toDateString()} */}
        {new Date("2021-05-09").toDateString()}
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
          In my path to explore more on Server domain, I had purchased a small
          VPS server with ubuntu distro. I learned setting up web servers, email
          servers, SSL certificates, cronjobs and also databases , mostly RDBMS.
        </p>

        <p>
          During that time I was more fond of PostgresSQL so I set it up on
          server and could connect to it from CLI. Later I built an application
          on using Postgres and tried connecting to it remotely , I failed. I
          was confused and lost on how to connect to remote DB, after spending
          hours on google and stackoverflow I found a way by editing the
          postgres's configurations file. However this method allowed all IPs to
          make connection to database, one could brute fore his way making the
          database laggy or even compromised.
        </p>

        <p>
          Later I found there is a safer way, SSH Tunneling. You save your
          public SSH key to the server and from your database client(DBeaver in
          my case) select SSH tab then set host (serverip), username (server
          user/root), in Authentication method select Public key and in private
          key(your path to private ssh key). Also passphrase if you use one.
        </p>
        <img src={SecureConnectionDB1} alt="BigCo Inc. logo" />
        <p>In Main tab, in sert your remote database credentials as below.</p>
        <img src={SecureConnectionDB2} alt="BigCo Inc. logo" />

        <p>
          Finally test the connection, if connected all good if not go figure :p{" "}
        </p>
      </article>
    </Fragment>
  );
};

export default SecureConnectionDB;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const CreateUserinSQL = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        Creating user in Postgres, SQL Server and Mysql
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "2rem" }}
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
        <Typography variant="body2" component="div" gutterBottom>
          <p>
            I've had the opportunities to work with some popular Relational
            Databases and in this artiles I would like to share how to create
            users for each. The codes are short and straight to the point and I
            wont be going into details. The only requirements are to have
            database and a database client installed, in my case I use Dbeaver
            as it supports all database I am going to cover.
          </p>

          <h3>Postgres </h3>
          <pre className="ql-syntax" spellCheck="false">
            sudo -u postgres psql
            <br />
            postgres=# create database mydb;
            <br />
            postgres=# create user myuser with encrypted password 'mypass';
            <br />
            postgres=# grant all privileges on database mydb to myuser;
            <br />
          </pre>

          <h3>MySQL </h3>
          <pre className="ql-syntax" spellCheck="false">
            mysql -u root -p
            <br />
            CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
            <br />
            GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
            <br />
            FLUSH PRIVILEGES;
            <br />
          </pre>

          <h3>SQL Server (2019)</h3>
          <pre className="ql-syntax" spellCheck="false">
            -- Create a login and user
            <br />
            BEGIN TRAN;
            <br />
            BEGIN TRY
            <br />
            &emsp; &emsp;CREATE LOGIN DemoLogin WITH PASSWORD ='secret123#';
            <br />
            &emsp;&emsp; CREATE USER Demouser FOR LOGIN DemoLogin;
            <br />
            &emsp;&emsp; EXEC sp_addrolemember 'db_ddladmin','Demouser';
            <br />
            &emsp;&emsp; EXEC sp_addrolemember 'db_datareader','Demouser';
            <br />
            &emsp;&emsp; EXEC sp_addrolemember 'db_datawriter','Demouser';
            <br />
            &emsp; &emsp;COMMIT TRAN;
            <br />
            END TRY <br />
            BEGIN CATCH <br />
            &emsp;&emsp; ROLLBACK TRAN ;
            <br />
            &emsp;&emsp; select ERROR_MESSAGE(); <br />
            END CATCH
          </pre>
          <pre className="ql-syntax" spellCheck="false">
            -- List all users
            <br />
            <br />
            Revert execute as user='admin';
            <br />
            Select name as username, create_date, modify_date,&nbsp;
            <br />
            type_desc as type, authentication_type_desc as
            authentication_type&nbsp;
            <br />
            from sys.database_principals&nbsp;
            <br />
            where type not in ('A', 'G', 'R', 'X') and&nbsp;
            <br />
            sid is not null and name != 'guest' order by username;&nbsp;
            <br />
          </pre>

          <pre className="ql-syntax" spellCheck="false">
            -- List all logins
            <br />
            <br />
            Select sp.name as login, sp.type_desc as login_type,&nbsp;
            <br />
            sl.password_hash, sp.create_date, sp.modify_date,&nbsp;
            <br />
            case&nbsp;
            <br />
            &nbsp;&nbsp;when&nbsp;sp.is_disabled = 1 then 'Disabled'&nbsp;
            <br />
            else 'Enabled' end as status&nbsp;
            <br />
            from sys.server_principals sp&nbsp;
            <br />
            left join sys.sql_logins sl on sp.principal_id =
            sl.principal_id&nbsp;
            <br />
            where sp.type not in ('G', 'R') order by sp.name;&nbsp;
            <br />
          </pre>
        </Typography>
      </article>
    </Fragment>
  );
};

export default CreateUserinSQL;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

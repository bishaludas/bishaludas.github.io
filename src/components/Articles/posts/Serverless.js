import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import lambda from "./images/lambda.jpg";

const Serverless = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        {/* {article.title} */}Getting started with Serverless 101
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
        <p>
          First time I heard the term Serverless was from my girlfriend's sister
          (Software Developer), she asked me "Have you worked with Lambda ?".
          This was mid 2019 and I had recently joined a company that was using
          AWS for its cloud infrastructure. I had just started to work with some
          AWS services like S3 bucket, EC2 & RDS and I was clueless about it.
        </p>

        <h3 className="mb-0">Enter Year 2021</h3>
        <p className="mt-0">
          The project I was working on aimed to provide rail-replacement service
          for Railway operators. It had seperate repositories for
          frontend(React) and backend(Symfony), however within backend there was
          a dotnet code which would get called on certain events and insert data
          to sql server database.
        </p>

        <h4 className="mb-0">
          <u>Problem</u>
        </h4>
        <p className="mt-0">
          The dotnet code was independent of the backend framework, often would
          generate new unwanted files whenever making a build and was a tedious
          job to maintaine dotnet version and required packages. My project lead
          mentioned the flow was synchronomous and would take time to complete
          when given huge data.
        </p>

        <h4 className="mb-0 pb-0">
          <u>Solution</u>
        </h4>
        <p className="mt-0">
          As a solution, project lead suggested to migrate the dotnet code part
          to lambda function (Serverless), treat it as a microservice and
          explained how the architecture would look like.
          <br />I implemented the necessary code changes and worte some
          optimization for buld insert, performed tests and added a entry point
          for lambda. Then added a trigger to lambda, it would be triggered
          whenever a new file is put into s3 bucket. Finally, made a build and
          uploaded the zip file to lambda.
        </p>
        <p>
          Deploying to lambda has removed the time that would had been used to
          maintain dotnet dipendencies and the performance has improved
          drastically with bulk insert optimization. Before it took 15 mins to
          insert 15000 entities now it takes 30-45 sec.
          <br />( Tell me thats impressive 😁)
        </p>
        <p>
          Another useful feature is we can scale up the function as we go,
          currently the RAM limit is set to 512 MB which can be easily increased
          via AWS web console. Also, all the lambda logs be viewed in the
          cloudwatch which would help if you need to debug later.
        </p>

        <p>The project architectures looks like this :</p>
        <p>
          <img src={lambda} alt="Github" />
        </p>

        <h4 className="mb-0 pb-0">
          <u>My view on serverless</u>
        </h4>
        <div>
          I would not recommend to start new project using serverless stack as
          you will be limited by the functionality available but if you plan on
          making a microservice for your existing project then its a good
          choice.
          <p>
            With a server like EC2 or a VPS you can setup web servers, run cron
            jobs, setup databases or even store files and data but with
            serverless you can't do all that.
          </p>
          Some of advantages :<li>Quick deployments</li>
          <li>No server management is necessary</li>
          <li>
            Developers are only charged for the server space they use, reducing
            cost
          </li>
          <li>Serverless architectures are scalable</li>
          <li>
            Serverless such AWS Lambda function can be integrated with other AWS
            services
          </li>
        </div>
        <p>
          Points taken from :
          <a
            href="https://www.cloudflare.com/learning/serverless/why-use-serverless/"
            rel="noreferrer"
            targer="_blank"
          >
            Link
          </a>
        </p>
      </article>
    </Fragment>
  );
};

export default Serverless;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

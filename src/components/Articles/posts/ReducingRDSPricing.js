import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import reserved_instance from "./images/reserved_instance.PNG";
import cost_explorer from "./images/cost_explorer.PNG";

const ReduceRDSPricing = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        {/* {article.title} */}Reduce RDS Pricing
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "2rem" }}
      >
        {/* {new Date(article.created_at).toDateString()} */}
        {new Date(props.createdAt).toDateString()}
        {props.tags?.split(",").length > 0
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
          Data is cornerstone of any modern software application, and database
          are the most common way to store and manage data used by modern
          applications. Databases are backbone of any business because the
          contain information on every aspect of your business. Hence, Security
          is of prime concern, which can be achieved in two ways :
        </p>
        <ul>
          <li>Hire DBA, Cyber Security Experts </li>
          <li>Use Managed Third party service</li>
        </ul>
        <p className="mt-0">
          For a startup or growing company, the first option is expensive and
          sometimes out of the option. This is where a managed third party
          services such as AWS, GCP takes the spotlight. They tend to be cheaper
          than former, easy to initialize , easy to use (with some Cloud
          experience) and available on demand.
        </p>
        <small>
          <i>
            <u>
              Note : I'm not saying third party services saves you from all the
              trouble of managing and maintaining services but major security
              risks are covered. A developer with database experience can easily
              familiarize and work with the service.
            </u>
          </i>
        </small>
        <br></br>
        <br></br>
        <h4 className="mb-0">
          <u>Problem Statement</u>
        </h4>
        <p className="mt-0">
          My workplace makes heavy usage of Relational Database Services(RDS),
          there are 5 projects at the moment with each project having at least 1
          SQL Server database and some having 2 SQL Server, one for UAT testing
          and other for production. In past there were about 19 SQL Server
          database.
        </p>
        <p>
          If you check the SQL Server standard database pricing (Single AZ) and
          compare it with equivalent MySQL or Postgres ((Single AZ)), we can
          find SQL Server is 3 times (or more) expensive than the later (differs
          by Deployment model).
        </p>
        {/* Database Pricing */}
        <table>
          <thead>
            <tr>
              <th>DB Engine</th>
              <th>Instance</th>
              <th>Price per hour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SQL Server</td>
              <td>db.t3.xlarge</td>
              <td>$1.044</td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td>db.t3.xlarge</td>
              <td>$0.272</td>
            </tr>
            <tr>
              <td>Postgres</td>
              <td>db.t3.xlarge</td>
              <td>$0.290</td>
            </tr>
          </tbody>
        </table>
        <br />
        {/*  */}
        <p>
          There was a massive cost raised by the Relational Database Service
          alone. Before there were total 19 RDS and monthly cost were as below :
        </p>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>June 2021</td>
              <td>$6,815.25</td>
            </tr>
            <tr>
              <td>July 2021</td>
              <td>$6,585.16</td>
            </tr>
            <tr>
              <td>Aug 2021</td>
              <td>$4,868.57</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h4 className="mb-0 pb-0">
          <u>Research and Findings</u>
        </h4>
        <ul>
          <li>
            Major reason for higher RDS cost was due to database engine : SQL
            Server.
          </li>
          <li>
            Changing the database engine is not an option as the docker image
            was setup to work with SQL Server only. Other unknown issues which
            might stop progamme form running.
          </li>
          <li>Under SQL Server engine there were cheaper deployment models.</li>
          <li>
            Some of the database are in idle state and not used much. These
            databases were created by previous devs and were no longer managed,
            however since they are still running they contribute to the billing.
          </li>
        </ul>
        <h4 className="mb-0 pb-0">
          <u>Measures Taken</u>
        </h4>
        <ol>
          {/* Point 1 */}
          <li>Delete stale database</li>
          <p>
            Delete the databases created by previous devs which were no longer
            in use as they were still running and contributed to the billing.
            Before there were 19 DBs , after careful evaluation the number was
            reduces to 14 DBs.
          </p>

          {/* Point 2 */}
          <li>Change DB deployment models</li>
          <p>
            Although changing DB engines was not possible, changing deployment
            model was. Previously used SQL Server deployment model was{" "}
            <strong>Standard (Single AZ)</strong>, they are lavishly expensive.
            Other cheap option was to use the Express or Web deployment model.
          </p>
          <ul>
            <li>Express</li>
            <p>
              Express being the cheapest option out of all had some limitations
              such as max database size limit was 10GB, can only use a maximum
              of 1410 MB memory per instance. This limited it to be used in
              production but was good enough to be used for the dev/UAT
              environment. DB for some projects were migrated to Express.
            </p>
            <li>Web</li>
            <p>
              Web edition was cheaper than Standard edition but expensive than
              Express. However, it did not have the limitation of Express and
              all production DBs have been moved to this deployment model.
            </p>
            <a
              href="https://www.znetlive.com/blog/feature-comparison-of-ms-sql-server-editions/"
              target="_blank"
              rel="noreferrer"
            >
              Source : Express vs Web Edition
            </a>
          </ul>

          {/* Point 3 */}
          <br />
          <li>Purchase Reserved instance</li>
          <p>
            Final step to reduce the DB cost was to use reserved DB instances.
            Purchasing reserved DB instance provided us with discount price
            compared to on-demand DB instance pricing.
          </p>
          <p>
            We purchased reserved DB instances : 1 year term with no upfront
            payment of 4 databases only because you will have to commit to this
            even after you delete the RDS DB instance.
          </p>

          <h4>
            <u>Reserved Instance</u>
          </h4>
          <ul>
            <li>
              At first, I thought reserved instance was different type of DB
              instance which one need to purchase to use. I was wrong, its
              basically a discount coupon which can you purchase and is applied
              to the billing of month automatically.
            </li>
            <li>
              You have a separate page for reserved instance under RDS section
              from where you can purchase it. You ll need to fill form that
              matched your requirements.
              <img src={reserved_instance} alt="reserved_instance" />
            </li>
            <li>
              After purchasing a reserved Db instance, this discount coupon will
              be applied to the RDS DB that matches with information provided in
              above step II.
            </li>
            <li>
              Reserved DB instance discounted price will take into effect the
              very next day you purchase it. One confusing behavior was, it is
              always applied on the first day of new month from next time
              onwards.
              <p>
                Below attached cost explorer image shows in Aug 1, all the
                reserved instance prices for the month is charged. In 3 Aug we
                purchased a new Reserved instance, its charge for the remaining
                days in month are charge the next day.
              </p>
            </li>

            <img src={cost_explorer} alt="cost_explorer" />
            <li>
              One important note : is you purchased a reserved instance for a
              data and 3 months down you delete the database, you will still
              have to pay for the remaining time term of the reserved instance.{" "}
            </li>
          </ul>
        </ol>

        <h4 className="mb-0 pb-0">
          <u>Cost After</u>
        </h4>
        <p>14 RDS consisting of Express and Web deployment models.</p>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>September 2022</td>
              <td>$1,242.61</td>
            </tr>
            <tr>
              <td>August 2022</td>
              <td>$1,271.94</td>
            </tr>
            <tr>
              <td>July 2022</td>
              <td>$1,414.15</td>
            </tr>
          </tbody>
        </table>
      </article>
    </Fragment>
  );
};

export default ReduceRDSPricing;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

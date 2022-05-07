import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import vps1 from "./images/vps1.png";
import vps2 from "./images/vps2.png";

const NoVpsAnymore = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        {/* {article.title} */}I Don't need a VPS anymore
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
          I've paid for a VPS subscription, for my own use, for the last two and
          half years (30 Months). Mainly for serving web traffic, running cron
          jobs, hosting databases, exploring SSL certificates and for other bits
          and pieces.
        </p>

        <Grid container className="my-4" spacing={2}>
          <Grid item xs={6}>
            <a
              href="https://www.prabhuhost.com/"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Prabhu Hosting
            </a>
            <img src={vps1} alt="VPS Bill 1" />
          </Grid>

          <Grid item xs={6}>
            <a
              href="https://nestnepal.com/"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Nest Nepal
            </a>
            <img src={vps2} alt="VPS Bill 2" />
          </Grid>
        </Grid>

        <p>
          But, as of now that that era in my life has come to a close. May 7,
          I've have requested for service cancellation. No more (personal)
          server that I wholly or partially manage. No more SSH'ing in. No more
          updating Linux kernel / packages. No more Apache / Nginx setup. No
          more MySQL /{" "}
          <a
            href="https://bishaludash.com.np/articles/securely_connecting_to_remote_postgresql_database"
            target="_blank"
            rel="noreferrer"
          >
            PostgreSQL
          </a>{" "}
          administration. No more SSL certificates to renew. No more CPU / RAM
          usage to monitor.
        </p>

        <p className="mt-0">
          In its place, I've fully embraced SaaS. In particular, I've converted
          my personal web sites, and most of the other web sites in my github
          repository, to be statically generated, and to be hosted on
          Github-pages and some requiring a backend api and database in Heroku.
        </p>

        <h4 className="mb-0">
          <u>Reasons for moving away from VPS</u>
        </h4>
        <ul className="article-list">
          <li>
            My new setup is completely free which is mind-boggling. My
            bishaludash.com.np ccTLD is free of cost, courtesy of{" "}
            <a href="https://register.com.np/" rel="noreferrer" target="_blank">
              Mercantile Nepal
            </a>
            . The code is stored on github repository and served via git hub
            pages. Finally, the domain points to cloudflare nameserver which
            point to github pages and this is how you get this page served.
          </li>
          <li>
            I don't have to tell others about how I reduces page load time by{" "}
            <a
              href="https://bishaludash.com.np/articles/migrating_from_material_table_to_react_table_2"
              rel="noreferrer"
              target="_blank"
            >
              refactoring
            </a>{" "}
            my code. The most efficient way to achieve this is by using a CDN
            which Cloudflare covers for me and it's highly available, and
            lightning-fast, and secure out-of-the-box.
          </li>
          <li>
            Sysadmin is now Somebody Else's Problem. I don't have to worry about
            security, SSH key being compromised, setting up firewall and locking
            port 22 preventing myself from SSH'ing the server (this actually
            happened), emails telling me my SSL certificate is going to expire.
          </li>

          <li>
            SaaS is one that's getting harder to ignore with each passing year.
            In my recent project, we had a service written in dotnet and our
            entire backend was in PHP, so we decided to use a serverless compute
            ie. AWS's Lambda function and deployed on top of it. Worked
            brilliantly, no package management required, no need to allocate an
            entire machine just deploy the build and the logs were eaily
            available if needed to debug.
          </li>
          <li>
            Easy Code Deployment.I had not set any pipelines for my personal
            projects and my approach was to SSH into vps , do git pull , make
            build and move to path nginx was pointing. But after switching to
            github-pages its a one line code that makes a new build and updates
            changes to github-pages. The changes are reflected within 30s- 1min.
            <pre className="ql-syntax" spellCheck="false">
              yarn deploy
            </pre>
          </li>

          <li>
            And then there's cost. I had quite a chunky 4GB RAM 2VCpu VPS (HDD
            version) for the last few years, which was costing me USD$8-10 /
            month. This was beefier than I really needed and in the last 3-4
            months I was not using it much and felt like it hurt my wallet a
            little bit when they changed from monthly to semi-anually payment
            scheme.
          </li>
        </ul>

        <p className="mt-5">
          With the new setup, I still have some responsibility for security ,
          that is responsibility for my own credentials, keeping my private SSH
          key safe and not pushing credentials into public git repository.
        </p>
        <p>
          As of year 2020, you have multiple ways for deploying online and
          deploying using SaaS is an option. It is up to your own opinion. I
          feel that my new setup is good enough.
        </p>

        <p>
          Article inspired from{" "}
          <a
            href="https://greenash.net.au/thoughts/2022/03/i-dont-need-a-vps-anymore/"
            rel="noreferrer"
            target="_blank"
          >
            Link
          </a>
        </p>
      </article>
    </Fragment>
  );
};

export default NoVpsAnymore;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

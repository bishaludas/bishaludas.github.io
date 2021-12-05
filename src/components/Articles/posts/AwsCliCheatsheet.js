import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";

const AwsCliCheatsheet = () => {
  let tags = ["aws", "s3", "aws cli"];
  const classes = useStyles();

  return (
    <Fragment>
      {/*title*/}
      <Typography variant="h5" color="primary">
        AWS Cli cheatsheet for S3
      </Typography>

      {/*Date and tags*/}
      <Typography
        variant="caption"
        display="block"
        style={{ marginBottom: "2rem" }}
      >
        {/* {new Date(article.created_at).toDateString()} */}
        {new Date("2021-10-20").toDateString()}
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

      {/*content*/}
      <article>
        <Typography variant="body2" component="div" gutterBottom>
          <p>
            S3 buckets can be accessed via aws web console and aws cli. If
            developers are experienced with the aws cli tools, they can easily
            perform wide range of actions ie. make &amp; remove bucket, download
            &amp; upload files , list all buckets, files and more never leaving
            the terminal. Below is list of useful cli commands for S3.
          </p>

          <p>List Buckets</p>
          <pre className="ql-syntax" spellCheck="false">
            aws s3 ls
          </pre>

          <p>List files in a Bucket</p>
          <pre className="ql-syntax" spellCheck="false">
            aws s3 ls s3://bucket-name
          </pre>

          <p>Create Bucket</p>
          <pre className="ql-syntax" spellCheck="false">
            aws s3 mb s3://bucket-name make_bucket: bucket-name
          </pre>

          <p>Delete Bucket</p>
          <pre className="ql-syntax" spellCheck="false">
            aws s3 rb s3://bucket-name --force
          </pre>

          <p>Download S3 object to local</p>
          <pre className="ql-syntax" spellCheck="false">
            aws s3 cp s3://bucket-name/file.txt ~/Desktop/file.txt download:
            ./backup.tar from s3://bucket-name/file.txt to Dextop/file.txt
          </pre>

          <p>Upload local file as S3 object</p>
          <pre className="ql-syntax" spellCheck="false">
            aws s3 cp backup.tar s3://bucket-name upload: ./backup.tar to
            s3://bucket-name/backup.tar
          </pre>

          <p>Delete S3 object</p>
          <pre className="ql-syntax" spellCheck="false">
            aws s3 rm s3://bucket-name/secret-file.gz . delete:
            s3://bucket-name/secret-file.gz
          </pre>

          <p>Download bucket to local</p>
          <pre className="ql-syntax" spellCheck="false">
            aws s3 sync s3://bucket-name/ /media/pasport-ultra/backup
          </pre>

          <p>Upload local directory to bucket</p>
          <pre className="ql-syntax" spellCheck="false">
            aws s3 sync (directory) s3://bucket-name/
          </pre>
        </Typography>
      </article>
    </Fragment>
  );
};

export default AwsCliCheatsheet;

const useStyles = makeStyles({
  pills: {
    fontSize: ".9rem",
    margin: "0 5px",
  },
});

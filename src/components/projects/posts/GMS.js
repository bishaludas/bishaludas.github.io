import React from "react";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import GMSImage from "./images/gms.png";

const GMS = () => {
  return (
    <article>
      <Typography variant="h5" color="primary">
        Gold Management System
      </Typography>

      <img className="mt-3" src={GMSImage} alt="eisei.jpeg" />

      <p>
        I built an offline desktop application to manage gold business of a
        client. It is build on top of electron js and sqlite.
      </p>

      <p>
        According to client
        <Alert icon={false} severity="success">
          Several software/app option available in the market didn't meet our
          requirement. So, we opt to customize the app according to our needs.
          GMS is very user friendly and made inventory tracking very easy. They
          give prompt response to the queries and adjustments required.
        </Alert>
      </p>

      <p>
        Project url :{" "}
        <a
          href="https://bishaludash.com.np/GMS/"
          rel="noopener noreferrer"
          target="_blank"
        >
          GMS
        </a>
      </p>
    </article>
  );
};

export default GMS;

import React from "react";
import nepse from "./images/nepse.png";
import Typography from "@material-ui/core/Typography";

const NepseApi = () => {
  return (
    <article>
      <Typography variant="h5" color="primary">
        NEPSE-Api
      </Typography>
      <p>
        There is no free NEPSE api resourse provider so I decided to make one
        for my own. This project provides api for 3 things:
      </p>
      <ol>
        <li>Todays Share</li>
        <li>Top Gainers</li>
        <li>Top Loosers</li>
      </ol>
      <p>
        <br />
      </p>
      <p>
        <img src={nepse} alt="nepse api page" />
      </p>
      <p>
        Here is the Github link:{" "}
        <a
          href="https://bishaludash.github.io/NEPSE-Api/"
          rel="noopener noreferrer"
          target="_blank"
        >
          NEPSE-Api
        </a>
      </p>
    </article>
  );
};

export default NepseApi;

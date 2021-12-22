import React from "react";
import nepse from "./images/nepse.png";

const NepseApi = () => {
  return (
    <article>
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

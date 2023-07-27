import React, { Suspense } from "react";
const GoldPrice = React.lazy(() => import("./goldPrice"));

const GmsAnualReport = () => {
  return (
    <div className="intro mb-5">
      <h1>GMS : Anual Report ( 2022 - 2023 )</h1>
      <h3>
        <u>Background</u>
      </h3>

      <article>
        {/* Background */}
        <div>
          <a
            href="https://bishaludash.com.np/GMS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GMS
          </a>{" "}
          is a custom software built to solve a client specific business
          problem. The main problem GMS solved are :
          <ul>
            <li>
              Easy and Efficient storing and retriving business sales data.
            </li>
            <li>Proper Inventory Management.</li>
            <li>Business credit tracking.</li>
          </ul>
        </div>

        {/* Gold Price History */}
        <div className="mt-5">
          <h3>
            <u>Gold Price History</u>
          </h3>
          <Suspense fallback={<div>Loading ...</div>}>
            <GoldPrice />
          </Suspense>
        </div>

        <div className="mt-5">
          <h3>
            <u>Key Metrices</u>
          </h3>
          which month has high Sales, Credit, Which tola is sold more, Which
          item category, Which stone,
        </div>

        <div className="mt-5">
          <h3>
            <u>Findings</u>
          </h3>
        </div>

        <div className="mt-5">
          <h3>
            <u>Conclusion</u>
          </h3>
        </div>
      </article>
    </div>
  );
};

export default GmsAnualReport;

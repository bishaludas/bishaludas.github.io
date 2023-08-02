import React, { Suspense } from "react";
const GoldPrice = React.lazy(() => import("./goldPrice"));
const InventoryMetrics = React.lazy(() => import("./InventoryMetrics"));
const SalesData = React.lazy(() => import("./SalesData"));

const GmsAnualReport = () => {
  return (
    <div className="intro mb-5">
      <h1>GMS : Anual Report ( 2022 - 2023 )</h1>
      <h3 className="article-topic">
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
          <h3 className="article-topic">
            <u>Gold Price History</u>
          </h3>

          <Suspense fallback={<div>Loading ...</div>}>
            <GoldPrice />
          </Suspense>
        </div>

        {/* Monthly Sales Report */}
        <div className="mt-5">
          <h3 className="article-topic">
            <u>Sales Analysis</u>
          </h3>
          <small className="article-topic">
            ( Note : Below finding are generated from GMS software with consent
            from clients.)
          </small>
          <Suspense fallback={<div>Loading ...</div>}>
            <SalesData />
          </Suspense>
        </div>

        {/* Top selling jewellery */}
        <div className="mt-5">
          <h3 className="article-topic">
            <u>Top Selling Jewellery</u>
          </h3>
          <Suspense fallback={<div>Loading ...</div>}>
            <InventoryMetrics />
          </Suspense>
        </div>

        <div className="mt-5">
          <h3 className="article-topic">
            <u>Conclusion</u>
          </h3>
          Gold business is huge, I should charge my clients more.
          <h1>🙆</h1>
        </div>
      </article>
    </div>
  );
};

export default GmsAnualReport;

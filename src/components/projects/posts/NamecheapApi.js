import React from "react";
import Typography from "@material-ui/core/Typography";
import namecheap1 from "./images/namecheap1.png";
import namecheap2 from "./images/namecheap2.png";

const NamecheapApi = () => {
  return (
    <article>
      <Typography variant="h5" color="primary">
        Namecheap Api
      </Typography>

      <p>
        When I was working for Mobwizards, we had to migrate to a new VPS server
        with higher specs and it was a tedious job to update the DNS host
        records for each domain (130 plus at the time). Dept head suggested we
        use the namecheap api to update add domains at once, so i began my
        research and started working on the script. My finished script would
        read domains from a file which was stored in array and update DNS
        records for each.
      </p>

      <p>
        Later as our project grew, I integrated bunch of namecheap api into our
        application as requested by the marketing team which helped improve
        efficiency. The{" "}
        <a
          href="https://www.namecheap.com/support/api/methods/"
          rel="noopener noreferrer"
          target="_blank"
        >
          api
        </a>{" "}
        are as below :
      </p>
      <ul>
        <li>Domains : getList, create, check, renew, getInfo</li>
        <li>Domains.dns : getList, getHosts ,setHosts</li>
        <li>Users: getPricing, update</li>
      </ul>

      <p>
        <img src={namecheap1} alt="nepse api page" />
      </p>

      <p>
        <img src={namecheap2} alt="nepse api page" />
      </p>
    </article>
  );
};

export default NamecheapApi;

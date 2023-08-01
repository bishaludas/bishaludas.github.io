import React from "react";
import Grid from "@material-ui/core/Grid";

const jewel_category = [
  { count: 14, name: "Naugedi" },
  { count: 25, name: "Bindiya" },
  { count: 32, name: "Diamond Top" },
  { count: 53, name: "Rani Haar " },
  { count: 53, name: "bracelet" },
  { count: 53, name: "mangalsutra" },
  { count: 70, name: "Moti Mala" },
  { count: 70, name: "haaar" },
  { count: 77, name: "clip" },
  { count: 78, name: "jhumka" },
  { count: 96, name: "Pote Mala" },
  { count: 100, name: "gents ring" },
  { count: 111, name: "Diamond Ring" },
  { count: 116, name: "tilari" },
  { count: 146, name: "locket" },
  { count: 166, name: "bangles" },
  { count: 198, name: "tops" },
  { count: 300, name: "chain" },
  { count: 302, name: "ladies ring" },
];

const jewel_stone = [
  { count: 2, name: "panna" },
  { count: 3, name: "muga" },
  { count: 7, name: "navaratna stone" },
  { count: 10, name: "pote" },
  { count: 13, name: "pearl" },
  { count: 23, name: "stone" },
  { count: 53, name: "ruby" },
  { count: 143, name: "zircon stone" },
  { count: 146, name: "diamond " },
];

const InventoryMetrics = () => {
  return (
    <div>
      Total Inventory Counts: 2103
      <ul>
        <li>Jewellery Categories</li>
        <Grid container spacing={1} className="mb-4">
          <Grid item xs={4}>
            <table className="mt-3">
              <thead>
                <tr>
                  <th className="p-2">SN.</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Count</th>
                </tr>
              </thead>
              <tbody align="right">
                {jewel_category.map((item, key) =>
                  key <= 5 ? (
                    <tr align="left">
                      <td>{key + 1}</td>
                      <td className="text-capitalize">{item.name}</td>
                      <td>{item.count}</td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </Grid>

          <Grid item xs={4}>
            <table className="mt-3">
              <thead>
                <tr>
                  <th className="p-2">SN.</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Count</th>
                </tr>
              </thead>
              <tbody align="right">
                {jewel_category.map((item, key) =>
                  key >= 6 && key <= 11 ? (
                    <tr align="left">
                      <td>{key + 1}</td>
                      <td className="text-capitalize">{item.name}</td>
                      <td>{item.count}</td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </Grid>

          <Grid item xs={4}>
            <table className="mt-3">
              <thead>
                <tr>
                  <th className="p-2">SN.</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Count</th>
                </tr>
              </thead>
              <tbody align="right">
                {jewel_category.map((item, key) =>
                  key >= 12 && key <= 17 ? (
                    <tr align="left">
                      <td>{key + 1}</td>
                      <td className="text-capitalize">{item.name}</td>
                      <td>{item.count}</td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </Grid>
        </Grid>

        <li>Popular Jewellery Stones</li>
        <Grid container spacing={1} className="mb-4">
          <Grid item xs={4}>
            <table className="mt-3">
              <thead>
                <tr>
                  <th className="p-2">SN.</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Count</th>
                </tr>
              </thead>
              <tbody align="right">
                {jewel_stone.map((item, key) => (
                  <tr align="left">
                    <td>{key + 1}</td>
                    <td className="text-capitalize">{item.name}</td>
                    <td>{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
        </Grid>
        <li>Sales Metrics</li>
      </ul>
    </div>
  );
};

export default InventoryMetrics;

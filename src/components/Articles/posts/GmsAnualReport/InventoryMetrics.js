import React, { useMemo } from "react";
import Grid from "@material-ui/core/Grid";

import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Cell,
  Text,
  Tooltip,
} from "recharts";

const jewel_category = [
  { count: 302, name: "ladies ring" },
  { count: 300, name: "chain" },
  { count: 198, name: "tops" },
  { count: 166, name: "bangles" },
  { count: 146, name: "locket" },
  { count: 116, name: "tilari" },
  { count: 111, name: "Diamond Ring" },
  { count: 100, name: "gents ring" },
  { count: 96, name: "Pote Mala" },
  { count: 78, name: "jhumka" },
  { count: 77, name: "clip" },
  { count: 70, name: "haaar" },
  { count: 70, name: "Moti Mala" },
  { count: 53, name: "mangalsutra" },
  { count: 53, name: "bracelet" },
  { count: 53, name: "Rani Haar " },
  { count: 32, name: "Diamond Top" },
  { count: 25, name: "Bindiya" },
  { count: 14, name: "Naugedi" },
];

const jewel_stone = [
  { count: 146, name: "diamond " },
  { count: 143, name: "zircon stone" },
  { count: 53, name: "ruby" },
  { count: 23, name: "stone" },
  { count: 13, name: "pearl" },
  { count: 10, name: "pote" },
  { count: 7, name: "navaratna stone" },
  { count: 3, name: "muga" },
  { count: 2, name: "panna" },
];
const BAR_AXIS_SPACE = 10;
let xKey = "name";
let yKey = "count";
let ctx;

export const measureText14HelveticaNeue = (text) => {
  if (!ctx) {
    ctx = document.createElement("canvas").getContext("2d");
    ctx.font = "14px 'Helvetica Neue";
  }

  return ctx.measureText(text).width;
};

const InventoryMetrics = () => {
  const maxTextWidth = useMemo(
    () =>
      jewel_category.reduce((acc, cur) => {
        const value = cur[yKey];
        const width = measureText14HelveticaNeue(value.toLocaleString());
        if (width > acc) {
          return width;
        }
        return acc;
      }, 0),
    []
  );
  return (
    <div>
      <li>Top Selling Jewellery</li>
      <ResponsiveContainer
        width={"100%"}
        height={50 * jewel_category.length}
        debounce={50}
      >
        <BarChart
          data={jewel_category}
          layout="vertical"
          margin={{ left: 10, right: maxTextWidth + (BAR_AXIS_SPACE - 8) }}
        >
          <XAxis hide axisLine={false} type="number" />
          <YAxis
            type="category"
            width={150}
            padding={{ left: 20 }}
            dataKey="name"
          />

          <YAxis
            orientation="right"
            yAxisId={1}
            dataKey={yKey}
            type="category"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => value.toLocaleString()}
            mirror
            tick={{
              transform: `translate(${maxTextWidth + BAR_AXIS_SPACE}, 0)`,
            }}
          />
          <Bar dataKey={yKey} minPointSize={2} barSize={32}>
            {jewel_category.map((d, idx) => {
              return <Cell key={d[xKey]} fill="#8884d8" />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <li className="mt-5">Popular Jewellery Stones</li>
      <ResponsiveContainer
        width={"100%"}
        height={50 * jewel_stone.length}
        debounce={50}
      >
        <BarChart
          data={jewel_stone}
          layout="vertical"
          margin={{ left: 10, right: maxTextWidth + (BAR_AXIS_SPACE - 8) }}
        >
          <XAxis hide axisLine={false} type="number" />
          <YAxis
            type="category"
            width={150}
            padding={{ left: 20 }}
            dataKey="name"
          />

          <YAxis
            orientation="right"
            yAxisId={1}
            dataKey={yKey}
            type="category"
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => value.toLocaleString()}
            mirror
            tick={{
              transform: `translate(${maxTextWidth + BAR_AXIS_SPACE}, 0)`,
            }}
          />
          <Bar dataKey={yKey} minPointSize={2} barSize={32}>
            {jewel_stone.map((d, idx) => {
              return <Cell key={d[xKey]} fill="#8884d8" />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryMetrics;

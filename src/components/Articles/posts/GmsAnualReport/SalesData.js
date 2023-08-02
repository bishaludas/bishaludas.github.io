import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sales_data = [
  { date: "07-2022", amount: 2998568.12, tooltip: "29 Lakh" },
  { date: "08-2022", amount: 5833596.33, tooltip: "58 Lakh" },
  { date: "09-2022", amount: 6940949.79, tooltip: "69 Lakh" },
  { date: "10-2022", amount: 11444717.91, tooltip: "1.14 Crore" },
  { date: "11-2022", amount: 10809866.8, tooltip: "1.08 Crore" },
  { date: "12-2022", amount: 10278705.25, tooltip: "1.02 Crore" },
  { date: "01-2023", amount: 16817118.34, tooltip: "1.68 Crore" },
  { date: "02-2023", amount: 20914303.7, tooltip: "2.09 Crore" },
  { date: "03-2023", amount: 18803746.89, tooltip: "1.88 Crore" },
  { date: "04-2023", amount: 15288352.67, tooltip: "1.52 Crore" },
  { date: "05-2023", amount: 15964767.26, tooltip: "1.59 Crore" },
  { date: "06-2023", amount: 12692381.0, tooltip: "1.26 Crore" },
  { date: "07-2023", amount: 4033974.82, tooltip: "40 Lakh" },
];

const salesData = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    console.log(active, payload);
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="label">{`Price : ${payload[0].payload.tooltip}`}</div>
        </div>
      );
    }

    return null;
  };
  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={400}
          height={300}
          data={sales_data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" angle={-45} textAnchor="end" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default salesData;

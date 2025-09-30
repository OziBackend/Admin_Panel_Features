import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import "./ChartCard.css";

const pieData = [
  { name: "Sales", value: 400 },
  { name: "Users", value: 300 },
  { name: "Orders", value: 200 },
  { name: "Visits", value: 500 },
];
const barData = [
  { name: "Jan", sales: 4000, users: 2400 },
  { name: "Feb", sales: 3000, users: 1398 },
  { name: "Mar", sales: 2000, users: 9800 },
  { name: "Apr", sales: 2780, users: 3908 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function ChartCard({ type }) {
  return (
    <div className="chart-card">
      {type === "pie" ? (
        <PieChart width={300} height={300}>
          <Pie data={pieData} dataKey="value" outerRadius={100} fill="#8884d8" label>
            {pieData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      ) : (
        <BarChart width={400} height={300} data={barData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="users" fill="#82ca9d" />
        </BarChart>
      )}
    </div>
  );
}

export default ChartCard;

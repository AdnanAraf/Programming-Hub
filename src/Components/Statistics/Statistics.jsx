import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Assignment-1",
    marks: 60,
  },
  {
    name: "Assignment-2",
    marks: 58,
  },
  {
    name: "Assignment-3",
    marks: 54,
  },
  {
    name: "Assignment-4",
    marks: 59,
  },
  {
    name: "Assignment-5",
    marks: 57,
  },
  {
    name: "Assignment-6",
    marks: 58,
  },
  {
    name: "Assignment-7",
    marks: 60,
  },
  {
    name: "Assignment-8",
    marks: 60,
  },
];

export default function App() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 50,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ stroke: "purple" }} />
        <YAxis tick={{ stroke: "purple" }} />
        <Tooltip />
        <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

import { GV } from "@/utils/style.util";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "40,875,000",
    value: 1,
    fill: GV('primary'),
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
};

export default function Chart() {
  const CustomLabel = ({ viewBox, value, name }: any) => {
    const { cx, cy } = viewBox;
    return (
      <>
        <text
          x={cx}
          y={cy - 40}
          fill="#6D7380"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="circular"
          fontSize={16}
        >
          v0.2 Community Pool
        </text>
        <text
          x={cx}
          y={cy}
          fill={GV('header')}
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Circular Book"
          fontWeight={400}
          fontSize={'2.5rem'}
        >
          {name}
        </text>
        <text
          x={cx}
          y={cy + 40}
          fill="#6D7380"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="circular"
          fontSize={16}
        >
          / {name} LINK
        </text>
      </>
    );
  };

  return (
    <div style={{ width: "100%", height: '100%', minWidth: "200px", minHeight: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="90%"
          outerRadius="110%"
          data={data}
          startAngle={-40}
          endAngle={220}
        >
          <RadialBar
            background
            label={<CustomLabel />}
            dataKey="value"
            cornerRadius={30 / 2}
            fill="#0BEFF2"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

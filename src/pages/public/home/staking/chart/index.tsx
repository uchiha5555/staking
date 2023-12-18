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
    fill: "#83a6ed",
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
          fill="#375bd2"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="circular"
          fontSize={30}
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
    <div style={{ width: "100%", height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={data}
          startAngle={-45}
          endAngle={225}
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

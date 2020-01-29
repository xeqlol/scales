import React from "react";

import "./styles.css";

export const Select: React.FC<{
  label: string;
  value: number;
  items: { name: string | number; value: any }[];
  onChange: (value: string) => void;
}> = ({ value, onChange, items, label }) => (
  <div className={"select-container"}>
    <div className={"select-label"}>{label}</div>
    <div className={"select"}>
      <select value={value} onChange={event => onChange(event.target.value)}>
        {items.map(({ name, value }, index) => (
          <option value={value} key={index}>
            {name}
          </option>
        ))}
      </select>
    </div>
  </div>
);

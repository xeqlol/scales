import React from "react";

import { SCALES } from "../../utils";

export const ScaleSelector: React.FC<{
  scale: number;
  onChange: (value: number) => void;
}> = ({ scale, onChange }) => (
  <select
    value={scale}
    onChange={event => onChange(Number(event.target.value))}
  >
    {SCALES.map(({ name }, index) => (
      <option value={index} key={index}>
        {name}
      </option>
    ))}
  </select>
);

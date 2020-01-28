import React from "react";

import { FRETS_COUNTS } from "../../utils";

export const FretsCountSelector: React.FC<{
  fretsCount: number;
  onChange: (value: number) => void;
}> = ({ fretsCount, onChange }) => (
  <select
    value={fretsCount}
    onChange={event => onChange(Number(event.target.value))}
  >
    {FRETS_COUNTS.map((count, index) => (
      <option value={count} key={index}>
        {count}
      </option>
    ))}
  </select>
);

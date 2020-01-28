import React from "react";

import { NOTES } from "../../utils";

export const RootSelector: React.FC<{
  root: number;
  onChange: (value: number) => void;
}> = ({ root, onChange }) => (
  <select value={root} onChange={event => onChange(Number(event.target.value))}>
    {NOTES.map((note, index) => (
      <option value={index} key={index}>
        {note}
      </option>
    ))}
  </select>
);

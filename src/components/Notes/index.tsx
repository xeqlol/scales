import React from "react";

import "./styles.css";
import { NOTES, NOTES_COLORS, NOTES_COUNT } from "../../utils";

export const Notes: React.FC<{ scale: number[]; root: number }> = ({
  scale,
  root,
}) => {
  const shiftedScale = scale.map((note) => (note + root) % NOTES_COUNT);
  return (
    <div className={"notes-container"}>
      <div className={"notes-title"}>Intervals: </div>
      <div className={"notes"}>
        {NOTES.map((note, index) => {
          console.log(
            index,
            root,

            shiftedScale
          );
          const isActive = shiftedScale.includes(index);

          return (
            <div
              className={"notes-note"}
              style={isActive ? { color: NOTES_COLORS[index] } : {}}
            >
              {note}
            </div>
          );
        })}
      </div>
    </div>
  );
};

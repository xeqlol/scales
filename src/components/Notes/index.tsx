import React from "react";

import "./styles.css";
import {
  applyModeToScale,
  getNotesForScale,
  NOTES,
  NOTES_COLORS,
} from "../../utils";

export const Notes: React.FC<{ scale: number[]; root: number; mode: number }> =
  ({ scale, root, mode }) => {
    const shiftedScale = getNotesForScale(root, applyModeToScale(mode, scale));
    return (
      <div className={"notes-container"}>
        <div className={"notes-title"}>Intervals: </div>
        <div className={"notes"}>
          {NOTES.map((note, index) => {
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

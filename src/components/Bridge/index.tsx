import React from "react";

import { getLabelForNote, NOTES_COLORS } from "../../utils";

import "./styles.css";

export const Bridge: React.FC<{
  strings: (number | null)[][];
  tuning: number[];
}> = ({ strings, tuning }) => {
  const bridgeNotes = strings.map(([note]) => note);

  return (
    <div className={"bridge"}>
      {tuning.map((note, index) => {
        const isActive = bridgeNotes.includes(note);

        return (
          <div className={"bridge-note"} key={index}>
            <div
              style={isActive ? { color: NOTES_COLORS[note] } : {}}
              className={["bridge-label", isActive ? "active" : ""].join(" ")}
            >
              {getLabelForNote(note)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

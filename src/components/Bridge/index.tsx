import React from "react";

import { getLabelForNote } from "../../utils";

import "./styles.css";

export const Bridge: React.FC<{
  strings: (number | null)[][];
  tuning: number[];
}> = ({ strings, tuning }) => {
  const bridgeNotes = strings.map(([note]) => note);

  return (
    <div className={"bridge"}>
      {tuning.map((note, index) => (
        <div className={"bridge-note"} key={index}>
          <div
            className={[
              "bridge-label",
              bridgeNotes.includes(note) ? "active" : ""
            ].join(" ")}
          >
            {getLabelForNote(note)}
          </div>
        </div>
      ))}
    </div>
  );
};

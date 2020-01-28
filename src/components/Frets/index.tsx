import React from "react";

import { getLabelForNote } from "../../utils";

import "./styles.css";

export const Frets: React.FC<{ strings: (number | null)[][] }> = ({
  strings
}) => (
  <>
    {strings[0].slice(1).map((_, fretIndex) => (
      <div className={"fret"} key={fretIndex}>
        <div className={"fret-index"}>{fretIndex + 1}</div>
        <div className={"fret-notes"}>
          {strings.map((_, stringIndex) => {
            const note = strings[stringIndex][fretIndex + 1];

            return (
              <div className={"note"} key={stringIndex}>
                {note !== null ? (
                  <div className={"label"}>{getLabelForNote(note)}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </>
);

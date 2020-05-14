import React from "react";

import { getLabelForNote, NOTES_COLORS } from "../../utils";

import "./styles.css";

export const Frets: React.FC<{ strings: (number | null)[][] }> = ({
  strings,
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
                  <div
                    className={"label"}
                    style={{ color: NOTES_COLORS[note] }}
                  >
                    {getLabelForNote(note)}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </>
);

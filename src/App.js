import React, { useState } from "react";

import {
  NOTES_COUNT,
  SCALES,
  NOTES,
  filterNotesByScale,
  getNotesForFrets,
  getLabelForNote
} from "./utils.js";

import "./App.css";

const TUNING = [4, 11, 7, 2, 9, 4];
const ROOT = 4;
const FRETS_COUNT = 24;

const App = () => {
  const [scale, setScale] = useState(0);
  const [root, setRoot] = useState(0);

  const { pattern } = SCALES[scale];

  const frets = TUNING.map(startNote =>
    filterNotesByScale(
      getNotesForFrets(startNote, FRETS_COUNT),
      pattern.map(note => (note + root) % (NOTES_COUNT - 1))
    ).map(getLabelForNote)
  );
  console.log(scale, root);
  return (
    <>
      <select
        value={scale}
        onChange={event => setScale(Number(event.target.value))}
      >
        {SCALES.map(({ name }, index) => (
          <option value={index}>{name}</option>
        ))}
      </select>
      <select
        value={root}
        onChange={event => setRoot(Number(event.target.value))}
      >
        {NOTES.map((note, index) => (
          <option value={index}>{note}</option>
        ))}
      </select>
      <div className={"frets"}>
        {frets[0].map((_, fretIndex) => (
          <div className={"fret"}>
            {frets.map((_, stringIndex) => (
              <div className={"note"}>
                <div className={"label"}>{frets[stringIndex][fretIndex]}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
export default App;

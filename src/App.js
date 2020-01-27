import React from "react";

import {
  NOTES_COUNT,
  filterNotesByScale,
  getNotesForFrets,
  getLabelForNote
} from "./utils.js";

import "./App.css";

const TUNING = [4, 11, 7, 2, 9, 4];
const ROOT = 4;
const FRETS_COUNT = 24;
const PATTERN = [0, 2, 3, 5, 7, 8, 11]; // harmonic minor

const App = () => {
  const frets = TUNING.map(startNote =>
    filterNotesByScale(
      getNotesForFrets(startNote, FRETS_COUNT),
      PATTERN.map(note => (note + ROOT) % (NOTES_COUNT - 1))
    ).map(getLabelForNote)
  );
  console.log(frets);
  return (
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
  );
};
export default App;

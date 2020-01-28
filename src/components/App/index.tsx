import React, { useState } from "react";

import {
  NOTES_COUNT,
  SCALES,
  filterNotesByScale,
  getNotesForFrets
} from "../../utils";

import { Neck } from "../Neck";
import { RootSelector } from "../RootSelector";
import { ScaleSelector } from "../ScaleSelector";
import { FretsCountSelector } from "../FretsCountSelector";

import "./App.css";

const TUNING = [4, 11, 7, 2, 9, 4]; // TODO: make selector for tuning

const App = () => {
  const [scale, setScale] = useState(0);
  const [root, setRoot] = useState(0);
  const [fretsCount, setFretsCount] = useState(22);

  const { pattern } = SCALES[scale];

  const strings = TUNING.map(startNote =>
    filterNotesByScale(
      getNotesForFrets(startNote, fretsCount),
      pattern.map(note => (note + root) % (NOTES_COUNT - 1))
    )
  );

  return (
    <>
      <ScaleSelector scale={scale} onChange={value => setScale(value)} />
      <RootSelector root={root} onChange={value => setRoot(value)} />
      <FretsCountSelector
        fretsCount={fretsCount}
        onChange={value => setFretsCount(value)}
      />

      <Neck strings={strings} tuning={TUNING} />
    </>
  );
};
export default App;

import React from "react";
import createPersistedState from "use-persisted-state";

import {
  NOTES_COUNT,
  SCALES,
  filterNotesByScale,
  getNotesForFrets,
  NOTES,
  FRETS_COUNTS
} from "../../utils";

import { Neck } from "../Neck";
import { Select } from "../Select";

import "./App.css";

const useScaleState = createPersistedState("scale");
const useRootState = createPersistedState("root");
const useFretsCountState = createPersistedState("frets-count");

const TUNING = [4, 11, 7, 2, 9, 4]; // TODO: make selector for tuning
const SCALES_SELECT_ITEMS = SCALES.map(({ name }, index) => ({
  name,
  value: index
}));
const NOTES_SELECT_ITEMS = NOTES.map((note, index) => ({
  name: note,
  value: index
}));
const FRETS_SELECT_ITEMS = FRETS_COUNTS.map(fretCount => ({
  name: fretCount,
  value: fretCount
}));

const App = () => {
  const [scale, setScale] = useScaleState(0);
  const [root, setRoot] = useRootState(0);
  const [fretsCount, setFretsCount] = useFretsCountState(22);

  const { pattern } = SCALES[scale];

  const strings = TUNING.map(startNote =>
    filterNotesByScale(
      getNotesForFrets(startNote, fretsCount),
      pattern.map(note => (note + root) % (NOTES_COUNT - 1))
    )
  );

  return (
    <>
      <div className={"controls"}>
        <Select
          label={"Scale"}
          items={SCALES_SELECT_ITEMS}
          value={scale}
          onChange={value => setScale(Number(value))}
        />
        <Select
          label={"Root note"}
          items={NOTES_SELECT_ITEMS}
          value={root}
          onChange={value => setRoot(Number(value))}
        />
        <Select
          label={"Frets count"}
          items={FRETS_SELECT_ITEMS}
          value={fretsCount}
          onChange={value => setFretsCount(Number(value))}
        />
      </div>

      <Neck strings={strings} tuning={TUNING} />
    </>
  );
};
export default App;

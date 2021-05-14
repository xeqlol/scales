import React from "react";
import createPersistedState from "use-persisted-state";

import { Neck } from "../Neck";
import { Select } from "../Select";
import { Credentials } from "../Credentials";

import {
  SCALES,
  filterNotesByScale,
  getNotesForFrets,
  NOTES,
  FRETS_COUNTS,
  TUNINGS,
  getNotesForScale,
  MODES,
  applyModeToScale,
} from "../../utils";

import "./App.css";
import { Notes } from "../Notes";

const useScaleState = createPersistedState("scale");
const useRootState = createPersistedState("root");
const useModeState = createPersistedState("mode");
const useFretsCountState = createPersistedState("frets-count");
const useTuningCountState = createPersistedState("tuning");

const SCALES_SELECT_ITEMS = SCALES.map(({ name }, index) => ({
  name,
  value: index,
}));
const NOTES_SELECT_ITEMS = NOTES.map((note, index) => ({
  name: note,
  value: index,
}));
const FRETS_SELECT_ITEMS = FRETS_COUNTS.map((fretCount) => ({
  name: fretCount,
  value: fretCount,
}));
const TUNINGS_SELECT_ITEMS = TUNINGS.map(({ name }, index) => ({
  name,
  value: index,
}));
const MODES_SELECT_ITEMS = MODES.map(({ name }, index) => ({
  name,
  value: index,
}));

const App = () => {
  const [scale, setScale] = useScaleState(0);
  const [root, setRoot] = useRootState(0);
  const [fretsCount, setFretsCount] = useFretsCountState(22);
  const [tuning, setTuning] = useTuningCountState(0);
  const [mode, setMode] = useModeState(0);

  const { pattern: scalePattern } = SCALES[scale];
  const { pattern: tuningPatter } = TUNINGS[tuning];
  const { shift: modeShift } = MODES[mode];

  const strings = tuningPatter.map((startNote) => {
    const fretsNotes = getNotesForFrets(startNote, fretsCount);
    const moddedScale = applyModeToScale(modeShift, scalePattern);
    const scaleNotes = getNotesForScale(root, moddedScale);
    const stringNotes = filterNotesByScale(fretsNotes, scaleNotes);

    return stringNotes;
  });

  return (
    <>
      <div className={"controls"}>
        <Select
          label={"Scale"}
          items={SCALES_SELECT_ITEMS}
          value={scale}
          onChange={(value) => setScale(Number(value))}
        />
        <Select
          label={"Root note"}
          items={NOTES_SELECT_ITEMS}
          value={root}
          onChange={(value) => setRoot(Number(value))}
        />
        <Select
          label={"Mode"}
          items={MODES_SELECT_ITEMS}
          value={mode}
          onChange={(value) => setMode(Number(value))}
        />
        <Select
          label={"Frets count"}
          items={FRETS_SELECT_ITEMS}
          value={fretsCount}
          onChange={(value) => setFretsCount(Number(value))}
        />
        <Select
          label={"Tuning"}
          items={TUNINGS_SELECT_ITEMS}
          value={tuning}
          onChange={(value) => setTuning(Number(value))}
        />
      </div>

      <Neck strings={strings} tuning={tuningPatter} />
      <Notes scale={SCALES[scale].pattern} root={root} mode={modeShift} />
      <Credentials />
    </>
  );
};
export default App;

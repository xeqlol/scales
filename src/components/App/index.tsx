import React, { useEffect } from "react";
import createPersistedState from "use-persisted-state";

import {
  NOTES_COUNT,
  SCALES,
  THEMES,
  filterNotesByScale,
  getNotesForFrets,
  NOTES,
  FRETS_COUNTS,
  TUNINGS
} from "../../utils";

import { Neck } from "../Neck";
import { Select } from "../Select";

import "./App.css";

const useScaleState = createPersistedState("scale");
const useRootState = createPersistedState("root");
const useFretsCountState = createPersistedState("frets-count");
const useTuningCountState = createPersistedState("tuning");
const useThemeState = createPersistedState("theme");

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
const TUNINGS_SELECT_ITEMS = TUNINGS.map(({ name }, index) => ({
  name,
  value: index
}));
const THEME_SELECT_ITEMS = [
  ...THEMES.map((name, index) => ({
    name,
    value: index
  })),
  { name: "random", value: THEMES.length }
];

const App = () => {
  const [scale, setScale] = useScaleState(0);
  const [root, setRoot] = useRootState(0);
  const [fretsCount, setFretsCount] = useFretsCountState(22);
  const [tuning, setTuning] = useTuningCountState(0);
  const [theme, setTheme] = useThemeState(0);

  const { pattern: scalePattern } = SCALES[scale];
  const { pattern: tuningPatter } = TUNINGS[tuning];

  const strings = tuningPatter.map(startNote =>
    filterNotesByScale(
      getNotesForFrets(startNote, fretsCount),
      scalePattern.map(note => (note + root) % (NOTES_COUNT - 1))
    )
  );

  useEffect(() => {
    document.body.className =
      theme === THEMES.length
        ? THEMES[Math.floor(Math.random() * THEMES.length)]
        : THEMES[theme];
  });

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
        <Select
          label={"Tuning"}
          items={TUNINGS_SELECT_ITEMS}
          value={tuning}
          onChange={value => setTuning(Number(value))}
        />
        <Select
          label={"Color theme"}
          items={THEME_SELECT_ITEMS}
          value={theme}
          onChange={value => setTheme(Number(value))}
        />
      </div>

      <Neck strings={strings} tuning={tuningPatter} />
    </>
  );
};
export default App;

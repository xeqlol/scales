export const NOTES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
  "B#"
];

export const NOTES_COUNT = NOTES.length;

const C_HARMONIC_MINOR = [0, 2, 3, 5, 7, 8, 11];
const C_MINOR = [0, 2, 3, 5, 7, 8, 10];

export const SCALES = [
  {
    name: "Minor",
    pattern: C_MINOR
  },
  {
    name: "Harmonic minor",
    pattern: C_HARMONIC_MINOR
  }
];

export const getLabelForNote = noteIndex => {
  return NOTES[noteIndex];
};

export const filterNotesByScale = (notes, scalePattern) => {
  return notes.map(note => (scalePattern.includes(note) ? note : null));
};

export const getNotesForFrets = (startNote, fretsCount) => {
  const notes = [];

  for (let index = 0; index < fretsCount + 1; index++) {
    notes.push((index + startNote) % (NOTES_COUNT - 1));
  }

  return notes;
};

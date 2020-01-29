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

export const TUNINGS = [
  {
    name: "Standard E",
    pattern: [4, 11, 7, 2, 9, 4]
  },
  {
    name: "Drop D",
    pattern: [4, 11, 7, 2, 9, 2]
  },
  {
    name: "Drop C#",
    pattern: [3, 10, 6, 1, 8, 1]
  },
  {
    name: "Drop C",
    pattern: [2, 9, 5, 0, 7, 0]
  }
];

export const FRETS_COUNTS = [12, 18, 22, 24];

export const getLabelForNote = (noteIndex: number) => {
  return NOTES[noteIndex];
};

export const filterNotesByScale = (notes: number[], scalePattern: number[]) => {
  return notes.map(note => (scalePattern.includes(note) ? note : null));
};

export const getNotesForFrets = (startNote: number, fretsCount: number) => {
  const notes = [];

  for (let index = 0; index < fretsCount + 1; index++) {
    notes.push((index + startNote) % (NOTES_COUNT - 1));
  }

  return notes;
};

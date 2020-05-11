export const THEMES = [
  "torquoise",
  "emerald",
  "peter-river",
  "carrot",
  "alizarin",
  "amethyst",
  "sun-flower",
  "white",
];

export const NOTES = [
  "C", //   0
  "C#", //  1
  "D", //   2
  "D#", //  3
  "E", //   4
  "F", //   5
  "F#", //  6
  "G", //   7
  "G#", //  8
  "A", //   9
  "A#", //  10
  "B", //   11
  "B#", //   12
];

export const NOTES_COUNT = NOTES.length;

export const SCALES = [
  {
    name: "Minor",
    pattern: [0, 2, 3, 5, 7, 8, 10],
  },
  {
    name: "Harmonic minor",
    pattern: [0, 2, 3, 5, 7, 8, 11],
  },
  {
    name: "Melodic minor",
    pattern: [0, 2, 4, 6, 8, 9, 11],
  },
  {
    name: "Major",
    pattern: [0, 2, 4, 5, 7, 9, 11],
  },
  {
    name: "Harmonic major",
    pattern: [0, 2, 4, 5, 7, 8, 11],
  },
  {
    name: "Melodic major",
    pattern: [0, 2, 4, 5, 7, 8, 10],
  },
  {
    name: "Diminished",
    pattern: [0, 2, 3, 5, 6, 8, 9, 11],
  },
  {
    name: "Minor arpeggio",
    pattern: [0, 3, 7],
  },
  {
    name: "Minor 7th arpeggio",
    pattern: [0, 3, 7, 10],
  },
];

export const TUNINGS = [
  {
    name: "Standard E",
    pattern: [4, 11, 7, 2, 9, 4],
  },
  {
    name: "Drop D",
    pattern: [4, 11, 7, 2, 9, 2],
  },
  {
    name: "Drop C#",
    pattern: [3, 10, 6, 1, 8, 1],
  },
  {
    name: "Drop C",
    pattern: [2, 9, 5, 0, 7, 0],
  },
  {
    name: "Drop A",
    pattern: [4, 11, 7, 2, 9, 4, 9],
  },
];

export const FRETS_COUNTS = [12, 18, 22, 24];

export const getLabelForNote = (noteIndex: number) => {
  return NOTES[noteIndex];
};

export const filterNotesByScale = (notes: number[], scalePattern: number[]) => {
  return notes.map((note) => (scalePattern.includes(note) ? note : null));
};

export const getNotesForFrets = (startNote: number, fretsCount: number) => {
  const notes = [];

  for (let index = 0; index < fretsCount + 1; index++) {
    notes.push((index + startNote) % (NOTES_COUNT - 1));
  }

  return notes;
};

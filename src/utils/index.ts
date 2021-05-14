export const NOTES_COLORS = [
  "#e74c3c", // C
  "#c0392b", // C#
  "#e67e22", // D
  "#d35400", // D#
  "#fecd04", // E
  "#2fcc71", // F
  "#3498db", // F#
  "#2980b9", // G
  "#745ec5", // G#
  "#95a5a6", // A
  "#ef717a", // A#
  "#d45c9e", // B
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
];

export const NOTES_COUNT = NOTES.length;

export const SCALES = [
  {
    name: "Lydian dominant",
    pattern: [2, 2, 2, 1, 2, 1, 2],
  },
  {
    name: "Minor",
    pattern: [2, 1, 2, 2, 1, 2, 2],
  },
  {
    name: "Harmonic minor",
    pattern: [2, 1, 2, 2, 1, 3, 1],
  },
  {
    name: "Melodic minor",
    pattern: [2, 2, 2, 2, 1, 2, 1],
  },
  {
    name: "Major",
    pattern: [2, 2, 1, 2, 2, 2, 1],
  },
  {
    name: "Harmonic major",
    pattern: [2, 2, 1, 2, 1, 3, 1],
  },
  {
    name: "Melodic major",
    pattern: [2, 2, 1, 2, 1, 2, 2],
  },
  {
    name: "Diminished",
    pattern: [2, 1, 2, 1, 2, 1, 2, 1],
  },
  {
    name: "Minor arpeggio",
    pattern: [3, 4, 8],
  },
  {
    name: "Minor 7th arpeggio",
    pattern: [3, 4, 3, 2],
  },
];

export const TUNINGS = [
  {
    name: "Standard E",
    pattern: [4, 11, 7, 2, 9, 4],
  },
  {
    name: "Standard C",
    pattern: [0, 7, 3, 10, 5, 0],
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

export const MODES = [
  {
    name: "Ionian",
    shift: 0,
  },
  {
    name: "Dorian",
    shift: 1,
  },
  {
    name: "Phrygian",
    shift: 2,
  },
  {
    name: "Lydian",
    shift: 3,
  },
  {
    name: "Mixolydian",
    shift: 4,
  },
  {
    name: "Aeolian",
    shift: 5,
  },
  {
    name: "Locrian",
    shift: 6,
  },
];

export const getLabelForNote = (noteIndex: number) => {
  return NOTES[noteIndex];
};

export const filterNotesByScale = (notes: number[], scaleNotes: number[]) => {
  return notes.map((note) => (scaleNotes.includes(note) ? note : null));
};

export const getNotesForFrets = (startNote: number, fretsCount: number) => {
  const notes = [];

  for (let index = 0; index < fretsCount + 1; index++) {
    notes.push((index + startNote) % NOTES_COUNT);
  }

  return notes;
};

export const getNotesForScale = (root: number, scale: number[]) => {
  const notes = [root];

  for (let index = 0; index < scale.length; index++) {
    const nextNote = (notes[notes.length - 1] + scale[index]) % NOTES_COUNT;

    notes.push(nextNote);
  }

  return notes;
};

const rotateArray = <T extends any[]>(array: T, shift: number) => {
  const newArray = [...array];

  shift -= newArray.length * Math.floor(shift / newArray.length);
  newArray.push.apply(newArray, newArray.splice(0, shift));

  return newArray;
};

export const applyModeToScale = (mode: number, scale: number[]) => {
  console.log(scale, mode, rotateArray(scale, mode));
  return rotateArray(scale, mode);
};

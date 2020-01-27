const NOTES = [
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

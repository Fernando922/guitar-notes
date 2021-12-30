type GuitarNote = {
  note: string;
  position: string;
};

type GuitarNotes = {
  E: GuitarNote[];
  B: GuitarNote[];
  G: GuitarNote[];
  D: GuitarNote[];
  A: GuitarNote[];
  E2: GuitarNote[];
};

type GuitarString = 'E' | 'B' | 'G' | 'D' | 'A' | 'E2';

type Question = {
  guitarString: GuitarString;
  guitarPosition: GuitarNote;
};

const guitarNotes: GuitarNotes = {
  E: [
    {note: 'F', position: '1'},
    {note: 'F#', position: '2'},
    {note: 'G', position: '3'},
    {note: 'G#', position: '4'},
    {note: 'A', position: '5'},
    {note: 'A#', position: '6'},
    {note: 'B', position: '7'},
    {note: 'C', position: '8'},
    {note: 'C#', position: '9'},
    {note: 'D', position: '10'},
    {note: 'D#', position: '11'},
    {note: 'E', position: '12'},
  ],
  B: [
    {note: 'C', position: '1'},
    {note: 'C#', position: '2'},
    {note: 'D', position: '3'},
    {note: 'D#', position: '4'},
    {note: 'E', position: '5'},
    {note: 'F', position: '6'},
    {note: 'F#', position: '7'},
    {note: 'G', position: '8'},
    {note: 'G#', position: '9'},
    {note: 'A', position: '10'},
    {note: 'A#', position: '11'},
    {note: 'B', position: '12'},
  ],
  G: [
    {note: 'G#', position: '1'},
    {note: 'A', position: '2'},
    {note: 'A#', position: '3'},
    {note: 'B', position: '4'},
    {note: 'C', position: '5'},
    {note: 'C#', position: '6'},
    {note: 'D', position: '7'},
    {note: 'D#', position: '8'},
    {note: 'E', position: '9'},
    {note: 'F', position: '10'},
    {note: 'F#', position: '11'},
    {note: 'G', position: '12'},
  ],
  D: [
    {note: 'D#', position: '1'},
    {note: 'E', position: '2'},
    {note: 'F', position: '3'},
    {note: 'F#', position: '4'},
    {note: 'G', position: '5'},
    {note: 'G#', position: '6'},
    {note: 'A', position: '7'},
    {note: 'A#', position: '8'},
    {note: 'B', position: '9'},
    {note: 'C', position: '10'},
    {note: 'C#', position: '11'},
    {note: 'D', position: '12'},
  ],
  A: [
    {note: 'A#', position: '1'},
    {note: 'B', position: '2'},
    {note: 'C', position: '3'},
    {note: 'C#', position: '4'},
    {note: 'D', position: '5'},
    {note: 'D#', position: '6'},
    {note: 'E', position: '7'},
    {note: 'F', position: '8'},
    {note: 'F#', position: '9'},
    {note: 'G', position: '10'},
    {note: 'G#', position: '11'},
    {note: 'A', position: '12'},
  ],
  E2: [
    {note: 'F', position: '1'},
    {note: 'F#', position: '2'},
    {note: 'G', position: '3'},
    {note: 'G#', position: '4'},
    {note: 'A', position: '5'},
    {note: 'A#', position: '6'},
    {note: 'B', position: '7'},
    {note: 'C', position: '8'},
    {note: 'C#', position: '9'},
    {note: 'D', position: '10'},
    {note: 'D#', position: '11'},
    {note: 'E', position: '12'},
  ],
};

const guitarStrings: GuitarString[] = ['E', 'B', 'G', 'D', 'A', 'E2'];

export const getQuestion = (): Question => {
  const randomGuitarStringNumber = Math.round(Math.random() * 5);
  const randomGuitarPositionNumber = Math.ceil(Math.random() * 12);

  const guitarString: GuitarString = guitarStrings[randomGuitarStringNumber];

  const question = {
    guitarString: guitarString,
    guitarPosition: guitarNotes[guitarString][randomGuitarPositionNumber],
  };
  return question;
};

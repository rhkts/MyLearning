import { atom, useAtom } from "jotai";
import { Note } from "./note.entity";

//atomを用意
const noteAtom = atom<Note[]>([]);

//atomを操作するフックを用意
export const useNoteStore = () => {
  const [note, setNote] = useAtom(noteAtom);

  const set = (newNotes: Note[]) => {
    setNote((oldNotes) => {
      const combineNotes = [...oldNotes, ...newNotes];

      const uniqueNotes: { [key: number]: Note } = {};

      for (const note of combineNotes) {
        uniqueNotes[note.id] = note;
      }

      return Object.values(uniqueNotes);
    });
  };

  return {
    getAll: () => note,
    set,
  };
};

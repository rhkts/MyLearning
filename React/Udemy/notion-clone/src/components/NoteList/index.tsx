import { cn } from "@/lib/utils";
import { NoteItem } from "./NoteItem";
import { useNoteStore } from "@/modules/notes/note.state";
import { useCurrentUserStore } from "@/modules/auth/current-user.state";
import { noteRepository } from "@/modules/notes/note.repository";
import { Note } from "@/modules/notes/note.entity";
import { useState } from "react";

interface NoteListProps {
  layer?: number;
  parentId?: number;
}

export function NoteList({ layer = 0, parentId }: NoteListProps) {
  const noteStore = useNoteStore();
  const notes = noteStore.getAll();
  const { currentUser } = useCurrentUserStore();
  const [expanded, setExpanded] = useState<Map<number, boolean>>(new Map());

  const createChild = async (event: React.MouseEvent, parentId: number) => {
    event.stopPropagation();
    const newNote = await noteRepository.create(currentUser!.id, { parentId });
    setExpanded((prev) => prev.set(parentId, true));
    noteStore.set([newNote]);
  };

  const fetchChildren = async (event: React.MouseEvent, note: Note) => {
    event.stopPropagation();
    const chilren = await noteRepository.find(currentUser!.id, note.id);
    if (chilren == null) return;

    noteStore.set(chilren);

    //アコーディオンを開く
    //prev→現在のアコーディオンの状態(false)が入っている
    setExpanded((prev) => {
      const newExpanded = new Map(prev);

      newExpanded.set(note.id, !prev.get(note.id));

      return newExpanded;
    });
  };

  return (
    <>
      <p
        className={cn(
          `hidden text-sm font-medium text-muted-foreground/80`,
          layer === 0 && "hidden"
        )}
        style={{ paddingLeft: layer ? `${layer * 12 + 25}px` : undefined }}
      >
        ページがありません
      </p>
      {notes
        .filter((note) => note.parent_document == parentId)
        .map((note) => {
          return (
            <div key={note.id}>
              <NoteItem
                note={note}
                layer={layer}
                expanded={expanded.get(note.id)}
                onExpand={(event: React.MouseEvent) =>
                  fetchChildren(event, note)
                }
                onCreate={(event) => createChild(event, note.id)}
              />
              {expanded.get(note.id) && (
                <NoteList layer={layer + 1} parentId={note.id} />
              )}
            </div>
          );
        })}
    </>
  );
}

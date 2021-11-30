import React from 'react'
import Note from '../Note/Note';
function NoteList({noteArr, setNoteArr, setSelectedTag}) {
  return (
    <div className="note-list">
      {
        noteArr.length > 0 ? noteArr.map(note => <Note 
          note={note} 
          setNoteArr={setNoteArr} 
          key={note.id}
          setSelectedTag={setSelectedTag}
        />) : <span>Заметок нет</span>
      }
    </div>
  )
}

export default NoteList

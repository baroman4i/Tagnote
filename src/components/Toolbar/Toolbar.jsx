import React from 'react'
import AddNote from '../AddNote/AddNote'
import ResetNotes from '../ResetNotes/ResetNotes'
import Select from '../UI/Select'

function Toolbar({setNoteArr, noteArr, selectedTag, setSelectedTag}) {
  return (
    <div className="toolbar">
      <AddNote 
        setSelectedTag={setSelectedTag} 
        setNoteArr={setNoteArr} 
        noteArr={noteArr}
      />
      <ResetNotes 
        setNoteArr={setNoteArr} 
        noteArr={noteArr}
      />
      <Select 
        selectedTag={selectedTag} 
        setSelectedTag={setSelectedTag}
      >
        {noteArr.map((note) => (note.tags))}
      </Select>
    </div>
  )
}

export default Toolbar

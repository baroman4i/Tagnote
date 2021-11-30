import React from 'react'
import Button from '../UI/Button'

function AddNote({setSelectedTag, setNoteArr, noteArr}) {
  return (
    <Button 
      onClick={
        () => {
          noteArr.length > 0 ? setNoteArr(prev => [...prev, {id: prev[prev.length-1].id+1, text: '', tags: []}]) : setNoteArr([{id: 0, text: '', tags: []}])
          setSelectedTag('')
        }
      } 
      className="add-note"
    >
      Add note
    </Button>
  )
}

export default AddNote

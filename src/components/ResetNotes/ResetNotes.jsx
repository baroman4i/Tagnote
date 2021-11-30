import React from 'react'
import Button from '../UI/Button'
function ResetNotes({setNoteArr, noteArr}) {
  return (
    <Button 
      onClick={
        () => noteArr.length > 0 ? (window.confirm('Are you sure you want to reset?') ? setNoteArr([]): null) : alert('Notes not found')
      } 
      className="add-note"
    >
      Reset All
    </Button>
  )
}

export default ResetNotes
import React from 'react'

function DelNote({setNoteArr, id}) {
  return (
    <button 
      onClick={
        () => setNoteArr(prev => prev.filter(note => note.id !== id))
      } 
      className="add-note"
    >
      Delete &#10006;
    </button>
  )
}

export default DelNote

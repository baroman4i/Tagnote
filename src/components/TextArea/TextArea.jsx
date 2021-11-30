import React from 'react'
import reactStringReplace from 'react-string-replace'
function TextArea({text, note, setText}) {
  return (
      <div className="note-container">
        <textarea 
          className="note-body" 
          onChange={e => {
            setText(e.target.value)
          }}
          placeholder='Choose this text...'
          rows={10}
          defaultValue={note.text || ''}
        > 
        </textarea>
        <p className="note-body">
          {reactStringReplace(text, /(?<=#)(\w+)/gum, (match, i) => (
          <span className="mark" key={i}>{match}</span>
        ))}
        </p>
      </div>
  )
}

export default TextArea

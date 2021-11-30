import React, {useState} from 'react'
import DelNote from '../DelNote/DelNote';
import TagList from '../TagList/TagList';
import TextArea from '../TextArea/TextArea';
import Button from '../UI/Button';

function Note({note, setNoteArr, setSelectedTag}) {
  const [text, setText] = useState(note.text)
  const updateTags = () => {
    const newTags = text.match(/(?<=#)(\w+)|(?<=#)[А-Яа-я]+/gum)
    return newTags !== null ? ([...new Set(newTags)].map((tag, index) => ({id: index, text: tag}))) : ([])
  }
  const updateNoteArr = () => {
      let textTags = [...updateTags(note)]
      setNoteArr(prev => [...prev.map(el => el.id === note.id ? {id: el.id, text: text, tags: [...textTags]} : el)])
  }
  return (
    <div className="note">
      <TagList 
        arrTags={note.tags}
        setSelectedTag={setSelectedTag}
      />
      <hr/>
      <TextArea 
        note={note}
        text={text} 
        setText={setText} 
      />
      <div className="note-footer">
        <Button 
          disabled={text === note.text} 
          className="save" 
          onClick={() => updateNoteArr()}
        >
          Save &#10004;
        </Button>
        <DelNote setNoteArr={setNoteArr} id={note.id}/>
      </div>
    </div>
  )
}

export default Note

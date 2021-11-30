import React, {useState, useEffect, useMemo} from 'react'
// import NoteInfo from './components/NoteInfo/NoteInfo';
import NoteList from './components/NoteList/NoteList';
import Toolbar from './components/Toolbar/Toolbar';
import {getData, setData} from './components/DataConn/DataConn';
import './scss/App.css';

const App = () => {
  const [selectedTag, setSelectedTag] = useState(' ')
  const [noteArr, setNoteArr] = useState([])
  
  const filteredNoteArr = useMemo(() => {
    if (selectedTag.trim() === '') {
      console.log(noteArr);
      return noteArr
    }
    else if (selectedTag.trim() !== '') {
      return noteArr.filter(note => note.tags.some(tag => (tag.text === selectedTag)))
    }
    else return []
  }, [selectedTag, noteArr])

  useEffect(() => {
    (async () => {
      const result = await getData();
      setNoteArr(result);
   })()
  }, []);

  useEffect(() => {
    noteArr.length > 0 && setData(noteArr)
    return () => {
      setData(noteArr)
    };
  }, [noteArr]);

  return (
    <div className="App">
      {/* <NoteInfo/> */}
      <Toolbar 
        selectedTag={selectedTag} 
        setSelectedTag={setSelectedTag} 
        setNoteArr={setNoteArr} 
        noteArr={noteArr}
      />
      <NoteList 
        setSelectedTag={setSelectedTag}
        noteArr={filteredNoteArr} 
        setNoteArr={setNoteArr}
      />
    </div>
  );
}

export default App;

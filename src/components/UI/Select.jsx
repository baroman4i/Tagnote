import React, {useEffect} from 'react'

function Select({children, selectedTag, setSelectedTag}) {
  const [uniqueTags, setUniqueTags] = React.useState([])
  useEffect(() => {
      setUniqueTags([])
  }, [children])

  children.forEach(note => {
    note.forEach(tag => {
      if (uniqueTags.indexOf(tag.text) === -1) {
        setUniqueTags(prev => [...prev, tag.text])
      }
    })
  }
  )
  
  return (
    <select value={selectedTag} onChange={e => {
      setSelectedTag(e.target.value)
    }}>
      <option value='' key={-1}>Select tag...</option>
      {[...new Set(uniqueTags)].map((tag, index) => (<option value={tag} key={index}>{tag}</option>))}
    </select>
  )
}

export default Select

import React from 'react'

function TagList({arrTags, setSelectedTag}) {
  return (
    <ul className="tag-list">
      {arrTags.map(tag => 
        <li onClick={(e) => setSelectedTag(e.target.innerText)} key={tag.id}>{tag.text}</li>)}
    </ul>
  )
}

export default TagList

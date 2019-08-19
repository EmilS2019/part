import React from 'react'

const Note = ({ note, toggleImportance, deleteNote }) => {
  
  const label = note.important ? 'make unimportant' : 'make important'
  
  return (   
    <li>
      <button onClick={deleteNote}>delete</button>
      <button onClick={toggleImportance}>{label}</button>
      {note.content}
    </li>
  )
}

export default Note
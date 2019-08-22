import React from 'react'

const Note = ({ note, toggleImportance, deleteNote }) => {
  
  const label = note.important ? 'make unimportant' : 'make important'
  
  return (   
    <li className="note">
      <h1> {note.content} </h1>
      <button onClick={deleteNote} className="btn">delete</button>
      <button onClick={toggleImportance} className="btn">{label}</button>
    </li>
  )
}

export default Note
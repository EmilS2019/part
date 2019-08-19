import React, { useState, useEffect } from 'react'
import Note from './Note.js'
import axios from 'axios'
import './index.css'
import noteService from './services/notes'



const App = () => {
  const [notes, setNotes] = useState([]) 
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true) 

  useEffect(() =>{
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  //useEffect()

  const notesToShow = showAll ? notes : notes.filter(note => note.important)  

  const toggleImportanceOf = id =>{
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
    .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
  }

  const deleteNote = id =>{
    noteService.deleteNote(id)        
    .then(response=>{ axios.delete(`${noteService.baseUrl}/${id}`)
    console.log("Target eliminated")
    setNotes(notes.filter(note => note.id === id ? false : true))})
  }

  const rows = () => notesToShow.map(note =>
      <Note
      key={note.id}
      note={note}
      toggleImportance={() => toggleImportanceOf(note.id)}
      deleteNote={() => deleteNote(note.id)}
      />
  )

  const handleNoteChange = (event) => {
      setNewNote(event.target.value)
  }

  const addNote = (event) => {
      event.preventDefault()
      
      const noteObject = {
          id: notes.length + 1,
          content: newNote,
          date: new Date().toISOString(),
          important: Math.random() > 0.5,
      }

      noteService
      .create(noteObject)
      .then(returnedNote =>{
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote} 
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>


      </form>
        <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
            </button>
    </div>
  )
}

export default App 
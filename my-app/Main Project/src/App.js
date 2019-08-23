import React, { useState, useEffect } from 'react'
import Note from './Note.js'
import axios from 'axios'
import './index.css'
import noteService from './services/notes'

//npx json-server --port 3001 --watch db.json

const Footer = () =>{
  const footerStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    color: 'white',
    fontStyle: 'italic',
    background:'#333',
    textAlign: 'center',
    left: '0'

  }

  return (
  <div style={footerStyle}>
    <br />
    <em>Note app, Kattenelvis</em>
  </div>)
} 

const Notification = ({ message }) => {
  if (message === null){
      return null
  }
  return (
      <div className="error">
          {message}
      </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([]) 
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('Some error happened...') 

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
      setErrorMessage(
        `Note '${note.content}' was already removed from server`
        )
        setTimeout(() =>{
          setErrorMessage(null)
        }, 5000)
            
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
      <div className="contentWrap">
      <h1>Notes</h1>

      <Notification message={errorMessage}/>

      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote} className="addNoteForm">
        <h1>Add Note</h1>
        <input
          value={newNote} 
          onChange={handleNoteChange}
        />
        <button type="submit" className="btn">save</button>

      </form>
        <button onClick={() => setShowAll(!showAll)} className="btn">
            show {showAll ? 'important' : 'all'}
            </button>
            
      </div>

      <Footer />
    </div>

  )
}

export default App 
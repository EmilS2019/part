import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import axios from 'axios'
import backend from './backend'

  const CheckForDuplicate = (theArray, item) =>{

    for (let i = 0; i < theArray.length; i++) {
      const element = theArray[i];
      
      if (element.name === item){
        window.alert(`${item} already exists in list`)
        return false
      }

    }
    return true
  }
  
  const rows = (toMap) => toMap.map(name =>        
        <li key={name.id}>{name.name} {name.pNumber}</li>
        )
    
  let newID = 15

const App = () => {

  const [ newName, setNewName ] = useState('') 
  const [ newPNum, setNewPNum ] = useState('') 
  const [ persons, setPersons ] = useState([]) 
  const [showAll, setShowAll] = useState([])  
  const [searchTerm, setSearchTerm] = useState('')  

  useEffect(() => {
    backend.getNumbers()
    .then(persons => {
      console.log(persons)
      setPersons(persons)
      setShowAll(persons)
    })
 }, [])

  const handleSearch = (event) => {
    let searchValue = event.target.value
    setSearchTerm(searchValue)
      
      showNumbers(searchValue)    
  }

  const showNumbers = (term) =>{
    setShowAll(persons)

    setShowAll(persons.filter(person => 
      person.name.toUpperCase().includes(term.toUpperCase()) 
      || person.pNumber.includes(term.toUpperCase())))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const number = {
        id: newID,
        name: newName,
        pNumber: newPNum
    }

    backend
    .addNumber(number)
    .then(returnednumber =>{
      console.log(returnednumber)
      setPersons(persons.concat(returnednumber))
      setNewName('')
      setNewPNum('')
    })
  }
  
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  } 

  const handlePNumChange = (event) =>{
    setNewPNum(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>Search <input value={searchTerm} onChange={handleSearch} /></div>
      <br/>

      <h2>Add new Number</h2>
      <form onSubmit={handleSubmit}>      
        <div>Name: <input value={newName} onChange={handleNameChange}/></div>
        <div>Number: <input value={newPNum} onChange={handlePNumChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <br/>

      <h2>Numbers</h2>
      <ul>
        {rows(showAll)}
      </ul>
      <button >debug</button>
    </div>
  )
}

export default App

ReactDOM.render(
  <App />, document.getElementById('root'))
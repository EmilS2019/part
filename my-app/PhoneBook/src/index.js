import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import axios from 'axios'
import backend from './backend'

  /*const CheckForDuplicate = (theArray, item) =>{

    for (let i = 0; i < theArray.length; i++) {
      const element = theArray[i];
      
      if (element.name === item){
        window.alert(`${item} already exists in list`)
        return false
      }

    }
    return true
  }*/

const App = () => {

    const Rows = ({name, pNumber, deleteNumber}) =>{
        return <li> <button onClick={deleteNumber}>Delete</button> {name} {pNumber}</li>
    }
    
    const rows = (toMap) => toMap.map(name =>        
          <Rows 
          key={name.id}     
          name={name.name}
          pNumber={name.pNumber}
          deleteNumber ={() => deleteNum(name.id)}
          />   
          )


  const [ newName, setNewName ] = useState('') 
  const [ newPNum, setNewPNum ] = useState('') 
  const [ persons, setPersons ] = useState([]) 
  const [showAll, setShowAll] = useState([])  
  const [searchTerm, setSearchTerm] = useState('')  

  useEffect(() => {
    backend.getNumbers()
    .then(persons => {
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

  let newID = persons.length + 1

    const handleSubmit = (event) => 
    {
        event.preventDefault()
        
        const number = {
            id: newID,
            name: newName,
            pNumber: newPNum
        }

        let replaceExistingName = false;
        let replaceWithThisID = 0;
        console.log(persons)
        persons.forEach(num => {

            if (num.name === number.name){
                replaceExistingName = true
                replaceWithThisID = num.id
            }
        })

        if (!replaceExistingName){    
            const addnum = backend.addNumber(number)
            addnum.then(returnednumber => {
            setPersons(persons.concat(returnednumber))
            setShowAll(persons.concat(returnednumber))
            newID++})
        }
        else
        {
            const addnum = backend.editNumber(number, replaceWithThisID)
            addnum.then(returnednumber => 
            {
                persons[replaceWithThisID - 1] = returnednumber
                setPersons(persons)
                console.log(persons)
                setShowAll(persons)
            })
        }                               
        setNewName('')
        setNewPNum('')
    }
  
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  } 

  const handlePNumChange = (event) =>{
    setNewPNum(event.target.value)
  }

  const deleteNum = (id) =>{
    if(window.confirm("Are you sure you wan't to delete this number?")){
        backend.deleteNumber(id).then(
            setPersons(persons.filter(person => 
                person.id === id ? false : true
            )),
            setShowAll(persons.filter(person => 
                person.id === id ? false : true
            )))
    }}
      
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
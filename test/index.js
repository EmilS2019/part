/*
npm init
node index.js  OR   npm start
npm install express --save
npm install --save-dev nodemon
node_modules/.bin/nodemon index.js
*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const DoesItemExistInArray = (item, array) =>{
    let x = true;
    array.forEach(element => {
        if (element.name === item.name) x = false})
    return x
}

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Kattenelvis",
        number: "666",
        id: 2       
    },
    {
        name: "The Devil",
        number: "69420",
        id: 3
    }
]

app.get('/', (req, res) =>{
    res.send('<h1>hi</h1>')
})

app.get('/api/persons', (req, res) =>{
    res.send(persons)
})

app.get('/api/persons/:id', (req, res) =>{

    const id = Number(req.params.id)
    res.send(persons[id - 1])
})

app.delete('/api/persons/:id', (req, res) =>{
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) =>{
    
    const body = req.body
    
    if (!body){
        return res.status(400).json({
            error: 'content missing'
        })
    }

    let newID = Math.floor((Math.random() * Math.floor(50000000)))
    let person = {
        name: body.name,
        number: body.number,
        id: newID
    }

    if (!person.name || !person.number){
        res.status(400).json({
            error:'Fields cannot be empty'
        })
    }
    if (!DoesItemExistInArray(person, persons)){
        res.status(400).json({
            error:'Name already exist in phonebook'
        })
    }
    persons = persons.concat(person)
    res.json(person)
})

app.get('/info', (req, res) =>{
    res.send(
        `<p>Phonebook has info for ${persons.length} people<p> 
        <br/>
        ${new Date}`
    )
})


const port = 3001
app.listen(port)
console.log(`listening to port ${port}`)
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const App = () => {
  const [selected, setSelected] = useState(0)
  const [Vote, setVote] = useState (0)

    const changeAnectode = () =>{
        if (selected < anecdotes.length -1)
            setSelected(selected + 1)        
        else
            setSelected(0)            
    }

    const vote = () => setVote(anecdoteVotes[selected] +=   1 )    

    const findMostUpvotedAnectode = () => {
        
        let mostUpvotes = 0;
        let theOneWithMostVotes = 0;
        for (let i = 0; i < anecdotes.length; i++) {
            if (anecdoteVotes[i] > mostUpvotes) {
                theOneWithMostVotes = i
                mostUpvotes = anecdoteVotes[i]
            }
        }

        return theOneWithMostVotes;
    }

  return (
    <main>
        <div>
            <h1>Anecdote for the day</h1>
        </div>
        <div>
            <h4>{anecdotes[selected]}</h4>
        </div>
        <div>
            <button onClick={changeAnectode}>Change Anecdote</button>
            <button onClick={vote}>Vote</button> 
            {anecdoteVotes[selected]}
        </div>
        <div>
            <h1>Most upvoted Anecdote</h1>
            <h4>{anecdotes[findMostUpvotedAnectode()]}</h4>
        </div>
    </main>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const anecdoteVotes = [
    0,
    0,
    0,
    0,
    0,
    0,
]

ReactDOM.render(<App />, 
    document.getElementById('root')
    )
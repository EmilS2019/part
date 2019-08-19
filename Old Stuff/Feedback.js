import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

    const handleGood = () =>{
        setGood(good + 1)
        handleTotal()
    }
    const handleNeutral = () =>{
        setNeutral(neutral + 1)
        handleTotal()
    }
    const handleBad = () =>{
        setBad(bad+ 1)
        handleTotal()
    }
    
    const handleTotal = () =>{
        setTotal(total + 1)
        averageScore()
        averagePositive();
    }

    const averageScore = () =>{
        setAverage((good*1 + good*0 + bad*-1)/total) 
    }

    const averagePositive = () =>{
        setPositive((good / total )*100)
    }

  return (
      <main>
          <h1>Give Feedback</h1>

          <button onClick={handleGood}>Good</button>
          <button onClick={handleNeutral}>Neutral</button>
          <button onClick={handleBad}>Bad</button>

        <div>
            <h1>Statistics</h1>
            <table class="table">
                <tr><td><h3>Good: {good}</h3></td></tr>
                <tr><td><h3>Neutral: {neutral}</h3></td></tr>
                <tr><td><h3>Bad: {bad}</h3></td></tr>
                <tr><td><h3>Total: {total}</h3></td></tr>
                <tr><td><h3>Average: {average}</h3></td></tr>
                <tr><td><h3>Positive: {positive}%</h3></td></tr>
            </table>
        </div>


      </main>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
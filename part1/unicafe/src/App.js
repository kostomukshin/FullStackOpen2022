import { useState } from 'react'
import Button from './Components/Button'
import Statistics from './Components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
    <h2> Give feedback </h2>

    <Button handleClick={() => setGood(good+1)} text="good" />
    <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
    <Button handleClick={() => setBad(bad+1)} text="bad" />

    <h2> Statistics </h2>

    <Statistics good={good} neutral={neutral} bad={bad}/>

    


    </div>
  )
}

export default App;
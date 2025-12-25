import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.name}</h1>
}

const Button = (props) => {
  return  <button onClick={props.onClick}>
            {props.text}
          </button>
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = ((good - bad)/all).toFixed(1);
  if(all === 0){
    return <p>No feedback given</p>;
  }else {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='all' value={all}/>
            <StatisticLine text='average' value={average}/>
            <StatisticLine text='positive' value={((good/all)*100).toFixed(1) + " %"}/>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good +1);
  }

  const addNeutral = () => {
    setNeutral(neutral +1);
  }

  const addBad = () => {
    setBad(bad +1);
  }

  return (
    <div>
      <Header name='give feedback'/>
      <Button onClick={addGood} text='good'/>
      <Button onClick={addNeutral} text='neutral'/>
      <Button onClick={addBad} text='bad'/>
      <Header name='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
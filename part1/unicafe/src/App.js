import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

const Buttons = ({
  good,
  setGood,
  neutral,
  setNeutral,
  bad,
  setBad
}) => {
  return (
    <>
      <Button clickHandler={() => setGood(good+1)} value="good" />
      <Button clickHandler={() => setNeutral(neutral+1)} value="neutral" />
      <Button clickHandler={() => setBad(bad+1)} value="bad" />
    </>
  )
}

const Button = ({ clickHandler, value }) => {
  return (
    <>
      <button onClick={clickHandler}>{value}</button>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good+neutral+bad

  return (good!==0 || bad!==0 || neutral!==0) ? (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="total" value={good+neutral+bad} />
          <StatisticLine text="average" value={(good-bad)/total} />
          <StatisticLine text="positive" value={good*100/total+" %"} />
        </tbody>
      </table>
    </>
  ) : (
    <p>No feedback given</p>
  )
}

const StatisticLine = ({ text, value }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App;

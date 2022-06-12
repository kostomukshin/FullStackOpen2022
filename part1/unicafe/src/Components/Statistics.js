import React from 'react';

const StatisticLine = ({text, value}) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
)

const Statistics = ({good, neutral, bad}) => {
    const all = good+neutral+bad
    const average = (1/all*good) - (1/all*bad)
    const perc = (good/all)*100

    if (all === 0) {
        return <p>No feedback given</p>
    }

    return (
        <div>
        <table>
            <tbody>
            <StatisticLine text='good' value={good}/>
            <StatisticLine text='neutral' value={neutral}/>
            <StatisticLine text='bad' value={bad}/>
            <StatisticLine text='all' value={all}/>
            <StatisticLine text='average' value={average}/>
            <StatisticLine text='positive' value={perc + '%'}/>
            </tbody>
        </table>
        </div>
    )


}


export default Statistics;
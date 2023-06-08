/*
 * @Author: lijiaxia
 * @Date: 2023-06-08 20:45:50
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part1/unicafe/src/App.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-06-08 21:48:55
 */
import { useState } from "react";

const Button = (props) => {
    const { text, handleClick } = props;

    return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = (props) => {
    const { text, value } = props;

    return (
        <tr>
            <td>
                {text} {value}
            </td>
        </tr>
    );
};

const Statistics = (props) => {
    const { good, neutral, bad, all } = props;

    const getAverage = () => (good * 1 + 0 + bad * -1) / all;
    const getPositive = () => (good / all) * 100;

    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        );
    }

    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text="good" value={good}></StatisticLine>
                    <StatisticLine
                        text="neutral"
                        value={neutral}
                    ></StatisticLine>
                    <StatisticLine text="bad" value={bad}></StatisticLine>
                    <StatisticLine text="all" value={all}></StatisticLine>
                    <StatisticLine
                        text="average"
                        value={getAverage() || 0}
                    ></StatisticLine>
                    <StatisticLine
                        text="positive"
                        value={`${getPositive()}%` || `0%`}
                    ></StatisticLine>
                </tbody>
            </table>
        </div>
    );
};

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);

    const handleClick = (type) => () => {
        switch (type) {
            case "good":
                setGood(good + 1);
                break;
            case "neutral":
                setNeutral(neutral + 1);
                break;
            case "bad":
                setBad(bad + 1);
                break;
            default:
                break;
        }

        setAll(all + 1);
    };

    return (
        <div>
            <div>
                <h1>give feedback</h1>
                <p>
                    <Button
                        handleClick={handleClick("good")}
                        text="good"
                    ></Button>
                    <Button
                        handleClick={handleClick("neutral")}
                        text="neutral"
                    ></Button>
                    <Button
                        handleClick={handleClick("bad")}
                        text="bad"
                    ></Button>
                </p>
            </div>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                all={all}
            ></Statistics>
        </div>
    );
};

export default App;

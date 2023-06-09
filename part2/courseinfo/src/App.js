/*
 * @Author: lijiaxia
 * @Date: 2023-06-09 14:00:56
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/courseinfo/src/App.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-06-09 14:38:50
 */

import Course from './components/Course'

const App = () => {
    const courses = [
        {
            id: 1,
            name: "Half Stack application development",
            parts: [
                {
                    id: 1,
                    name: "Fundamentals of React",
                    exercises: 10,
                },
                {
                    id: 2,
                    name: "Using props to pass data",
                    exercises: 7,
                },
                {
                    id: 3,
                    name: "State of a component",
                    exercises: 14,
                },
                {
                    id: 4,
                    name: "Redux",
                    exercises: 11,
                },
            ],
        },
        {
            id: 2,
            name: "Node.js",
            parts: [
                {
                    id: 1,
                    name: "Routing of React",
                    exercises: 3,
                },
                {
                    id: 2,
                    name: "Middlewares",
                    exercises: 7,
                },
            ],
        },
    ];

    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map((course) => (
                <Course key={course.id} course={course} />
            ))}
        </div>
    );
};

export default App;

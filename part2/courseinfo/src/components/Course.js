/*
 * @Author: lijiaxia
 * @Date: 2023-06-09 14:33:56
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/courseinfo/src/components/course.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-06-09 14:39:03
 */
import React from 'react'

const Header = ({ course }) => <h3>{course}</h3>;

const Total = ({ course }) => {
    const total = course.parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0
    );

    return (
        <p>
            <strong>total of {total} exercises</strong>
        </p>
    );
};

const Part = ({ part }) => (
    <p>
        {part.name} {part.exercises}
    </p>
);

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
        </div>
    );
};

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total course={course} />
        </div>
    );
};

export default Course
/*
 * @Author: lijiaxia
 * @Date: 2023-06-09 13:30:30
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/part2-1/src/index.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-03 23:42:10
 */
import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true,
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        date: "2019-05-30T18:39:34.091Z",
        important: false,
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true,
    },
];

ReactDOM.createRoot(document.getElementById("root")).render(
    <App notes={notes} />
);

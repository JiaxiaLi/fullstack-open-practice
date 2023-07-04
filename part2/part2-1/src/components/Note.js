/*
 * @Author: lijiaxia
 * @Date: 2023-06-09 13:51:47
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/part2-1/src/components/Note.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-03 23:43:43
 */
import React from "react";

const Note = ({ note, toggleImportant }) => {
    const label = note.important ? "make not important" : "make important";
    return (
        <li className="note">
            {note.content}
            <button onClick={toggleImportant}>{label}</button>
        </li>
    );
};

export default Note;

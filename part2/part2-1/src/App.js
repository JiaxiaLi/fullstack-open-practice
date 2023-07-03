/*
 * @Author: lijiaxia
 * @Date: 2023-06-09 13:30:30
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/part2-1/src/App.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-03 23:50:05
 */
import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";
import Notification from "./components/Notication"

const App = (props) => {
    const [notes, setNotes] = useState(props.notes);
    const [newNote, setNewNote] = useState("a new note");
    const [showAll, setShowAll] = useState(true);
    const [errorMessage, setErrorMessage] = useState('some error happened...');

    const hook = () => {
        noteService.getAll().then((initialNotes) => {
            setNotes(initialNotes);
        });
    };
    useEffect(hook, []);

    const notesToShow = showAll
        ? notes
        : notes.filter((note) => note.important);

    const addNote = (event) => {
        event.preventDefault();

        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        };

        noteService.create(noteObject).then((returnNote) => {
            setNotes(notes.concat(returnNote));
            setNewNote("");
        });
    };

    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    };

    const toggleImportantOf = (id) => {
        const note = notes.find((n) => n.id === id);
        const changedNote = { ...note, important: !note.important };

        noteService
            .update(id, changedNote)
            .then((returnNote) => {
                setNotes(
                    notes.map((note) => (note.id !== id ? note : returnNote))
                );
            })
            .catch((error) => {
                setErrorMessage(`Note '${note.content}' was already removed from server`)
                setTimeout(()=>{
                    setErrorMessage(null)
                },5000)
                setNotes(notes.filter((n) => n.id !== id));
            });
    };

    return (
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? "important" : "all"}
                </button>
            </div>
            <ul>
                {notesToShow.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportant={() => toggleImportantOf(note.id)}
                    ></Note>
                ))}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">save</button>
            </form>
        </div>
    );
};

export default App;

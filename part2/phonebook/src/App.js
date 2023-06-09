/*
 * @Author: lijiaxia
 * @Date: 2023-06-09 15:03:17
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/phonebook/src/App.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-06-09 16:14:58
 */
import { useState } from "react";

const Filter = ({ persons }) => {
    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleChangeSearchText = (event) => {
        setSearchText(event.target.value);
        searchPersonName(event.target.value);
    };

    const searchPersonName = (value) => {
        let result = [];
        persons.forEach((person) => {
            if (person.name.toLowerCase().includes(value) === true) {
                result.push(person);
            }
        });
        setSearchResult(result);
    };

    return (
        <div>
            <div>
                filter shown with
                <input value={searchText} onChange={handleChangeSearchText} />
            </div>
            {searchResult.map((result) => (
                <div key={result.name}>
                    {result.name} {result.number}
                </div>
            ))}
        </div>
    );
};

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState("");
    const [number, setNumber] = useState("");

    const handleChangeNewName = (event) => {
        setNewName(event.target.value);
    };
    const handleChangeNumber = (event) => {
        setNumber(event.target.value);
    };

    const addPerson = (event) => {
        event.preventDefault();

        let index = persons.findIndex((person) => person.name === newName);

        if (index > -1) {
            return alert(`${newName} is already added to phonebook`);
        }

        const personObj = {
            name: newName,
            number: number,
        };

        setPersons(persons.concat(personObj));
        setNewName("");
        setNumber("");
    };

    return (
        <div>
            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input value={newName} onChange={handleChangeNewName} />
                </div>
                <div>
                    number:
                    <input value={number} onChange={handleChangeNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
};

const Persons = ({ persons }) => {
    return (
        <div>
            {persons.map((person) => (
                <Person key={person.name} person={person}></Person>
            ))}
        </div>
    );
};

const Person = ({ person }) => {
    return (
        <div>
            {person.name} {person.number}
        </div>
    );
};

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter persons={persons}></Filter>
            <h2>Add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons}></PersonForm>
            <h2>Numbers</h2>
            <Persons persons={persons}></Persons>
        </div>
    );
};

export default App;

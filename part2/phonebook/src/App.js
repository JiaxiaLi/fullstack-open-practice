/*
 * @Author: lijiaxia
 * @Date: 2023-06-09 15:03:17
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/phonebook/src/App.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-04 00:11:22
 */
import { useState, useEffect } from "react";
import personService from "./services/person.js";
import Notification from "./components/Notication.js";

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

const PersonForm = ({ persons, setPersons, setMessage, setMessageType }) => {
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
            let result = window.confirm(
                `${newName} is already added to phonebook,replace the old number with a new one?`
            );
            if (result) {
                let personObj = {
                    name: persons[index].name,
                    number: number,
                };
                personService
                    .update(persons[index].id, personObj)
                    .then((returnData) => {
                        personService.getAll().then((initialPersons) => {
                            setPersons(initialPersons);
                            setNewName("");
                            setNumber("");
                        });
                    });
            }
            return;
        }

        const personObj = {
            name: newName,
            number: number,
        };

        personService.create(personObj).then((returnData) => {
            personService.getAll().then((initialPersons) => {
                setPersons(initialPersons);
                setNewName("");
                setNumber("");
                setMessage(`Added ${newName}`);
                setMessageType("success");
            });
        });
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

const Persons = ({ persons, setPersons, setMessage, setMessageType }) => {
    const removePerson = (id, name) => {
        personService
            .remove(id)
            .then(() => {
                let tempObjct = [];
                persons.forEach((person) => {
                    if (person.id !== id) {
                        tempObjct.push(person);
                    }
                });
                setPersons(tempObjct);
            })
            .catch(() => {
                setMessage(
                    `Information of ${name} has already been removed from server`
                );
                setMessageType("error");
            });
    };
    return (
        <div>
            {persons.map((person) => (
                <Person
                    key={person.name}
                    person={person}
                    removePerson={() => removePerson(person.id, person.name)}
                ></Person>
            ))}
        </div>
    );
};

const Person = ({ person, removePerson }) => {
    return (
        <div>
            {person.name} {person.number}
            <button onClick={removePerson}>delete</button>
        </div>
    );
};

const App = () => {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState("success");

    const hook = () => {
        personService.getAll().then((initialPersons) => {
            setPersons(initialPersons);
        });
    };
    useEffect(hook, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} messageType={messageType} />
            <Filter persons={persons}></Filter>
            <h2>Add a new</h2>
            <PersonForm
                persons={persons}
                setPersons={setPersons}
                setMessage={setMessage}
                setMessageType={setMessageType}
            ></PersonForm>
            <h2>Numbers</h2>
            <Persons
                persons={persons}
                setPersons={setPersons}
                setMessage={setMessage}
                setMessageType={setMessageType}
            ></Persons>
        </div>
    );
};

export default App;

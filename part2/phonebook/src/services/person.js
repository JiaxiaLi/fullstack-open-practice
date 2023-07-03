/*
 * @Author: lijiaxia
 * @Date: 2023-07-03 23:01:15
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/phonebook/src/services/person.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-03 23:11:19
 */
import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};
const create = (newObject) => {
    const request = axios.post(baseUrl, newObject);
    return request.then((response) => response.data);
};

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then((response) => response.data);
};
const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then((response) => response.data);
};

export default { getAll, create, update,remove };
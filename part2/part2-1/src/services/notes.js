/*
 * @Author: lijiaxia
 * @Date: 2023-07-03 21:40:36
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/part2-1/src/services/notes.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-03 21:57:32
 */
import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

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

export default { getAll, create, update };

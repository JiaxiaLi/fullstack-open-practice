/*
 * @Author: lijiaxia
 * @Date: 2023-06-27 13:19:08
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/dataforcountries/src/components/Country.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-03 17:09:55
 */

import React from "react";

const Country = (props) => {
    const { country } = props;

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt="flag" />
        </div>
    );
};

export default Country;

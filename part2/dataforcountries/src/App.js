/*
 * @Author: lijiaxia
 * @Date: 2023-06-27 12:11:41
 * @Email: lijiaxia@3ncto.com
 * @FilePath: /part2/dataforcountries/src/App.js
 * @LastEditors: lijiaxia
 * @LastEditTime: 2023-07-03 17:17:33
 */
import { useState } from "react";
import axios from "axios";

import Country from "./components/Country";
import Weather from "./components/Weather";

const App = () => {
    const [searchText, setSearchText] = useState("");
    const [searchList, setSearchList] = useState([]);
    const [countryInfo, setCountryInfo] = useState({});
    

    const handleChangeSearchText = (event) => {
        let value = event.target.value;
        setSearchText(value);
        if (value.length > 0) {
            let api = `https://restcountries.com/v3.1/name/${value}`;
            axios
                .get(api)
                .then((response) => {
                    setSearchList(response.data);

                    if (response.data.length === 1) {
                        setCountryInfo(response.data[0]);
                    }else{
                        setCountryInfo({});
                    }
                })
                .catch(() => {
                    setSearchList([]);
                });
        }
    };

    const handleShowCountryInfo = (item, event) => {
        setCountryInfo(item);
    };

    let length = searchList.length;

    if (length > 10) {
        return (
            <div>
                <div>
                    <label>find countries</label>
                    <input
                        value={searchText}
                        onChange={handleChangeSearchText}
                    />
                </div>
                <div>Too many matches,specify another filter</div>
            </div>
        );
    }

    if (length <= 10 && length > 1) {

        if(Object.keys(countryInfo).length > 0){
            return (
                <div>
                    <div>
                        <label>find countries</label>
                        <input
                            value={searchText}
                            onChange={handleChangeSearchText}
                        />
                    </div>
                    <Country country={countryInfo}></Country>
                    <Weather countryName={countryInfo.name.common}></Weather>
                </div>
            );
        }else{
            return (
                <div>
                    <div>
                        <label>find countries</label>
                        <input
                            value={searchText}
                            onChange={handleChangeSearchText}
                        />
                    </div>
                    <div>
                        <ul>
                            {searchList.map((item) => (
                                <li key={item.name.common}>
                                    {item.name.common}
                                    <button
                                        onClick={(event) =>
                                            handleShowCountryInfo(item, event)
                                        }
                                    >
                                        show
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }
    if (length === 1) {
        return (
            <div>
                <div>
                    <label>find countries</label>
                    <input
                        value={searchText}
                        onChange={handleChangeSearchText}
                    />
                </div>
                <Country country={countryInfo}></Country>
                <Weather countryName={countryInfo.name.common}></Weather>
            </div>
        );
    }
    if (length === 0) {
        return (
            <div>
                <div>
                    <label>find countries</label>
                    <input
                        value={searchText}
                        onChange={handleChangeSearchText}
                    />
                </div>
            </div>
        );
    }
};

export default App;

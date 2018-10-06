
import React from "react";
import "./Search.css";

const Search = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="5">
                        Search.js
                        <br />
                        <input type="text" placeholder="search..." id="myInput" />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        reset
                        <br />
                        search
                    </td>
                    <td>
                        search by
                        <br />
                        author
                    </td>
                    <td>
                        search by
                        <br />
                        year
                    </td>
                    <td>
                        search by
                        <br />
                        eBook year
                    </td>
                    <td>
                        search by
                        <br />
                        series
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Search;


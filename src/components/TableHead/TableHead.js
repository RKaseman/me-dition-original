
import React from "react";
import "./TableHead.css";

const TableHead = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="4">
                        TableHead.js thead
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        *
                    </td>
                    <td>
                        sort by
                        <br />
                        author
                    </td>
                    <td>
                        sort by
                        <br />
                        series
                    </td>
                    <td>
                        <img
                        className="App-card"
                        src={props.image}
                        onClick={() => props.gameStatus(props.id)}
                        alt="" />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableHead;


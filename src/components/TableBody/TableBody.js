
import React from "react";
import "./TableBody.css";

const TableBody = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        {props.title}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img
                        className="bookCover"
                        src={props.cover}
                        alt=""
                        />
                    </td>
                    <td>
                        {props.author}
                    </td>
                    <td>
                        {props.series}
                    </td>
                    <td>
                        <img
                        className="App-card"
                        src={props.image}
                        onClick={() => props.gameStatus(props.id)}
                        alt=""
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableBody;


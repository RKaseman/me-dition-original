
import React from "react";
import "./TableBody.css";

const TableBody = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th colSpan="5">
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
                        {props.published}
                    </td>
                    <td>
                        {props.kindle}
                    </td>
                    <td>
                        {props.series} {props.number}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableBody;


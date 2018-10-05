
import React from "react";
import "./ModuleContent.css";

const ModuleContent = (props) => {
    return (
        <table className="table">
            <thead>thead</thead>
            <tr>
                <td>
                    {props.cover}
                </td>
                <td>
                    {props.id}
                </td>
                <td>
                    <img
                    className="App-card"
                    src={props.image}
                    onClick={() => props.gameStatus(props.id)}
                    alt="" />
                </td>
            </tr>
        </table>
    );
};

export default ModuleContent;


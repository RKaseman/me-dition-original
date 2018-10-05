
import React from "react";
import "./ModuleHead.css";
// import logo from '../../logo.svg';

const ModuleHead = (props) => {
    return (
        <header className="App-header flex-container">
            <div className="headerLeft">
                <p>
                    Scan a book
                </p>
            </div>
            <div className="headerMiddle">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <h1 className="App-title">Me-dition</h1>
            </div>
            <div className="headerRight">
                <p>
                    Search Library {props.count}
                </p>
            </div>
        </header>
    );
};

export default ModuleHead;


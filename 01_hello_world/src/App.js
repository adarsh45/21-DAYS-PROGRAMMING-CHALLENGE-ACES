import React from "react";
import "./style.css";
import Button from "./Button";

function App() {
    return ( 
        <div>
        <h1> Hello World </h1>
        <Button title="Play Store" />
        <Button title="App Store" />
        {/* <button className="button">App Store</button>
        <button className="button">Play Store</button> */}
        </div>
    );
}

export default App;
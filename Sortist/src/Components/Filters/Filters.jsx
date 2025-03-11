import { useState } from "react";
import "./Filters.css";

function Filters() {
    const [selected, setSelected] = useState("white"); // "All" is selected by default

    function bg(value) {
        setSelected(value);
    }

    return (
        <>
            <button 
                onClick={() => bg("white")} 
                id="white" 
                style={{ 
                    backgroundColor: selected === "white" ? "white" : "transparent", 
                    color: selected === "white" ? "black" : "white",
                    border: "2px solid white"
                }}>
                All
            </button>
            <button 
                onClick={() => bg("green")} 
                id="green" 
                style={{ 
                    backgroundColor: selected === "green" ? "green" : "transparent", 
                    color: selected === "green" ? "black" : "green",
                    border: "2px solid green"
                }}>
                Completed
            </button>
            <button 
                onClick={() => bg("red")} 
                id="red" 
                style={{ 
                    backgroundColor: selected === "red" ? "red" : "transparent", 
                    color: selected === "red" ? "black" : "red",
                    border: "2px solid red"
                }}>
                Pending
            </button>
        </>
    );
}

export default Filters;

import React, { useState } from "react";

export default function TextForm(props) {
    const [txt, setText] = useState("");
    const handleUpperCase = () => {
        setText(txt.toUpperCase());
    };
    const handleLowerCase = () => {
        setText(txt.toLowerCase());
    };
    const handleClear = () => {
        setText("");
    };
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className="container">
                <label htmlFor="textBox"><h1 className="my-3">{props.heading}</h1></label>
                <div className="mb-3">
                    <textarea
                        className={`form-control bg-${props.mode} text-${props.textColor}`}
                        id="textBox"
                        rows="8"
                        value={txt}
                        onChange={handleOnChange}
                        placeholder="Enter text here"
                    ></textarea>
                </div>
                <button className="btn btn-primary m-1" onClick={handleUpperCase}>Convert to uppercase</button>
                <button className="btn btn-primary m-1" onClick={handleLowerCase}>Convert to lowercase</button>
                <button className="btn btn-secondary m-1" onClick={handleClear}>Clear txt</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{txt.split(" ").length} words and {txt.length} characters</p>
                <p>{0.008 * txt.split(" ").length} minutes approximate human reading time</p>
                <h2>Preview</h2>
                <p className="text-justify">{txt}</p>
            </div>
        </>
    );
}

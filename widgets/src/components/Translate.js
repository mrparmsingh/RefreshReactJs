import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input onChange={(e) => setText(e.target.value)} value={text} />
                </div>
            </div>
            <Dropdown
                label="Select a language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;


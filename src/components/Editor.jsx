import React from "react";

import "./Editor.css";

const Editor = ({ getData, defaultData }) => {
    const sendData = e => {
        const { value } = e.target;
        getData(value);
    };

    return (
        <div className="Editor">
            <h3>Editor</h3>
            <textarea
                name="editor"
                id="editor"
                onChange={e => sendData(e)}
                defaultValue={defaultData}
            />
        </div>
    );
};

export default Editor;

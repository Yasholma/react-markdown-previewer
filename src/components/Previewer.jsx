import React from "react";
import marked from "marked";

import "./Previewer.css";

const Previewer = ({ data }) => {
    const formatOutput = toFormat => {
        return {
            __html: marked(toFormat),
        };
    };
    return (
        <div className="Previewer">
            <h3 className="title">Preview</h3>
            <span dangerouslySetInnerHTML={formatOutput(data)} id="preview" />
        </div>
    );
};

export default Previewer;

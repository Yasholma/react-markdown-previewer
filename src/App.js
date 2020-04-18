import React from "react";

import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import "./App.css";

function App() {
    let defaultData =
        "# Heading One \n## Heading Two \nLink: [my_portfolio](https://yhyportfolio.netlify.app) \n\nInline Code `<div>Div Inside Inline Code:</div>`\n\nCode Block: ``` // this is a comment <div>Multi line</div><nav>Multi line2</nav> ```\n\nList Item: \n- Item 1 \n- Item 2 \n- Item 3\n >Some Blockquotes\n\n ![React Logo w/ Text](https://picsum.photos/150/150)\n\n**Bold Text**";
    const [data, setData] = React.useState(defaultData);
    const getData = receivedData => {
        setData(receivedData);
    };

    return (
        <div className="App">
            <Editor getData={getData} defaultData={defaultData} />
            <Previewer data={data} />
        </div>
    );
}

export default App;

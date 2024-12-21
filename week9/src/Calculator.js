import React, { useState } from "react";
import './App.css';
import './calculator.css';

const Button = (props) => {
    return (
        <button className="ButtonStyle" value={props.label} onClick={props.ClickHandle}>
            {props.label}
        </button>
    );
};

function KeyPadComponent() {
    const [text1, setText] = useState("");

    const ClickHandle = (e) => {
        const value = e.target.value;

        if (value === "square") {
            const num = parseFloat(text1);
            if (!isNaN(num)) {
                setText(num * num);
            }
        } else if (value === "C") {
            setText("");
        } else if (value === "=") {
            try {
                setText(eval(text1));
            } catch (error) {
                setText("Error");
            }
        } else if (value === "show me") {
            const imageElement = document.createElement("img");
            imageElement.src = process.env.PUBLIC_URL + "/images/myimage.png";
            imageElement.alt = "Your Picture";
            imageElement.style.width = "200px";  
            imageElement.style.marginTop = "20px";
            document.getElementById("image-container").appendChild(imageElement);
        } else {
            setText(text1 + value);
        }
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>
            <div>
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle} />
                <Button label="C" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="1" ClickHandle={ClickHandle} />
                <Button label="2" ClickHandle={ClickHandle} />
                <Button label="3" ClickHandle={ClickHandle} />
                <Button label="+" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="4" ClickHandle={ClickHandle} />
                <Button label="5" ClickHandle={ClickHandle} />
                <Button label="6" ClickHandle={ClickHandle} />
                <Button label="-" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="7" ClickHandle={ClickHandle} />
                <Button label="8" ClickHandle={ClickHandle} />
                <Button label="9" ClickHandle={ClickHandle} />
                <Button label="*" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="." ClickHandle={ClickHandle} />
                <Button label="0" ClickHandle={ClickHandle} />
                <Button label="=" ClickHandle={ClickHandle} />
                <Button label="/" ClickHandle={ClickHandle} />
            </div>
            <div>
                <Button label="show me" ClickHandle={ClickHandle} />
                <Button label="square" ClickHandle={ClickHandle} />
            </div>
            <div id="image-container"></div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <KeyPadComponent />
        </div>
    );
}

export default App;

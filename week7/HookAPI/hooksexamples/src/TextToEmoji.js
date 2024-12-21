import React, { useState } from "react";
import Happy from './Happy.png';
import Like from './Like.png';
import Sad from './Sad.png';

function TextToEmoji() {
    const [text, setText] = useState("");
    const [emoji, setEmoji] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setText(value);

        if (value.toLowerCase() === "happy") setEmoji(Happy);
        else if (value.toLowerCase() === "like") setEmoji(Like);
        else if (value.toLowerCase() === "sad") setEmoji(Sad);
        else setEmoji("");
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter emotion (Happy, Like, Sad)" 
                value={text} 
                onChange={handleChange} 
            />
            <div>
                {emoji && <img src={emoji} alt={text} />}
            </div>
        </div>
    );
}

export default TextToEmoji;

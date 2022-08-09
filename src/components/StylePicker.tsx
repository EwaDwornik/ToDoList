import React, { useState } from 'react';
import "../style/App.css";

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

function ColorPicker() {
    const [color, setColor] = useState("Tomato");

    const divStyle = {backgroundColor: color};

    return (
        <div style={divStyle}>
            <p>Selected color: {color}</p>
            {colorNames.map((colorName)=>(
                <button
                    onClick={() => setColor(colorName)}
                    key={colorName}>
                    {colorName}
                </button>
            ))}
        </div>
    );
}
export default ColorPicker;

import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function ChangeColor(): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const Colors = [
        "blue",
        "green",
        "yellow",
        "cyan",
        "purple",
        "white",
        "black",
        "magenta"
    ];
    const [color, setColor] = useState<string>(Colors[0]);
    function changeColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {Colors.map((currentColor: string) => (
                    <Form.Check
                        inline
                        key={currentColor}
                        name="colors"
                        type="radio"
                        label={currentColor}
                        value={currentColor}
                        id="Color-options"
                        onChange={changeColor}
                        style={{ backgroundColor: currentColor }}
                    ></Form.Check>
                ))}
            </div>
            <div>
                You have selected :
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}.
                </span>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [choices, setChoice] = useState<string>(options[0]);
    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <div>
                <Form.Group controlId="formSelectOptions">
                    <Form.Label>What is the correct answer?</Form.Label>
                    <Form.Select value={choices} onChange={updateChoice}>
                        {options.map((currentOption: string) => (
                            <option key={currentOption} value={currentOption}>
                                {currentOption}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            <div>{expectedAnswer === choices ? "✔️" : "❌"}</div>
        </div>
    );
}

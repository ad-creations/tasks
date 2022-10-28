import React, { useState } from "react";
import { Form, Col, Row } from "react-bootstrap";
export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >;
    const [isAnswer, setAnswer] = useState<string>("");

    function ChangeAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <div>
                <Form.Group controlId="formCheckAnswer" as={Row}>
                    <Form.Label column sm={1}>
                        Check Answer
                    </Form.Label>
                    <Col>
                        {" "}
                        <Form.Control
                            type="text"
                            value={isAnswer}
                            onChange={ChangeAnswer}
                        ></Form.Control>
                    </Col>
                </Form.Group>
                <div>
                    Your Answer: {isAnswer === expectedAnswer ? "✔️" : "❌"}
                </div>
            </div>
        </div>
    );
}

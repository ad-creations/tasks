import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [newAttempts, setNewAttempts] = useState<string>("0");
    const changeAttempts = parseInt(newAttempts) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts Left: {attempts}
            <Form.Group>
                <Form.Control
                    type="number"
                    value={newAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNewAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts == 0}
            >
                use
            </Button>
            <Button onClick={() => setAttempts(attempts + changeAttempts)}>
                gain
            </Button>
        </div>
    );
}

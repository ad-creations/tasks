import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );
    function changeQType(): void {
        if (question === "multiple_choice_question") {
            setQuestion("short_answer_question");
        } else {
            setQuestion("multiple_choice_question");
        }
    }
    return (
        <div>
            <Button onClick={changeQType}>Change Type</Button>
            {question === "multiple_choice_question" && (
                <div> Multiple Choice </div>
            )}
            {question === "short_answer_question" && <div> Short Answer </div>}
        </div>
    );
}

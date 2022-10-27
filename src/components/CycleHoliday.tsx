import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Easter");

    function changeAlphabet(): void {
        if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("St.Patrick's Day");
        } else if (holiday === "St.Patrick's Day") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Easter");
        }
    }
    function changeYear(): void {
        if (holiday === "St.Patrick's Day") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("St.Patrick's Day");
        }
    }
    function emojis(): string {
        if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Fourth of July") {
            return "🎆";
        } else if (holiday === "Thanksgiving") {
            return "🦃";
        } else if (holiday === "St.Patrick's Day") {
            return "🍀";
        } else {
            return "🐰";
        }
    }
    return (
        <div>
            Holiday: {emojis()} {holiday}
            <Button onClick={() => changeAlphabet()}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => changeYear()}>Advance by Year</Button>
        </div>
    );
}

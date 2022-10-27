import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Alex Daley
                <h2> This is for task 3</h2>
                <img
                    src="/Users/alexdaley/Desktop/HVAC/HVAC.jpeg"
                    alt="a picture of an hvac"
                />
                <div>
                    <ol>
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                    </ol>
                </div>
            </header>
<<<<<<< HEAD
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <div>
                <Container>
                    <Row>
                        <Col>
                            Column For Something
                            <div
                                style={{
                                    width: 125,
                                    height: 125,
                                    border: "red",
                                    backgroundColor: "red",
                                    padding: 100
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Column For Something Else
                            <div
                                style={{
                                    width: 125,
                                    height: 125,
                                    border: "red",
                                    backgroundColor: "red",
                                    padding: 100
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;

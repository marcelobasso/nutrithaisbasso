import React from "react";
import { Container, Row } from "../common/interface/UI";
import "./Advice.css";

export default function Advice(props) {
    return (
        <div className="advice">
            <Container>
                <Row className="p-3">
                    <h4>{props.title}</h4>
                    <div className="advice-message p-4 px-5 popup">
                        <span>{props.advice}</span>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

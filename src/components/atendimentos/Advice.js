import React from "react";
import { Container, Row } from "../common/interface/UI";

export default function Advice() {
    return (
        <div className="advice">
            <Container>
                <Row className="p-3">
                    <div className="advice-message p-4 px-5 popup">
                        <span>A partir da consulta experimental iremos montar o seu plano personalizado com retornos semanais, quinzenais ou mensais. Ele deve ser montado em conjunto com o nutricionista que avaliará qual o melhor tratamento a seguir de acordo com o seu objetivo.</span>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

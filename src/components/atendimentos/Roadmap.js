import React from 'react'
import "./Roadmap.css";
import "./RoadmapBox.css";
import { Container, Row, ShadowBox } from '../common/interface/UI';

export default function Roadmap() {
    let atendimentos = [
        {
            title: "Questionário pré consulta",
            description: "Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi"
        },
        {
            title: "Anamnese completa",
            description: "Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi"
        },
        {
            title: "Avaliação física completa",
            description: "Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi"
        },
        {
            title: "Avaliação de exames laboratoriais",
            description: "Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi"
        },
        {
            title: "Consulta de retorno",
            description: "Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi"
        },
        {
            title: "Cardápios ilustrados",
            description: "Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi"
        },
        {
            title: "materiais e documentos impressos",
            description: "Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi"
        },
        {
            title: "aplicativo Dietbox",
            description: "Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi"
        }
    ];

    return (
        <Container>
            <Row>
                {atendimentos.map((item, index) => <RoadmapBox item={item} key={index} n={index} />)}
            </Row>
        </Container>
    )
}

function RoadmapBox(props) {
    return (
        <div className="col-lg-6 col-md-12 box" item={props.n}>
            <ShadowBox className="white-background popup">
                <div className='text-center pb-3 d-flex justify-content-between'>
                    <span className={`item-number`}>{props.n + 1}</span>
                    <h1>{props.item.title}</h1>
                    <span></span>
                </div>
                    <p>{props.item.description}</p>
            </ShadowBox>
        </div>
    );
}

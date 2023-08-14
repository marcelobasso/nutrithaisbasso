import React from 'react'
import "./Roadmap.css";
import "./RoadmapBox.css";
import { Container, Row, ShadowBox } from '../common/interface/UI';

export default function Roadmap() {
    let atendimentos = [
        {
            title: "Primeira consulta",
            description: "no dia do nosso primeiro encontro, irei te ouvir e conectar todas as informações que você me passou no questionário pré consulta. Ela é dividida em:",
            size: ""
        },
        {
            title: "Questionário pré consulta",
            description: "após agendar sua primeira consulta irei te enviar as orientações e perguntas para direcionar melhor nosso primeiro encontro. Vou estudar suas respostas e dessa forma iremos aproveitar melhor nosso tempo juntos no dia da consulta."
        },
        {
            title: "Anamnese completa",
            description: "seu histórico clínico, sinais e sintomas, função intestinal, hábitos, preferências, rotina, e tudo que compõe o seu dia a dia."
        },
        {
            title: "Avaliação física completa",
            description: "muito além do peso, iremos descobrir sua composição corporal, por meio da avaliação das circunferências e pregas cutâneas. Descubra seu percentual de massa gorda e massa magra e acompanhe melhor seus resultados."
        },
        {
            title: "Avaliação de exames laboratoriais",
            description: "Avaliarei seus exames de uma forma completa, explicando um a um e farei a suplementação personalizada de acordo com a necessidade. Se você não tem exames dos últimos 6 meses, farei a solicitação dos exames necessários. Aproveite também o convênio com desconto em laboratórios."
        },
        {
            title: "3 Consulta de retorno",
            description: "Após alguns dias do nosso primeiro encontro, iremos nos encontrar novamente de forma online ou presencial para entrega do seu plano de tratamento personalizado. Ele é composto por:"
        },
        {
            title: "materiais e documentos impressos",
            description: "Receba tudo de forma impressa, na sua pastinha para poder consultar sempre que você quiser."
        },
        {
            title: "Cardápios ilustrados",
            description: "Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi Culpa est ipsum nulla velit velit consectetur aliqua dolore proident exercitation nisi"
        },
        {
            title: "Acesso à aplicativo exclusivo",
            description: "ganhe acesso a um aplicativo exclusivo, onde você terá seu plano alimentar, lista de compras, diário alimentar e mais de 170 receitas na palma de sua mão."
        },
        {
            title: "4 Programas de consultas",
            description: "após a consulta de retorno irei te passar qual o programa mais indicado para você dar início a sua mudança, conseguir mudar seus hábitos e consolidar tudo que aprendeu. Esse é um plano completo de nutrição e comportamento, onde você aprende o quê, como, e por quê do que está fazendo, bem como, a melhor forma de manter todos os seus resultados a longo prazo."
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

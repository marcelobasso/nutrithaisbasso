import React from 'react'
import "./Roadmap.css";
import "./RoadmapBox.css";
import { CallToAction, Container, Row, ShadowBox } from '../common/interface/UI';

export default function Roadmap() {
    let atendimentos = [
        {
            groupTitle: "Questionário pré-consulta",
            groupDescription: "Após agendar sua primeira consulta, irei te enviar as orientações e perguntas para direcionar melhor nosso primeiro encontro. Vou estudar suas respostas e dessa forma iremos aproveitar melhor nosso tempo juntos no dia da consulta.",
            content: []
        },
        {
            groupTitle: "Primeira consulta",
            groupDescription: "No dia do nosso primeiro encontro, irei te ouvir e conectar todas as informações que você me passou no questionário pré-consulta. Ela é dividida em:",
            content: [
                {
                    title: "Anamnese completa",
                    description: "Seu histórico clínico, sinais e sintomas, função intestinal, hábitos, preferências, rotina, e tudo que compõe o seu dia a dia."
                },
                {
                    title: "Avaliação física completa",
                    description: "Muito além do peso, iremos descobrir sua composição corporal, por meio da avaliação das circunferências e pregas cutâneas. Descubra seu percentual de massa gorda e massa magra e acompanhe melhor seus resultados."
                },
                {
                    title: "Avaliação de exames laboratoriais",
                    description: "Avaliarei seus exames de uma forma completa, explicando-os um a um, e farei a suplementação personalizada conforme sua necessidade. Se você não tem exames dos últimos 6 meses, farei a solicitação dos exames necessários. Aproveite também o convênio com desconto em laboratórios."
                }
            ]
        },
        {
            groupTitle: "Consulta de retorno",
            groupDescription: "Após alguns dias do nosso primeiro encontro, iremos nos encontrar novamente de forma online ou presencial para entrega do seu plano de tratamento personalizado. Ele é composto por:",
            content: [
                {
                    title: "Materiais e documentos impressos",
                    description: "Receba tudo de forma impressa, na sua pastinha para poder consultar sempre que você quiser."
                },
                {
                    title: "Cardápios ilustrados",
                    description: "Um modelo de plano alimentar revolucionário, desenvolvido por mim, para que você aprenda a fazer trocas e combinar os alimentos em cada refeição."
                },
                {
                    title: "Acesso a aplicativo exclusivo",
                    description: "Ganhe acesso a um aplicativo exclusivo, onde você terá seu plano alimentar, lista de compras, diário alimentar e mais de 170 receitas na palma de sua mão."
                },
            ]
        },
        {
            groupTitle: "Trilhas de consultas",
            groupDescription: "Após a consulta de retorno, irei te passar qual o programa mais indicado para você dar início a sua mudança, conseguir mudar seus hábitos e consolidar tudo que aprendeu. Esse é um plano completo de nutrição e comportamento, onde você aprende o quê, como, e por quê do que está fazendo, bem como, a melhor forma de manter todos os seus resultados a longo prazo.",
            content: [],
            htmlContent:  (
                <div className="advice-message p-4 px-5 popup text-center">
                    <CallToAction href="/documents/trilhas-de-consultas.pdf" text="Saiba mais" rel="noreferrer" target="_blank" />
                </div>)
        }
    ];

    return (
        <Container>
            <Row>
                {atendimentos.map((group, index) => <RoadmapBox group={group} key={index} n={index} />)}
            </Row>
        </Container>
    )
}

function RoadmapBox(props) {
    return (
        <div className='p-3'>
            <div className={"col-lg-12 col-md-12 group-box popup " + (props.group.content.length > 0 ? 'content' : '')} group={props.n}>
                <div className='text-center p-3 mt-4'>
                    <h2><span className={`item-number`}>{props.n + 1}</span>{props.group.groupTitle}</h2>
                    <p className='group-description'>{props.group.groupDescription}</p>
                    { props.group.htmlContent !== undefined ? props.group.htmlContent : "" }
                </div>
                <div className='px-2'>
                    <Row>
                        {props.group.content.map((item, index) => (
                        <div className="col-lg-4 col-md-12 box">
                            <ShadowBox className="white-background popup">
                                <div className='text-center pb-3 text-center'>
                                    <h3 className='text-center'>{item.title}</h3>
                                </div>
                                <p>{item.description}</p>
                            </ShadowBox>
                        </div>))}
                    </Row>
                </div>
            </div>
        </div>
    );
}

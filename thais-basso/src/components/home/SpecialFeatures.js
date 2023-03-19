import React from "react";
import { Container, Row } from "../common/interface/UI";
import Section from "../common/Section";
import "./SpecialFeatures.css";

export default function SpecialFeatures() {
    const specialFeatures = [
        {
            icon: "fas fa-diagnoses",
            title: "No seu tempo e do seu jeito",
            description: "Mudando seus hábitos e entendendo porque você age de determinadas maneiras, criando estratégias reais e eficazes para melhorar a sua saúde e qualidade de vida"
        },
        {
            icon: "fas fa-cookie-bite",
            title: "Sem dietas exageradas",
            description: "Você merece aprender a comer de forma saudável sem depender de dietas malucas e com restrições desnecessárias!"
        },
        {
            icon: "fas fa-chart-pie",
            title: "Com cardápios ilustrados",
            description: "Ilustrados e personalizados para a sua alimentação, facilitando a compreensão de uma rotina alimentar variada e completa."
        }

    ]

    return (
        <section className="special-features my-3">
            <Container>
                <Section className="text-center" title="E como vamos fazer tudo isso?" content=""/>
                <Row className="p-3">
                    {specialFeatures.map((feature, index) => (
                        <div key={index} className="col-lg-4 col-md-12 p-4">
                            <div className="special-feature-box d-flex justify-content-center align-items-center w-100 p-3 mb-4">
                                <i className={`${feature.icon} fa-4x`} />
                            </div>
                            <h4><b>{feature.title}</b></h4>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

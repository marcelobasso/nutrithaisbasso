import React from "react";
import { Container, Row, SectionTitle } from "../common/interface/UI";
import "./SpecialFeatures.css";

export default function SpecialFeatures() {
    const specialFeatures = [
        {
            icon: "fas fa-diagnoses",
            title: "No seu tempo e do seu jeito",
            description: "o plano de tratamento é montado de acordo com suas necessidades e objetivos, priorizando a mudança de hábitos e um plano que você possa seguir a vida inteira."
        },
        {
            icon: "fas fa-cookie-bite",
            title: "Sem dietas desnecessárias",
            description: "Você merece aprender a comer de forma saudável sem depender de dietas malucas e com restrições desnecessárias!"
        },
        {
            icon: "fas fa-chart-pie",
            title: "Com cardápios ilustrados",
            description: "Ilustrados e personalizados para a sua alimentação, facilitando a compreensão de uma rotina alimentar variada e completa."
        }

    ]

    return (
        <section className="special-features my-5">
            <Container>
                <SectionTitle className="text-center">E como vamos fazer tudo isso?</SectionTitle> 
                <Row className="p-3">
                    {specialFeatures.map((feature, index) => (
                        <div key={index} className="col-lg-4 col-md-12 px-4">
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

import React from "react";
import Header from "../components/common/Header";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import "../styles/atendimentos.css";
import Roadmap from "../components/atendimentos/Roadmap";
import { Container, Row, SectionText, SectionTitle } from "../components/common/interface/UI";
import Advice from "../components/atendimentos/Advice";

export const Head = () => <Seo title="Atendimentos | Thaís Basso Nutricionista" />;

export default function atendimentos() {
    return (
        <Layout>
            <Header title="Consultas e planos" subtitle="Conheça mais sobre o funcionamento das consultas e o que está incluso em cada plano, além dos valores."/>

            <section className="atendimentos p-2 pink-background">
                <div className="padding-container">
                    <Container>
                        <Row className="px-3">
                            <SectionTitle className="text-center">Nutri, o que faz parte da consulta?</SectionTitle>
                            <SectionText>As consultas incluem algumas estapas pré e pós o encontro presencial comigo. Abaixo, você pode checar um pouco do que são as principais etapas de uma consulta.</SectionText>
                        </Row>
                        <Row>
                            <Roadmap />
                        </Row>
                    </Container>
                    <Advice />
                </div>
            </section>

            <section className="planos my-5">
                <Container>
                    <div className="">
                        <Row>
                            <SectionTitle className="text-center">Conheça os planos dispoíveis</SectionTitle>
                        </Row>
                    </div>


                </Container>
            </section>

        </Layout>
    )
}

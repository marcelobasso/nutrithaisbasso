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
                            <SectionText>Conheça minha nova forma de trabalho! Simplifico o que tem de mais atual na nutrição atual e traduzo tudo em um plano totalmente personalizado composto com orientações nutricionais baseadas sempre na sua rotina, cardápios ilustrados que te ensinam como combinar os alimentos e como fazer escolhas mais saudáveis em qualquer lugar! <br /><br />Seja comendo em casa, fora de casa, numa viagem ou em um evento social. Nosso mundo está mudando, e a nutrição está mudando com ele... Você merece aprender a comer de forma saudável sem depender de dietas malucas e com restrições desnecessárias!</SectionText>
                        </Row>
                        <Row>
                            <Roadmap />
                        </Row>
                    </Container>
                    <Advice advice="A partir da consulta experimental iremos montar o seu plano personalizado com retornos semanais, quinzenais ou mensais. Ele deve ser montado em conjunto com o nutricionista que avaliará qual o melhor tratamento a seguir de acordo com o seu objetivo." />
                </div>
            </section>

            <section className="investimento my-4">
                <Container>
                    <div className="m-3">
                        <Row>
                            <div className="col-lg-6 col-md-12">
                                <div className="my-5">
                                    <SectionTitle className="text-center">Qual o investimento?</SectionTitle>
                                </div>
                                <div className="my-3">
                                    <div className="bigger shadow-custom">
                                        <h3>Primeira consulta + retorno: <span className="price">R$ 350,00</span></h3>
                                        <p>Incluso: 1ª consulta (1h15min) + retorno (50 min).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="my-5">
                                    <SectionTitle className="text-center">Quais são as formas de pagamento?</SectionTitle>
                                </div>
                                <div className="my-3">
                                    <ul className="formas-pagamento">
                                        <li>À vista/ PIX</li>
                                        <li>Cartão de débito</li>
                                        <li>Cartão de crédito</li>
                                        <li>Link de pagamento</li>
                                    </ul>
                                    <br />
                                    <p className="observacoes">* Entre em contato e consulte as condições de parcelamento.</p>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
            </section>

        </Layout>
    )
}

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Row, Container } from "../common/interface/UI.js";
import Section from "../common/Section.js";
import "./Treatment.css";

export default function Treatment() {
    const constructImages = (listName) => {
        return queryData[listName].edges.map((edge, index) => <GatsbyImage alt="Prato ilustrativo" image={getImage(edge.node.childImageSharp.gatsbyImageData)} className={index < 2 && "left"} />);
    };

    const queryData = useStaticQuery(graphql`
        query ImagesTreat {
            plates: allFile(filter: { relativePath: { regex: "/plates/" } }) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                        }
                    }
                }
            }

            foods: allFile(filter: { relativePath: { regex: "/advantages/" } }) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                        }
                    }
                }
            }
        }
    `);

    const sections = [
        {
            title: "Para quem é o acompanhamento nutricional?",
            content: (
                <>
                    <p>
                        É indicado para todas as pessoas que buscam mudar sua relação com a comida e aprender a se alimentar de forma saudável e sem restrições alimentares, para atingir seus objetivos específicos, priorizando sempre sua
                        saúde, com um plano de tratamento totalmente personalizado.{" "}
                    </p>
                    <p>
                        É indicado para quem quer aprender a se alimentar de forma equilibrada e com um plano alimentar sustentável a longo prazo, além de auxiliar no controle e tratamento de patologias, é um investimento na sua saúde e
                        também no manejo do seu peso e melhora na composição corporal.
                    </p>
                </>
            ),
            images: constructImages("plates"),
        },
        {
            title: "O que vou ganhar com o tratamento nutricional?",
            content: (
                <>
                    <p>Com a abordagem comportamental você descobrirá que é possível comer de tudo e ter uma vida saudável, sem dietas malucas e sem os ciclos de restrição e compulsão.</p>
                    <p>Você irá aprender o que precisa comer para alcançar seus objetivos, seja para ter mais saúde, tratar doenças crônicas como hipertensão e diabetes ou para emagrecer e sentir-se bem com o seu corpo.</p>
                    <p>Você estará investindo no seu eu do futuro, prevenindo doenças e sentindo-se mais disposto e produtivo no seu dia a dia.</p>
                </>
            ),
            images: constructImages("foods"),
        },
    ];

    return (
        <section className="treatment">
            {sections.map((section, index) => (
                <Container className="p-5" key={index}>
                    <Row className={index % 2 && "flex-row-reverse"}>
                        <div className="acompanhamento-imagens col-lg-6 col-md-12 p-4">
                            <Row>
                                <div className="col-6">
                                    {section.images[0]}
                                    {section.images[1]}
                                </div>
                                <div className="col-6">
                                    <div className="box"></div>
                                    {section.images[2]}
                                    {section.images[3]}
                                </div>
                            </Row>
                        </div>
                        <div className="acompanhamento-text col-lg-6 col-md-12 d-flex justify-content-center flex-column">
                            <Section title={section.title} content={section.content} />
                        </div>
                    </Row>
                </Container>
            ))}
        </section>
    );
}

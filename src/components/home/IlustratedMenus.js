import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Container, Row } from "../common/interface/UI";
import Section from "../common/Section";
import "./IlustratedMenus.css";

export default function IlustratedMenus() {
    const IlustratedMenus = useStaticQuery(graphql`
        query IlustratedMenus {
            images: allFile(filter: { relativePath: { regex: "/ilustrated-menus/" } }) {
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

    console.log(IlustratedMenus.images.edges.map(img => img.node.childImageSharp.gatsbyImageData))
    const images = IlustratedMenus.images.edges.map(image => <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt="imagem cardápios ilustrados" />)
    console.log(images);

    return (
        <section className="ilustrated-menus py-4">
            <Container>
                <Section
                    className="text-center px-3"
                    title={
                        <>
                            Conheça meu método EXCLUSIVO: <span className="green-underline">os cardápios ilustrados</span>
                        </>
                    }
                    content={<>Criados para facilitar o entendimento do plano alimentar e possibilitar trocas e maior flexibilidade alimentar.</>}
                    />
                <Row>
                    <div className="col-lg-7 col-md-12 d-flex">
                        {images.map(img => <div className="il-image-container">{img}</div>)}
                    </div>
                    <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-center">
                        <p>Criados para facilitar o entendimento do plano alimentar e possibilitar trocas e maior flexibilidade alimentar.</p>
                        <p>Meu objetivo é te <b>ensinar a comer</b>, sem restrições alimentares, e em qualquer lugar em que você estiver. Os cardápios ilustrados permitem maior liberdade nas suas escolhas, afinal, o plano alimentar é <span className="green-underline">para você</span>. Por isso, para uma aderência maior, é importante que você participe ativamente da criação do seu plano, e que, entenda como fazer possíveis trocas no seu dia a dia!</p>
                        <p><b>Esse método foi desenvolvido por mim</b>, ao perceber a dificuldade das pessoas em aderir a um plano alimentar sempre igual. Geralmente é o que você ganha quando vai na nutricionista: um plano calculado para um dia. Mas o seu dia a dia muda, e as situações sociais a que você é exposto também. O mais importante é que você aprenda como combinar os alimentos, sem medo de comer, e sem terrorismo alimentar.</p>
                        <p>Por isso, com meu método <b className="green-underline">você conseguirá se alimentar de forma equilibrada e sem restrições desnecessárias!</b></p>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

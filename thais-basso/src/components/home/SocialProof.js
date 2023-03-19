import React from "react";
import { Container, Row, SectionTitle } from "../common/interface/UI";
import Reviews from "../../images/undraw/undraw_reviews.svg";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function SocialProof() {
    const SocialProofPhotos = useStaticQuery(graphql`
        query SocialProof {
            images: allFile(filter: { relativePath: { regex: "/social-proof/" } }) {
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

    const images = SocialProofPhotos.images.edges.map(image => <GatsbyImage style={{width: '64px', margin: '0 auto'}} image={getImage(image.node.childImageSharp.gatsbyImageData)} />)

    const opinions = [
        {
            name: "Andressa Morari Canal",
            text: (
                <>
                    Aprendi a fazer{" "}
                    <span className="green-underline">
                        <b>trocas inteligentes</b>
                    </span>{" "}
                    de alimentos que muitas vezes escolhia por costume [...] Com um plano alimentar adaptado para as minhas necessidades, consegui entender que{" "}
                    <span className="green-underline">
                        <b>comer bem não é difícil</b>
                    </span>
                    , apenas precisa de dedicação e organização!
                </>
            ),
            link: "https://g.co/kgs/gpcbHb",
            image: images[1],
        },
        {
            name: "Taís Macena de Oliveira",
            text: "Me fez ver a comida de outra forma. Me fez perceber qual é o impacto da alimentação de uma forma completa. Diferente de outras experiências que tive, que só mostravam déficit calórico e nada mais. Consegui entender a importância de cada grupo alimentar. [...]",
            link: "https://g.co/kgs/PkKpVj",
            image: "",
        },
        {
            name: "Vitória Tesser Henkes",
            text: "Atendimento profissional, cuidadoso e humano! A Thaís mantém excelentes acompanhamentos com os pacientes e tem visões amplas sobre saúde e alimentação, proporcionando muita qualidade de vida :)",
            link: "https://g.co/kgs/AFdNLb",
            image: images[2],
        },
    ];

    return (
        <section className="social-proof my-5">
            <Container>
                <SectionTitle className="text-center">Veja o que meus pacientes estão dizendo</SectionTitle>
                <Row>
                    <div className="col-lg-6 col-md-12 d-flex flex-grow-1 align-items-center">
                        <Reviews className="px-5" />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="d-flex align-items-center flex-column">
                            {opinions.map((opinion, index) => (
                                <div key={index} className="opinion my-4 text-center">
                                    <p className="p-3">{opinion.text}</p>
                                    <a href={opinion.link}>
                                        <p>{opinion.name}</p>
                                    </a>
                                    {opinion.image || <i class="fas fa-user-circle fa-4x"></i>}
                                </div>
                            ))}
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

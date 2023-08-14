import React from "react";
import { CallToAction, Container, Row, SectionTitle } from "../common/interface/UI";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./SocialProof.css";

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

    const images = SocialProofPhotos.images.edges.map((image) => (
        <GatsbyImage style={{ width: "64px", margin: "0 auto" }} image={getImage(image.node.childImageSharp.gatsbyImageData)} />
    ));

    const opinions = [
        [
            {
                name: "Andressa Morari Canal",
                text: (
                    <>
                        Aprendi a fazer{" "}
                        <span className="green-underline">
                            <b>trocas inteligentes</b>
                        </span>{" "}
                        de alimentos que muitas vezes escolhia por costume [...] Com um plano alimentar adaptado para as minhas necessidades, consegui
                        entender que{" "}
                        <span className="green-underline">
                            <b>comer bem não é difícil</b>
                        </span>
                        , apenas precisa de dedicação e organização!
                    </>
                ),
                link: "https://g.co/kgs/gpcbHb",
                image: images[0],
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
        ],
        [
            {
                name: "Lisiane Delai",
                text: (
                    <>
                        Meu acompanhamento com a Thaís foi excelente. Procurei a nutri com o objetivo de melhorar minha alimentação e a da minha
                        família, sem buscar a perda de peso.{" "}
                        <span className="green-underline">
                            <b>Consegui alcançar meu objetivo ainda nos primeiros meses de acompanhamento</b>
                        </span>
                        . Comer de forma saudável e nutritiva me deixou mais disposta, mais feliz e confiante. Meus filhos, especialmente a mais nova,
                        tinham grande dificuldade de aceitar novos alimentos. Com as orientações da Thaís, consegui melhorar significativamente essa
                        situação. O que mais me deixa satisfeita é saber que{" "}
                        <span className="green-underline">
                            <b>nada é restringido. Eu escolho o que quero comer</b>
                        </span>
                        . Isso é o máximo! A perda de peso aconteceu sem que eu percebesse. Essa liberdade é importante e necessária para que o
                        processo se torne um hábito, como hoje é para mim. Super satisfeita com o trabalho da Thaís! Uma excelente profissional!
                    </>
                ),
                link: "https://g.co/kgs/9zVbu4",
                image: "",
            },
            {
                name: "Priscila Merzoni",
                text: "Amei o atendimento da Thaís, super indico, e já estou conseguindo atingir meus objetivos em apenas um mês de acompanhamento! Ela sabe ouvir e entender nossas dificuldades e conseguiu fazer um plano alimentar que eu também conseguisse seguir sem restrições! Nunca havia conseguido seguir uma dieta por mais de 15 dias.. já estamos a um mês e sigo no caminho! Meu objetivo era melhorar alguns exames e com alimentação correta alguns valores já diminuiriam a metade! É lógico que juntamente com tudo isso vem a perda de peso que não era a minha maior necessidade e já perdi muito mais que imaginava perder em um mês! Alimentação saudável e exercício físico é a chave para uma vida equilibrada e com saúde!",
                link: "https://g.co/kgs/RQHyF6",
                image: "",
            },
        ],
    ];

    return (
        <section className="social-proof my-5">
            <Container>
                <SectionTitle className="text-center">Veja o que meus pacientes estão dizendo</SectionTitle>
                <Row className="p-3">
                    {opinions.map((group) => (
                        <div className="col-lg-6 col-md-12 d-flex flex-grow-1">
                            <div className="d-flex align-items-center flex-column">
                                {group.map((opinion, index) => (
                                    <div className="opinion my-3 text-center">
                                        {opinion.image || <i class="fas fa-user-circle fa-4x"></i>}
                                        <p className="mb-3 mt-2">{opinion.name}</p>
                                        <p className="m-0 opinion-content">"{opinion.text}"</p>
                                        <p className="m-0 mt-3 text-end">
                                            <a href={opinion.link} key={index} rel="noreferrer" target="_blank" alt="Visualizar avalização no Google" className="link-avaliacao text">
                                                Visualizar avaliação completa
                                            </a>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </Row>
                <Row className="p-3">
                    <div className="advice-message p-4 px-5 popup text-center">
                        <CallToAction href="https://www.google.com/maps/place/Tha%C3%ADs+Basso+Nutricionista+Funcional+e+comportamental/@-29.2939876,-51.4989672,17z/data=!4m8!3m7!1s0x951c195e1b1bb64f:0x5e8468a758137428!8m2!3d-29.2939923!4d-51.4963869!9m1!1b1!16s%2Fg%2F11p0_77cs2?hl=pt-BR&entry=ttu" text="Ver mais avaliações no Google" rel="noreferrer" target="_blank" />
                    </div>
                </Row>
            </Container>
        </section>
    );
}

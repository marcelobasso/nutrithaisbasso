import React from "react";
import "./AboutMe.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Row, CallToAction } from "../common/interface/UI";
import Section from "../common/Section";

export default function AboutMe() {
    const data = useStaticQuery(graphql`
        query ProfileImageThais {
            logo: file(relativePath: { eq: "fotos-thais/foto-profile.webp" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                }
            }
        }
    `);
    const image = data.logo.childImageSharp.gatsbyImageData;

    return (
        <>
            <section className="aboutMe">
                <Container className="justify-content-between align-items-center">
                    <Row>
                        <div className="aboutMeText col-lg-7 col-md-12">
                            <Section
                                title={<>Venha comigo <u>revolucionar a nutrição</u></>}
                                content="Sou a Thaís Basso, nutricionista pós-graduada em nutrição funcional e comportamento alimentar, uma das áreas mais atuais da Nutrição. Sou apaixonada pela minha profissão e por como ela pode mudar a vida das pessoas. Estou sempre buscando conhecimento e novidades na área, possuo mais de 10 cursos em áreas específicas da nutrição que agregam e enriquecem minha prática clínica."
                            />
                            <CallToAction alt="WhatsApp link" target="_blank" />
                        </div>
                        <div className="aboutMeText col-lg-1 col-md-0"></div>
                        <div className="col-lg-4 col-md-12 p-4">
                            <div className="image-container">
                                <GatsbyImage image={image} className="rounded-circle shadow-custom" alt="Profile image" />
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}

import React from "react";
import "./AboutMe.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Container, Row, CallToAction } from "../common/interface/UI";
import Section from "../common/Section";

export default function AboutMe(props) {
    const data = useStaticQuery(graphql`
        query ThaisProfileImages {
            logo: file(relativePath: { eq: "fotos-thais/foto-profile.webp" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                }
            }
        }
    `);
    const image = data.logo.childImageSharp.gatsbyImageData;
    const title = props.title || <>Venha comigo <u>revolucionar a nutrição</u></>;
    const subtitle = props.subtitle || null;
    const content = props.content || "Sou a Thaís Basso, nutricionista pós-graduada em nutrição funcional e comportamento alimentar, uma das áreas mais atuais da Nutrição. Sou apaixonada pela minha profissão e por como ela pode mudar a vida das pessoas. Estou sempre buscando conhecimento e novidades na área, possuo mais de 10 cursos em áreas específicas da nutrição que agregam e enriquecem minha prática clínica.";

    return (
        <>
            <section className="aboutMe">
                <Container className="justify-content-between align-items-center">
                    <Row>
                        <div className="aboutMeText col-lg-7 col-md-12">
                            <Section
                                title={title}
                                subtitle={subtitle}
                                content={content}
                            />
                            <CallToAction href={props.href || null} text={props.callToAction || null} alt="WhatsApp link" target="_blank" />
                        </div>
                        <div className="aboutMeText col-lg-1 col-md-0"></div>
                        <div className="col-lg-4 col-md-12 p-4">
                            <div className="image-container">
                                <GatsbyImage image={props.image || image} className="rounded-circle shadow-custom" alt="Profile image" />
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Row, SectionTitle, SectionText, Container } from '../common/interface/UI.js';
import Section from '../common/Section.js';
import './AboutTreatment.css';

export default function AboutTreatment() {
    const plates = useStaticQuery(graphql`
        query Plates {
            files: allFile(filter: { relativePath: { regex: "/plates/" } }) {
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

    const images = plates.files.edges.map((edge) => getImage(edge.node.childImageSharp.gatsbyImageData));

    return (
        <section className="acompanhamentoNutricional">
            <Container className="p-5">
                <Row>
                    <div className="acompanhamentoImagens col-lg-6 col-md-12 p-4">
                        <Row>
                            <div className="col-6">
                                <GatsbyImage alt="Prato ilustrativo" image={images[0]} className='left' />
                                <GatsbyImage alt="Prato ilustrativo" image={images[1]} className='left' />
                            </div>
                            <div className="col-6">
                                <div className="box"></div>
                                <GatsbyImage alt="Prato ilustrativo" image={images[2]} />
                                <GatsbyImage alt="Prato ilustrativo" image={images[3]} />
                            </div>
                        </Row>
                    </div>
                    <div className="acompanhamentoText col-lg-6 col-md-12 d-flex justify-content-center flex-column">
                        <Section title="Para quem é o acompanhamento nutricional?" content="É indicado para todas as pessoas que buscam mudar sua relação com a comida e aprender a se alimentar de uma forma saudável e sem restrições alimentares. Para atingir seus objetivos específicos priorizando sempre sua saúde e com um plano de tratamento totalmente personalizado. Aprender a se alimentar de forma equilibrada e um plano alimentar sustentável a longo prazo." />
                    </div>
                </Row>
            </Container>
        </section>
    );
}

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Row, SectionTitle, SectionText } from '../common/Interface/InterfaceElements.js';
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
            <div className="container-xl p-5 px-2">
                <Row>
                    <div className="acompanhamentoImagens col-lg-6 col-md-12 p-4">
                        <Row>
                            <div className="col-6">
                                <GatsbyImage image={images[0]} className='left' />
                                <GatsbyImage image={images[1]} className='left' />
                            </div>
                            <div className="col-6">
                                <div className="box"></div>
                                <GatsbyImage image={images[2]} />
                                <GatsbyImage image={images[3]} />
                            </div>
                        </Row>
                    </div>
                    <div className="acompanhamentoText col-lg-6 col-md-12 d-flex justify-content-center flex-column">
                        <SectionTitle>Pra quem é o acompanhamento nutricional?</SectionTitle>
                        <SectionText>
                            É indicado para todas as pessoas que buscam mudar sua relação com a comida e aprender a se alimentar de uma forma saudável e sem restrições alimentares. Para atingir seus objetivos específicos priorizando sempre
                            sua saúde e com um plano de tratamento totalmente personalizado. Aprender a se alimentar de forma equilibrada e um plano alimentar sustentável a longo prazo.
                        </SectionText>
                    </div>
                </Row>
            </div>
        </section>
    );
}

import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Seo from '../components/common/Seo';
import Header from '../components/common/Header';
import { Container, Row, SectionTitle } from '../components/common/interface/UI';
import Layout from '../components/common/Layout';
import "../styles/sobre-mim.css"

export const Head = () => <Seo title="Sobre mim - Thaís Basso Nutricionista"/ >

export default function sobreMim({ data }) {
    const fotoLaranja = data.file.childImageSharp.gatsbyImageData;

    return (
        <Layout>
            <Header title="Conheça mais sobre mim" subtitle="Um pouco da minha jornada até aqui, incluindo formação educacional e experiência profissional." />
            <section class="bio mb-4">
                <Container className="py-5">
                    <Row>
                        <div class="col-lg-1 col-md-0"></div>
                        <div class="col-lg-3 col-md-12">
                            <GatsbyImage image={fotoLaranja} className="m-3 mt-0" alt="Foto de perfil - Thaís" />
                        </div>
                        <div class="col-lg-1 col-md-0"></div>
                        <div class="col-lg-6 col-md-12 pl-3">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et dictum sem. Vivamus ultrices rutrum arcu, non feugiat ex tempus sit amet. Aenean metus magna, porta id convallis a, sollicitudin sed mauris. Nunc
                                non nisi in odio molestie vehicula. Donec eu scelerisque nunc, et tincidunt nulla. Phasellus vulputate dignissim lacinia. Suspendisse potenti. Integer posuere auctor tellus. Donec ullamcorper, lacus a mattis
                                elementum, nunc lectus molestie ligula, non commodo sem ante sit amet odio. Proin bibendum, metus non fringilla maximus, metus ipsum egestas augue, vel bibendum dui sem et sem. Proin congue fermentum enim, ac
                                porta sapien.
                            </p>
                        </div>
                        <div class="col-lg-1 col-md-0"></div>
                    </Row>
                </Container>
            </section>

            <section className='personal-links'>
                <Container className="py-5">
                    <Row>
                        <div class="col-lg-6 col-md-12">
                            site
                            email
                            celular
                        </div>
                        <div class="col-lg-6 col-md-12">
                            linkedin
                            instagram
                            facebook
                        </div>
                    </Row>
                </Container>    
            </section>
            <hr />
            formação profissional
        
            <br/><a href="https://guilmour.org/cv/">https://guilmour.org/cv/</a>      
        </Layout>
    );
}

export const query = graphql`
    query FotoLaranja {
        file(relativePath: { regex: "/foto-laranja/" }) {
            childImageSharp {
                gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, placeholder: BLURRED)
            }
        }
    }
`;

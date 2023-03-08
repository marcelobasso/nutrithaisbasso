import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Footer() {
    const { logo } = useStaticQuery(graphql`
        query Testing {
            logo: file(relativePath: { eq: "logos/logo-white.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                }
            }
        }
    `);

    const image = getImage(logo.childImageSharp.gatsbyImageData);

    return (
        <footer class="text-center text-lg-start">
            <div class="container p-5 px-2">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">
                            <b>
                                <i class="fas me-3 mb-3 fa-map-marked-alt"></i> Onde me encontrar?
                            </b>
                        </h5>
                        <p class="mb-2">Rua Buarque de Macedo, 4146 - Sala 204</p>
                        <p class="mb-2">Bairro Centro - 95185-000</p>
                        <p class="mb-2">Carlos Barbosa/RS</p>
                    </div>
                    <div id="footerLogo" class="col-lg-6 col-md-12 mb-4 mb-md-0 d-flex justify-content-end align-items-center">
                        <GatsbyImage image={image} class="logo-big" alt="Logo Thaís Basso nutricionista" />
                    </div>
                </div>
            </div>
            <div id="footerHi" class="p-3">
                <div class="container-xl d-flex justify-content-between">
                    <span>
                        Made with <i class="fas fa-1x fa-heart heart"></i> by Lucas and Marcelo
                    </span>
                    <span>© All rights are reserved | 2022</span>
                </div>
            </div>
        </footer>
    );
}

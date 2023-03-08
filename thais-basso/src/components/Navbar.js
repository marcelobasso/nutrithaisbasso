import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

export default function Navbar() {
    const { logo } = useStaticQuery(graphql`
        query Logo {
            logo: file(relativePath: { eq: "logos/logo-with-name.png" }) {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
                }
            }
        }
    `);
    const image = getImage(logo.childImageSharp.gatsbyImageData);

    const PAGES = [
        {
            name: 'Home',
            to: '/',
            ariaLabel: 'Página inicial',
        },
        {
            name: 'Sobre mim',
            to: '/sobre-mim',
            ariaLable: 'Informações sobre mim',
        },
        {
            name: 'Consultório',
            to: '/consultorio',
            ariaLabel: 'Informações sobre o consultório',
        },
        {
            name: 'Contato',
            to: '/contato',
            ariaLabel: 'Informações de contato',
        },
    ];

    const SOCIAL_LINKS = [
        {
            icon: 'fa-facebook',
            href: 'https://www.facebook.com/nutricionistathaisb',
            alt: 'Link do Facebook',
        },
        {
            icon: 'fa-instagram',
            href: 'https://www.instagram.com/nutrithaisbasso/',
            alt: 'Link do Instagram',
        },
        {
            icon: 'fa-whatsapp',
            href: 'https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005',
            alt: 'Link do Whatsapp',
        },
        {
            icon: 'fa-youtube',
            href: 'https://www.youtube.com/channel/UCACMTraiEAeIf0pZ552PNZg',
            alt: 'Link do canal do Youtube',
        },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div id="navbar-container" className="container-xl d-flex justify-content-between px-2 my-2">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <Link to="/" alt="Página inicial">
                    <GatsbyImage image={image} alt="Logo Thaís Basso nutricionista" className="logo" />
                </Link>

                <div id="navbarSupportedContent" className="collapse navbar-collapse flex-grow-0">
                    <ul className="navbar-nav mb-lg-0">
                        {PAGES.map((page, index) => (
                            <li key={index} className="nav-item px-3">
                                <Link to={page.to} aria-label={page.ariaLabel} className="nav-link text go-right">
                                    {page.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div id="socialLinks" className="d-flex align-items-center d-none d-lg-block">
                    {SOCIAL_LINKS.map((page, index) => (
                        <a href={page.href} alt={page.alt} target="_blank" key={index}>
                            <i className={`fab ${page.icon} fa-15x px-2`} />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

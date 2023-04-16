import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Header from "../components/common/Header";
import { Container, Row, SectionTitle, CallToAction } from "../components/common/interface/UI";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import ContactBox from "../components/contato/ContactBox";
import "../styles/contato.css";

export const Head = () => <Seo title="Contato | Thaís Basso Nutricionista" />;

export default function contato({ data }) {
    const dietboxLogo = getImage(data.logo.childImageSharp.gatsbyImageData);
    const contactBoxes = [
        {
            icon: <GatsbyImage image={dietboxLogo} className="icon" alt="Dietbox icon" />,
            name: "Dietbox",
            content: "Thaís Basso Nutricionista",
            action: {
                text: "Visite o perfil",
                href: "https://dietbox.me/pt-BR/thais-basso",
                alt: "Perfil no Dietbox",
            },
        },
        {
            icon: <i className="fab fa-whatsapp icon"></i>,
            name: "Whatsapp",
            content: "(54) 99622-4005",
            action: {
                text: "Marque sua consulta!",
                href: "https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005",
                alt: "Whatsapp link",
            },
        },
        {
            icon: <i className="far fa-envelope icon"></i>,
            name: "Email",
            content: "email@provedor.com.br",
            action: {
                text: "Envie um email",
                href: "mailto:email@provedor.com.br",
                alt: "Endereço de email",
            },
        },
    ];

    return (
        <Layout>
            <Header title="Entre em contato" subtitle="Informações de contato e endereço do consultório." />

            <section className="contato">
                <Container>
                    <Row>
                        {contactBoxes.map((box, index) => (
                            <ContactBox key={index} box={box} />
                        ))}
                    </Row>
                </Container>
            </section>

            <Container className="justify-content-center">
                <hr className="m-4" />
            </Container>

            <section className="header address mb-4z'">
                <Container className="py-5 justify-content-center">
                    <SectionTitle className="text-center">Endereço do consultório</SectionTitle>
                    <Row>
                        <div className="col-lg-4 col-md-12 p-3">
                            <h4>Localizaçao</h4>
                            <p>
                                Rua Humberto Accorsi, n° 230 - Sala 02
                                <br />
                                Edifício Rádio Estação, bairro Aurora - 95185-000
                                <br />
                                Carlos Barbosa/RS
                            </p>
                            <h4 className="mt-2">Fone</h4>
                            <p>(54) 99622-4005</p>
                        </div>
                        <div className="col-lg-8 col-md-12 p-3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.602673893178!2d-51.49857558490232!3d-29.293992282161344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c19ec86ec0001%3A0x75bb7b18f1a1b35e!2sEdif%C3%ADcio%20R%C3%A1dio%20Esta%C3%A7%C3%A3o%20-%20R.%20Humberto%20Accorsi%2C%20230%20-%20Sala%2002%20-%20Aurora%2C%20Carlos%20Barbosa%20-%20RS%2C%2095185-000!5e0!3m2!1spt-BR!2sbr!4v1681608930648!5m2!1spt-BR!2sbr"
                                height="500"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                title="Endereço do consultorio - Google Maps"
                            ></iframe>
                        </div>
                    </Row>
                </Container>
            </section>
        </Layout>
    );
}

export const query = graphql`
    query Logo {
        logo: file(relativePath: { regex: "/dietbox-black/" }) {
            id
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: WEBP)
            }
        }
    }
`;

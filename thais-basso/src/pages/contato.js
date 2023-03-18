import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Header from "../components/common/Header";
import { Container, Row, SectionTitle, CallToAction } from "../components/common/interface/UI";
import Layout from "../components/common/Layout";
import Seo from "../components/common/Seo";
import ContactBox from "../components/contato/ContactBox";
import "../styles/contato.css";

export const Head = () => <Seo title="Contato - Thaís Basso Nutricionista" />;

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
                <Container className="py-5">
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
                            <h3>Localizaçao</h3>
                            <p>
                                Rua Buarque de Macedo, 4146 - Sala 204
                                <br />
                                Bairro Centro - 95185-000
                                <br />
                                Carlos Barbosa/RS
                            </p>
                            <h3 className="mt-2">Fone</h3>
                            <p>(54) 99622-4005</p>
                        </div>
                        <div className="col-lg-8 col-md-12 p-3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13918.597853495297!2d-51.500965!3d-29.292619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c19e90a191857%3A0xf277e926a40a5fd3!2sR.%20Buarque%20de%20Macedo%2C%204146%20-%20Centro%2C%20Carlos%20Barbosa%20-%20RS%2C%2095185-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1674760780177!5m2!1sen!2sus"
                                height="500"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
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

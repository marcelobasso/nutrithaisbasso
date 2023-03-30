import React from "react";
import Seo from "../components/common/Seo";
import Header from "../components/common/Header";
import { CallToAction, Container, Divider, PageTitle, Row, SectionTitle } from "../components/common/interface/UI";
import Layout from "../components/common/Layout";
import "../styles/sobre-mim.css";
import Links from "../components/sobre-mim/Links";
import CVList from "../components/sobre-mim/CVList";
import OnlineResume from "../images/undraw/undraw_online_resume.svg";
import ButtonStyle from "../images/undraw/undraw_button_style_white.svg";
import ActionBanner from "../components/common/ActionBanner";

export const Head = () => <Seo title="Sobre mim | Thaís Basso Nutricionista" />;

export default function sobreMim() {
    const sobreMimLinks = [
        [
            {
                name: "website",
                icon: "fas fa-globe",
                content: "https://www.thaisbasso.com",
                href: "https://www.thaisbasso.com",
            },
            {
                name: "email",
                icon: "fas fa-envelope",
                content: "email@provedor.com.br",
                href: "mailto:email@provedor.com.br",
            },
            {
                name: "celular",
                icon: "fab fa-whatsapp",
                content: "(54) 99622-4005",
                href: "https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005",
            },
        ],
        [
            {
                name: "instagram",
                icon: "fab fa-instagram",
                content: "Instagram",
                href: "https://www.instagram.com/nutrithaisbasso/",
            },
            {
                name: "facebook",
                icon: "fab fa-facebook-f",
                content: "Facebook",
                href: "https://www.facebook.com/nutricionistathaisb",
            },
            {
                name: "portfolio",
                icon: "fas fa-book-reader",
                content: "Portfólio profissional",
                href: "/documents/portfolio-thais-basso-2023.pdf",
            },
        ],
    ];

    const formacao = {
        "Formação profissional": [
            {
                title: "Graduação em Nutrição",
                institution: "UCS - Universidade de Caxias do Sul",
                institutionSite: "https://www.ucs.br/site",
                period: "2012 - 2018",
                description:
                    "Graduanda em Nutrição na UCS durante 6 anos, tive a oportunidade de adentrar na área, conhecendo novas pessoas e amigos. Realizei diversos projetos dentro do curso, inclusive estágios em cozinhas industriais e no Hospital da universidade de Caxias do Sul.",
            },
            {
                title: "Graduação em Nutrição",
                institution: "UCS - Universidade de Caxias do Sul",
                institutionSite: "https://www.ucs.br/site",
                period: "2012 - 2018",
                description:
                    "Graduanda em Nutrição na UCS durante 6 anos, tive a oportunidade de adentrar na área, conhecendo novas pessoas e amigos. Realizei diversos projetos dentro do curso, inclusive estágios em cozinhas industriais e no Hospital da universidade de Caxias do Sul.",
            },
            {
                title: "Graduação em Nutrição",
                institution: "UCS - Universidade de Caxias do Sul",
                institutionSite: "https://www.ucs.br/site",
                period: "2012 - 2018",
                description:
                    "Graduanda em Nutrição na UCS durante 6 anos, tive a oportunidade de adentrar na área, conhecendo novas pessoas e amigos. Realizei diversos projetos dentro do curso, inclusive estágios em cozinhas industriais e no Hospital da universidade de Caxias do Sul.",
            },
        ],
        "Formação complementar": [
            {
                title: "Formação em Desenvolvimento pessoal",
                institution: "ACI - Carlos Barbosa",
                institutionSite: "https://www.acicb.com.br/",
                period: "2019 - 2019",
                description: "Curso de formação em coaching e desenvolvimento pessoal onde tive a oportunidade de desenvolver minhas visões acerca da formação de uma rotina mais saudável.",
            },
            {
                title: "Formação em Desenvolvimento pessoal",
                institution: "ACI - Carlos Barbosa",
                institutionSite: "https://www.acicb.com.br/",
                period: "2019 - 2019",
                description: "Curso de formação em coaching e desenvolvimento pessoal onde tive a oportunidade de desenvolver minhas visões acerca da formação de uma rotina mais saudável.",
            },
            {
                title: "Formação em Desenvolvimento pessoal",
                institution: "ACI - Carlos Barbosa",
                institutionSite: "https://www.acicb.com.br/",
                period: "2019 - 2019",
                description: "Curso de formação em coaching e desenvolvimento pessoal onde tive a oportunidade de desenvolver minhas visões acerca da formação de uma rotina mais saudável.",
            },
        ],
    };

    return (
        <Layout>
            <Header
                title="Conheça mais sobre mim"
                subtitle="Minha formação profissional em detalhes, para você saber quem é a Nutri Thaís Basso."
            />
            <section class="bio mx-3">
                <Container className="my-4">
                    <Row>
                        <div class="col-lg-6 col-md-12">
                            <OnlineResume className="online-resume" />
                        </div>
                        <div class="col-lg-6 col-md-12 pl-3 d-flex align-items-center">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                                dictum sem. Vivamus ultrices rutrum arcu, non feugiat ex tempus sit
                                amet. Aenean metus magna, porta id convallis a, sollicitudin sed
                                mauris. Nunc non nisi in odio molestie vehicula. Donec eu
                                scelerisque nunc, et tincidunt nulla. Phasellus vulputate dignissim
                                lacinia. Suspendisse potenti. <br />
                                <br />
                                Integer posuere auctor tellus. Donec ullamcorper, lacus a mattis
                                elementum, nunc lectus molestie ligula, non commodo sem ante sit
                                amet odio. Proin bibendum, metus non fringilla maximus, metus ipsum
                                egestas augue, vel bibendum dui sem et sem. Proin congue fermentum
                                enim, ac porta sapien.
                            </p>
                        </div>
                    </Row>
                </Container>
            </section>

            <section className="personal-links mx-3">
                <Container>
                    <Row className="mb-3">
                        <Links links={sobreMimLinks} />
                    </Row>
                </Container>
            </section>

            <section className="cv mx-3">
                <Container>
                    {Object.keys(formacao).map((key) => (
                        <CVList title={key} content={formacao[key]} />
                    ))}
                </Container>
            </section>

            <ActionBanner
                text="Agora que você conhece um pouco mais sobre mim, que tal marcarmos uma avaliação?"
                CallToAction="Marcar uma avaliação"
                image={<ButtonStyle />}
            />
        </Layout>
    );
}
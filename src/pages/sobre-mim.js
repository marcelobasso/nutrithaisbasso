import React from "react";
import Seo from "../components/common/Seo";
import Header from "../components/common/Header";
import { Container, Row } from "../components/common/interface/UI";
import Layout from "../components/common/Layout";
import "../styles/sobre-mim.css";
import Links from "../components/sobre-mim/Links";
import CVList from "../components/sobre-mim/CVList";
import ButtonStyle from "../images/undraw/undraw_button_style_white.svg";
import PersonalSite from "../images/undraw/undraw_personal_site.svg";
import ActionBanner from "../components/common/ActionBanner";

export const Head = () => <Seo title="Sobre mim | Thaís Basso Nutricionista" />;

export default function sobreMim() {
    const sobreMimLinks = [
        [
            {
                name: "Website",
                icon: "fas fa-globe",
                content: "https://www.thaisbasso.com",
                href: "https://www.thaisbasso.com",
            },
            {
                name: "E-mail",
                icon: "fas fa-envelope",
                content: "nutricionistathaisb@gmail.com",
                href: "mailto:nutricionistathaisb@gmail.com",
            },
            {
                name: "Celular",
                icon: "fab fa-whatsapp",
                content: "(54) 99622-4005",
                href: "https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005",
            },
        ],
        [
            {
                name: "Instagram",
                icon: "fab fa-instagram",
                content: "Instagram",
                href: "https://www.instagram.com/nutrithaisbasso",
            },
            {
                name: "Facebook",
                icon: "fab fa-facebook-f",
                content: "Facebook",
                href: "https://www.facebook.com/nutricionistathaisb",
            },
            {
                name: "Portfolio",
                icon: "fas fa-book-reader",
                content: "Portfólio profissional",
                href: "/documents/portfolio-thais-basso-2023.pdf",
            },
        ],
    ];

    const formacao = {
        "Formação profissional": [
            {
                title: "Especialização em Emagrecimento e Saúde",
                institution: "NBE Academy 2021",
                institutionSite: "https://escolanbe.anniebello.com.br/",
                period: "2021 - 2021",
                description: "Carga horária total de 180 horas.",
            },
            {
                title: "Pós-graduação em Nutrição Funcional e Comportamento Alimentar ",
                institution: "UCS - Universidade de Caxias do Sul",
                institutionSite: "https://www.ucs.br/site",
                period: "2019 - 2021",
                description: "Carga horária total de 400 horas.",
            },
            {
                title: "Graduação em Nutrição",
                institution: "UCS - Universidade de Caxias do Sul",
                institutionSite: "https://www.ucs.br/site",
                period: "2012 - 2018",
                description: "Carga Horária Total: 3270h + 230h de Atividades Complementares = 3500h + ENADE",
            },
            {
                title: "Curso de inglês (Business)",
                institution: "Rennert New York Language School – NY",
                institutionSite: "https://rennert.com/index.html",
                period: "2017 - 2017",
                description: "Carga horária total de 60 horas.",
            },
            {
                title: "Curso de inglês Avançado",
                institution: "Embassy English San Francisco - CA",
                institutionSite: "#",
                period: "2013 - 2013",
                description: "Carga horária total de 80 horas.",
            },
        ],
    };

    return (
        <Layout>
            <Header title="Conheça mais sobre mim" subtitle=" Minha formação profissional e um pouco da minha história para você me conhecer melhor." />
            <section class="bio mx-3">
                <Container className="my-4">
                    <div>
                        <div className="svg-container">
                            <PersonalSite className="online-resume" />
                        </div>
                        <div className="text-container">
                            <p>
                                Desde muito nova eu sabia que queria fazer algo relacionado à saúde, eu adorava estudar sobre ciências e biologia na escola.
                                Brincava de várias coisas, entre elas, gostava de brincar que era dona do meu próprio negócio, desde escritório, restaurantes
                                até mesmo escola. Eu tinha grandes sonhos e uma sede por aprender coisas novas.{" "}
                            </p>
                            <p>
                                Sempre fui muito curiosa e gostei de estudar, pois sabia que esse era o caminho que iria me permitir "crescer na vida" e
                                realizar meus sonhos. Comecei a me preocupar com minha saúde desde cedo, lia livros e revistas relacionadas ao tema, iniciei a
                                academia com 15 anos, assim que consegui me pagar. Também parei de consumir carnes por um período da minha vida. Naquela época,
                                saúde, para mim, era algo mais simples, estava ligada à saúde do corpo apenas. E tenho certeza que muitas pessoas ainda pensam
                                assim.
                            </p>
                            <p>
                                Porém, tudo isso mudou depois que passei por um período muito difícil da minha vida, no qual tive que lidar com muitas
                                responsabilidades e uma rotina exaustiva que me levou a ter
                                <b> problemas com ansiedade</b>. O auge da minha ansiedade ocorreu quando viajei para o exterior a trabalho, e não consegui
                                dormir por dias. Tive ataques de pânico na viagem e não fazia ideia do que estava acontecendo. Foi um período muito complicado
                                para mim, onde tive que buscar ajuda e reorganizar quem eu era. Senti muito medo e percebi que não importa onde estamos, ou o
                                que temos, <b>se não estivermos bem dentro de nós, nada tem sentido, tudo perde a graça.</b>
                            </p>
                            <p>
                                Comecei a entender que <b>saúde é muito mais do que somente o corpo físico, saúde mental é tão ou mais importante. </b>
                                Prometi para mim mesma que iria cuidar da minha saúde mental, respeitando os meus limites e vontades. E assim, eu fiz.
                            </p>

                            <p>
                                Mudei minha rotina, busquei fazer atividades como ioga, com pausas para respirar, pensar e avaliar meu dia. Priorizei a
                                atividade física e um boa noite de sono (eu senti na pele o que é ficar sem dormir por algumas semanas!), comecei a fazer
                                terapia, etc. Enfim, <b>mudei meu estilo de vida.</b> Desde então, eu tive a certeza que{" "}
                                <b>
                                    trabalhar com saúde é muito mais do que somente física e estética, mas é acima de tudo, se sentir bem no próprio corpo e na
                                    própria mente.
                                </b>
                            </p>
                            <p>
                                Por isso, me apaixonei pela nutrição comportamental, que vai muito além do que se come, mas foca no COMO. Me apaixonei também
                                pela medicina do estilo de vida, que engloba em seus 6 pilares o que é realmente ter saúde: sono de qualidade, alimentação
                                saudável, atividade física, manejo do stress, relacionamentos e controle de vícios. E é nessa nutrição que eu acredito, e é essa
                                nutrição que eu vivo! Tenho um olhar sobre o ser humano em sua complexidade e não somente no problema que ele me traz. Avalio
                                meus pacientes na totalidade, e acolho da forma como também precisei ser acolhida. Trabalhamos para uma melhor qualidade de vida
                                e desenvolvimento da sua melhor versão.
                            </p>
                        </div>
                    </div>
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

            <ActionBanner text="Vamos marcar sua primeira consulta?" CallToAction="Marcar uma avaliação" image={<ButtonStyle />} />
        </Layout>
    );
}

import React from "react";
import { CallToAction, Container, Row } from "../common/interface/UI";
import "./Features.css";
import SuperWoman from "../../images/undraw/undraw_super_woman.svg";
import FishBowl from "../../images/undraw/undraw_fish_bowl.svg";
import BetterWorld from "../../images/undraw/undraw_a_better_world.svg";
import MintTea from "../../images/undraw/undraw_mint_tea.svg";
import OfficeSnack from "../../images/undraw/undraw_office_snack.svg";
import IndoorBike from "../../images/undraw/undraw_indoor_bike.svg";
import { Link } from "gatsby";
import Section from "../common/Section";

export default function Features(data) {
    const features = [
        {
            title: "Pós-graduação em nutrição funcional e comportamento alimentar",
            text: "Aliar essas duas áreas da nutrição permite avaliar o indivíduo na totalidade, propor mudanças no estilo de vida e reeducar hábitos para criar resultados que perduram a vida inteira.",
            image: <OfficeSnack />,
            action: "Ampliar minha visão sobre nutrição"
        },
        {
            title: "Especialização em emagrecimento e saúde",
            text: "Aprenda o que há de mais atual nas diretrizes mundiais para prevenção e tratamento da obesidade e as comorbidades relacionadas a ela. Posso te apresentar estratégias para uma mudança de estilo de vida e de manutenção dos resultados.",
            image: <IndoorBike />,
            action: "Emagrecer com saúde"
        },
        {
            title: "Saúde intestinal",
            text: "Um olhar atual e científico sobre o impacto do nosso intestino sobre a saúde e as doenças, com o objetivo em estratégias para combater a disbiose intestinal e aumentar a qualidade de vida.",
            image: <BetterWorld />,
            action: "Tomar o controle do meu intestino"
        },
        {
            title: "Nutrição vegetariana",
            text: "Com carinho e dedicação especial àqueles que se importam com os animais e a sustentabilidade. Aprenda a fazer uma transição nutricional equilibrada, na qual os macros e micronutrientes estão adequados na sua alimentação, sem arriscar ter deficiências nutricionais. Quero te apresentar uma dieta que vai além dos grãos e que abre portas para um mundo imenso de possibilidades.",
            image: <FishBowl />,
            action: "Diversificar minha alimentação"
        },
        {
            title: "Saúde da mulher",
            text: "Esta especialização é especial para o público feminino e vai desde o tratamento e prevenção de patologias (endometriose, etc.) até a área estética. Aprenda uma gama de conhecimentos que vai te proporcionar uma vida mais leve e saudável, conforme as suas necessidades individuais.",
            image: <SuperWoman />,
            action: "Melhorar minha saúde"
        },
        {
            title: "Fitoterapia integrativa",
            text: <>Aprenda como usar o poder das <span className="green-underline"><b>ervas e chás</b></span> para o tratamento e a prevenção das mais diversas patologias e para o seu bem-estar em geral.</>,
            image: <MintTea />,
            action: "Usar o poder da natureza"
        },
    ];

    return (
        <section className="features my-5">
            <Container>
                <Section className="text-center px-3" title={<>Conheça algumas das minhas <span className="green-underline">especializações</span></>} content={<>Para conhecer minha formação melhor <Link to="/sobre-mim">acesse a página "sobre mim"</Link></>} />
                <div className="mb-5" />
                {features.map((feature, index) => (
                    <Row key={index} className={`py-5 ${index % 2 && "flex-row-reverse"}`}>
                        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center px-5">
                            <h4 className="mb-4"><b>{feature.title}</b></h4>
                            <p>{feature.text}</p>
                            <CallToAction text={feature.action} className="mb-4" />
                        </div>
                        <div className="col-lg-6 col-md-12 px-5 d-flex justify-content-center">
                            <div className="w-75">
                                {feature.image}
                            </div>
                        </div>
                    </Row>
                ))}
            </Container>
        </section>
    );
}

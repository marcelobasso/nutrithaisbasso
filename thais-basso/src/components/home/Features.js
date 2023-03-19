import React from "react";
import { CallToAction, Container, Row, SectionTitle } from "../common/interface/UI";
import "./Features.css";
import SuperWoman from "../../images/undraw/undraw_super_woman.svg";
import FishBowl from "../../images/undraw/undraw_fish_bowl.svg";
import BetterWorld from "../../images/undraw/undraw_a_better_world.svg";
import MintTea from "../../images/undraw/undraw_mint_tea.svg";

export default function Features(data) {
    const features = [
        {
            title: "Saúde da mulher",
            text: "Uma gama de conhecimentos que vai te ajudar a levar uma vida mais leve e saudável, de acordo com as suas necessidades.",
            image: <SuperWoman />,
            action: "Melhorar minha saúde"
        },
        {
            title: "Nutrição vegetariana",
            text: "Com carinho e dedicação especial àqueles que se importas com os animais. Quero te apresentar uma dieta que vai além dos grãos e que abre portas para um mundo imenso de possibilidades.",
            image: <FishBowl />,
            action: "Diversificar minha alimentação"
        },
        {
            title: "Doenças Crônicas Não Transmissíveis",
            text: "Possui uma dificuldade de alimentação que limita suas opções? Pois saiba que você não precisa se privar, pra tudo existe uma alternativa e eu quero te ajudar a encontrar a que mais te agrade.",
            image: <BetterWorld />,
            action: "Deixar de me privar"
        },
        {
            title: "Saúde intestinal",
            text: "Tenha um estino regulado e saudável melhorando a sua alimentação. Posso te ensinar a consumir alimentos que te ajudarão a ter um ritmo intestinal confortável e saudável, melhorando a sua rotina.",
            image: <MintTea />,
            action: "Regular meu corpo"
        }
    ];

    return (
        <section className="features py-5">
            <Container>
                <SectionTitle className="text-center mb-5 pb-5">Conheça alguns dos meus diferenciais</SectionTitle>
                {features.map((feature, index) => (
                    <Row key={index} className={`py-3 ${index % 2 && "flex-row-reverse"}`}>
                        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center px-5">
                            <h4 className="mb-4"><b>{feature.title}</b></h4>
                            <p>{feature.text}</p>
                            <CallToAction text={feature.action} />
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

import React from "react";
import { Container, SectionTitle } from "../common/interface/UI";

export default function SocialProof() {
    const opinions = [
        {
            name: 'Andressa Morari Canal',
            text: "Aprendi a fazer trocas inteligentes de alimentos que muitas vezes escolhia por costume [...] Com um plano alimentar adaptado para as minhas necessidades, consegui entender que comer bem não é difícil, apenas precisa de dedicação e organização!",
            link: 'https://g.co/kgs/gpcbHb',
            image: ''
        },
        {
            name: 'Taís Macena de Oliveira',
            text: 'Me fez ver a comida de outra forma. Me fez perceber qual é o impacto da alimentação de uma forma completa. Diferente de outras experiências que tive, que só mostravam déficit calórico e nada mais. Consegui entender a importância de cada grupo alimentar. [...]',
            link: 'https://g.co/kgs/PkKpVj',
            image: ''
        },
        {
            name: 'Vitória Tesser Henkes',
            text: 'Atendimento profissional, cuidadoso e humano! A Thaís mantém excelentes acompanhamentos com os pacientes e tem visões amplas sobre saúde e alimentação, proporcionando muita qualidade de vida :)',
            link: 'https://g.co/kgs/AFdNLb'
        }

    ];

    return (
        <section className="social-proof my-5">
            <Container>
                <SectionTitle className="text-center">Veja o que meus pacientes estão dizendo</SectionTitle>
                <div className="d-flex align-items-center flex-column">
                    {opinions.map((opinion, index) => (
                        <div className="opinion my-4 mx-5 py-4 text-center w-50">
                            <p className="px-5 mx-5 py-3">{opinion.text}</p>
                            <a href={opinion.link}><p>{opinion.name}</p></a>
                            <i class="fas fa-user-circle fa-4x"></i>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

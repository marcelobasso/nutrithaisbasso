import React from "react";
import { CallToAction, Container, SectionTitle } from "../common/interface/UI";
import "./Portfolio.css";

export default function Portfolio() {
    return (
        <section className="portfolio my-5 p-5 mx-3">
            <Container>
                <div className="text-center white py-5">
                    <SectionTitle>
                        Você também pode conhecer mais sobre meu trabalho no meu meu{" "}
                        <span className="green-underline">portfolio profissional</span>
                    </SectionTitle>
                    <CallToAction
                        href="/documents/portfolio-thais-basso-2023.pdf"
                        text="Clique aqui e conheça meu portfólio"
                        target="_blank"
                        buttonClassName="w-50"
                    />
                    </div>
            </Container>
        </section>
    );
}

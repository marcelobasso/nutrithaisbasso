import React from "react";
import { CallToAction, Container, SectionTitle } from "../common/interface/UI";
import "./Portfolio.css";

export default function Portfolio() {
    return (
        <section className="portfolio">
            <Container>
                <div className="portfolio-container text-center white">
                    <SectionTitle>
                        Você também pode conhecer mais sobre meu trabalho no meu meu{" "}
                        <span className="green-underline">portfolio profissional</span>
                    </SectionTitle>
                    <CallToAction
                        href="/documents/portfolio-thais-basso-2023.pdf"
                        text="Conheça meu portfólio"
                        target="_blank"
                    />
                    </div>
            </Container>
        </section>
    );
}

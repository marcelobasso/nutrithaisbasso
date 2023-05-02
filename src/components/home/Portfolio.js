import React from "react";
import { CallToAction, Container, SectionText, SectionTitle } from "../common/interface/UI";
import "./Portfolio.css";

export default function Portfolio() {
    return (
        <section className="portfolio">
            <Container>
                <div className="portfolio-container text-center white">
                    <SectionTitle>
                    <i class="fas fa-book-open-reader" style={{marginRight: '24px'}}></i>Conheça meu <span className="green-underline">portfólio profissional</span>
                    </SectionTitle>
                    <SectionText>
                        Leia mais sobre como funcionam os atendimentos e consulte os <b>valores dos planos e consultas ;)</b>
                    </SectionText>
                    <CallToAction href="/documents/portfolio-thais-basso-2023.pdf" text="Conheça meu portfólio" target="_blank" />
                </div>
            </Container>
        </section>
    );
}

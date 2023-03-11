import React from 'react';
import { Container, PageTitle } from '../common/interface/UI';
import "./Header.css";

export default function Header() {
    return (
        <section class="header">
            <Container className="pt-5 justify-content-center">
                <PageTitle title="Thaís Basso" subtitle="nutricionista funcional e comportamental" />
            </Container>
        </section>
    );
}

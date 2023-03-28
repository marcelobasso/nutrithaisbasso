import React from 'react';
import { Container, PageTitle } from '../common/interface/UI';
import "./Header.css";

export default function Header(props) {
    return (
        <header className="header">
            <Container className="pt-5 justify-content-center">
                <PageTitle title={props.title} subtitle={props.subtitle} />
            </Container>
        </header>
    );
}

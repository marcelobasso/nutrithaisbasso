import React from "react";
import { Container, PageTitle } from "../common/interface/UI";
import "./Header.css";

export default function Header(props) {
    return (
        <header className={`${props.className || ""}`}>
            <Container className="py-5 justify-content-center">
                {props.children && props.children}
                <PageTitle title={props.title} subtitle={props.subtitle} />
            </Container>
        </header>
    );
}

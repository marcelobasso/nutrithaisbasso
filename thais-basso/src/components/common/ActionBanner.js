import React from "react";
import { CallToAction, Container, Row, SectionTitle } from "./interface/UI";

export default function ActionBanner(props) {
    return (
        <section className="sobre-mim-call-to-action my-4">
            <Container>
                <Row>
                    <div className="col-lg-6 col-md-12">
                        <div className="d-flex justify-content-center align-item-center flex-column h-100 p-5">
                            <SectionTitle>{props.text}</SectionTitle>
                            <CallToAction text={props.CallToAction} className="mt-4" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 px-5">
                        {props.image}
                    </div>
                </Row>
            </Container>
        </section>
    );
}

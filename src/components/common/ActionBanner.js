import React from "react";
import { CallToAction, Container, SectionTitle } from "./interface/UI";
import "./ActionBanner.css";

export default function ActionBanner(props) {
    return (
        <section className="action-banner my-5">
            <Container>
                <div className="action-banner-box text-center white">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="action-banner-image-container mb-5">
                            {props.image}
                        </div>
                        <SectionTitle className="action-banner-title">{props.text}</SectionTitle>
                        <div className="text-center">
                            <CallToAction text={props.CallToAction} className="mt-4" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

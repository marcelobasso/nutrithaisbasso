import React from "react";
import { Container, Row, SectionTitle } from "../common/interface/UI";

export default function CVList(props) {
    return (
        <div className="cv-items">
            <Container>
                <hr />
                <SectionTitle className="mb-5 mt-5 text-center">{props.title}</SectionTitle>
                {props.content.map((item) => (
                    <div className="item mb-4">
                        <Row>
                            <div class="col-lg-1 col-md-0">
                                <div className="period">{item.period}</div>
                            </div>
                            <div class="col-lg-11 col-md-0">
                                <h4>
                                    <b>{item.title}</b>
                                </h4>
                                <a href={item.institutionSite || ""} target="_blank" rel="noreferrer">
                                    <span>{item.institution}</span>
                                </a>
                                <p>{item.description}</p>
                            </div>
                        </Row>
                    </div>
                ))}
            </Container>
        </div>
    );
}

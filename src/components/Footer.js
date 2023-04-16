import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Container } from "./common/interface/UI";
import "./Footer.css";

export default function Footer() {

    return (
        <footer className="text-center text-lg-start">
            <div className="container p-5 px-2">
                <div className="row dark-violet">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">
                            <b>
                                <i className="fas me-3 mb-3 fa-map-marked-alt"></i> Onde me encontrar?
                            </b>
                        </h5>
                        <p className="mb-2">Rua Humberto Accorsi, n° 230 - Sala 02</p>
                        <p className="mb-2">Edifício Rádio Estação, bairro Aurora - 95185-000</p>
                        <p className="mb-2">Carlos Barbosa/RS</p>
                        <br />
                        <p className="mb-0">
                            <Link to="/contato">Veja outras formas de contato</Link>
                        </p>
                    </div>
                    <div className="footerLogo col-lg-6 col-md-12 mb-4 mb-md-0 d-flex justify-content-end align-items-center">
                        <img src="/icons/logo.png" className="logo" alt="Logo Thaís Basso nutricionista" />
                    </div>
                </div>
            </div>
            <div className="footerHi p-3">
                <Container className="d-flex justify-content-between">
                    <span>
                        Made with <i className="fas fa-heart heart"></i> by Lucas and Marcelo
                    </span>
                    <span>© All rights are reserved | 2022</span>
                </Container>
            </div>
        </footer>
    );
}

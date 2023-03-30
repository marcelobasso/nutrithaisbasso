import { Link } from "gatsby";
import React from "react";
import "../styles/404.css";

export default function p404() {
    return (
        <div className="err404 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <img src="/thais-basso-demo/icons/logo-with-name.png" alt="Logo Thaís Basso" className="mb-4" />
            <h4>Página não encontrada (404)</h4> 
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    );
}

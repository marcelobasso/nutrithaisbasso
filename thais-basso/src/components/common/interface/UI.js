import React from "react";

const PageTitle = (props) => (
    <h1 className={`text-center  ${props.className || ""}`}>
        <span className="d-block title mb-3">{props.title}</span>
        {props.subtitle && <span className="subtitle d-block">{props.subtitle}</span>}
    </h1>
);

const SectionTitle = (props) => <h3 className={`text mb-4 p-0 fs-1gg ${props.className || ""}`}>{props.children}</h3>;

const SectionText = (props) => <p className={`text mb-4 p-0 ${props.className}`}>{props.children}</p>;

const Row = (props) => <div className={`row ${props.className || ""}`}>{props.children}</div>;

const Container = (props) => <div className={`container-lg px-2 py-2 ` + props.className}>{props.children}</div>;

const CallToAction = (props) => {
    const whatsappLink = "https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005";

    return (
        <a className={props.className} href={props.href || whatsappLink} alt={props.alt || false} target={props.target || false}>
            <button type="button" className={`btn fs-6 text-center w-75`}>
                {props.text}
            </button>
        </a>
    );
};

export { SectionText, SectionTitle, Row, Container, PageTitle, CallToAction };

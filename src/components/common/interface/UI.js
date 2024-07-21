import React from "react";

const PageTitle = (props) => (
    <h1 className={`text-center page-title ${props.className || ""}`}>
        <span className="d-block title">{props.title}</span>
        {props.subtitle && <span className="subtitle d-block mt-3">{props.subtitle}</span>}
    </h1>
);

const SectionTitle = (props) => (
    <h3 className={`text mb-4 p-0 fs-1gg ${props.className || ""}`}>{props.children}</h3>
);

const SectionText = (props) => (
    <p className={`text mb-4 p-0 ${props.className}`}>{props.children}</p>
);

const Row = (props) => <div className={`row ${props.className || ""}`}>{props.children}</div>;

const Container = (props) => (
    <div className={`container-custom px-2 py-2 ` + props.className || ""}>{props.children}</div>
);

const CallToAction = (props) => {
    const whatsappLink = "https://api.whatsapp.com/send?1=pt_BR&phone=5554997119446";

    return (
        <a
            className={props.className || ""}
            href={props.href || whatsappLink}
            alt={props.alt || false}
            target={props.target || false}
            rel="noreferrer"
        >
            <button
                type="button"
                className={`callToAction btn fs-6 text-center ${props.buttonClassName || ""}`}
            >
                {props.text || "Marque sua consulta"}
            </button>
        </a>
    );
};

const ShadowBox = (props) => {
    return (
        <div className={`${props.className || ''} shadow-custom p-4`}>
            {props.children}
        </div>
    );
}

export { SectionText, SectionTitle, Row, Container, PageTitle, CallToAction, ShadowBox };

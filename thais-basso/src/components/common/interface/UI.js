import React from 'react';

const PageTitle = (props) => (
    <h1 className={`text-center  ${props.classname}`}>
        <span className="d-block title mb-3">{props.title}</span>
        {props.subtitle && <span className="subtitle d-block">{props.subtitle}</span>}
    </h1>
);

const SectionTitle = (props) => <h3 className={`text mb-4 p-0 fs-1gg ${props.className}`}>{props.children}</h3>;

const SectionText = (props) => <p className="text mb-4 p-0">{props.children}</p>;

const Row = (props) => <div className="row">{props.children}</div>;

const Container = (props) => <div className={`container-lg px-2 py-2 ` + props.className}>{props.children}</div>;

const CallToAction = (props) => (
    <a className={props.className} href={props.href || false} alt={props.alt || false} target={props.target || false}>
        <button type="button" className={`btn fs-6 text-center w-75`}>
            {props.text}
        </button>
    </a>
);

export { SectionText, SectionTitle, Row, Container, PageTitle, CallToAction };

import React from 'react';
import { SectionText, SectionTitle } from './interface/UI';

export default function Section(props) {
    return (
        <>
            <SectionTitle className={props.className}>{props.title}</SectionTitle>
            <SectionText className={props.className}>{props.content}</SectionText>
        </>
    );
}

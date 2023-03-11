import React from 'react';
import { SectionText, SectionTitle } from './interface/UI';

export default function Section(props) {
    return (
        <>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.content}</SectionText>
        </>
    );
}

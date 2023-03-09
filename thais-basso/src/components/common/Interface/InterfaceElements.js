import React from 'react';

export function SectionTitle(props) {
    return <h3 className="text mb-4 p-0 fs-1gg">{props.children}</h3>;
}

export function SectionText(props) {
    return <p className='text mb-4 p-0'>{props.children}</p>
}

export function Row(props) {
    return <div className="row">{props.children}</div>;
}

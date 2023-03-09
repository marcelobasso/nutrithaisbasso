import React from 'react';

export default function CallToAction(props) {
    return (
        <a href={props.href || false} alt={props.alt || false} target={props.target || false}>
            <button type="button" class="btn btn-rounded fs-6">
                {props.text}
            </button>
        </a>
    );
}

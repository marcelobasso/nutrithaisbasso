import React from "react";

export default function Wave(props) {
    return (
        <svg id="wave" style={{ transform: `rotate(${props.rotate})`, transition: '0.3s', position: 'relative', zIndex: -10, ...props.style }} viewBox="0 0 1440 240" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stop-color="rgba(222, 208, 231, 1)" offset="0%"></stop>
                    <stop stop-color="rgba(222, 208, 231, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path style={{ transform: 'translate(0, 0px)', opacity: 1 }} fill="url(#sw-gradient-0)" d={props.d}></path>
        </svg>
    );
}

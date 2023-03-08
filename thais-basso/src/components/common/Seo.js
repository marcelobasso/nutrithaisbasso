import React from "react";

export default function Seo(props) {
    return (
        <>
            <meta charset="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <link rel="canonical" href="https://thaisbasso.com" />
            <link
                rel="icon"
                type="image/svg+xml"
                href="favicon.svg"
            />
            {props.children}
        </>
    );
}

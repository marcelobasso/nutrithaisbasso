import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function Seo(props) {
    const data = useStaticQuery(graphql`
        query Metadata {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    const { title, description } = data.site.siteMetadata;

    return (
        <>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://thaisbasso.com" />
            <link rel="icon" type="image/svg+xml" href="favicon.svg" />
            <title>{props.title || title}</title>
            <meta name="description" content={props.description || description} />
        </>
    );
}

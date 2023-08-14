import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import "./Flowery.css";

export default function Flowery() {
    const query = useStaticQuery(graphql`
        query Flower {
            image: allFile(filter: { name: { eq: "flowery" } }) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData(formats: WEBP, layout: FULL_WIDTH, placeholder: BLURRED)
                        }
                    }
                }
            }
        }
    `);

    const floweryImage = getImage(query.image.edges[0].node.childImageSharp.gatsbyImageData);

    return <GatsbyImage className="flowery_image" image={floweryImage} />;
}

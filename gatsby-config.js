/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `fonts`,
                path: `./src/fonts`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `./src/`,
            },
        },
        "gatsby-plugin-react-svg",
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                siteUrl
                            }
                        }
                        allSitePage {
                            nodes {
                                path
                                pageContext
                            }
                        }
                    }
                `,
                serialize: ({ path, pageContext }) => {
                    return {
                        url: path,
                        lastmod: pageContext?.lastMod,
                    };
                },
            },
        },
        `gatsby-plugin-git-lastmod`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://thaisbasso.com',
                sitemap: 'https://thaisbasso.com/sitemap-0.xml',
                policy: [{userAgent: '*', allow: '/'}]
            }
        },
        'gatsby-plugin-cname'
    ],

    siteMetadata: {
        title: "Thaís Basso | Nutricionista funcional e comportamental",
        description:
            "Nutricionista pós-graduada em nutrição funcional e comportamento alimentar, uma das áreas mais atuais da Nutrição. Apaixonada pela minha profissão e como ela pode mudar a vida das pessoas.",
        canonical: "https://thaisbasso.com",
        siteUrl: "https://thaisbasso.com",
        author: "marceloBasso",
    },
};

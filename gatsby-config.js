/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    pathPrefix: "",
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
    ],

    siteMetadata: {
        title: "Thaís Basso | Nutricionista funcional e comportamental",
        description: "Nutricionista pós-graduada em nutrição funcional e comportamento alimentar, uma das áreas mais atuais da Nutrição. Apaixonada pela minha profissão e como ela pode mudar a vida das pessoas.",
        canonical: "https://thaisbasso.com",
        author: "marceloBasso",
    },
};

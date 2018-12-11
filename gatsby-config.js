module.exports = {
    siteMetadata: {
        title: `Lea Tortay`,
        description: `Freelance Front-End Web Developer - Paris`,
        menuLinks: [
            {
                name:'blog',
                link:'/blog'
            },
            {
                name:'ressources',
                link:'/ressources'
            }
        ]
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        {      
            resolve: `gatsby-source-filesystem`,      
            options: {        
                name: `blog`,        
                path: `${__dirname}/content/blog`,      
            },    
        },
        {      
            resolve: `gatsby-source-filesystem`,      
            options: {        
                name: `ressources`,        
                path: `${__dirname}/content/ressources`,      
            },    
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Lea Tortay",
                short_name: "LeaT",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                display: "minimal-ui",
                icon: "src/images/icon.png", // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-remark-external-links",
            options: {
                target: "_self",
                rel: "nofollow"
            }
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Montserrat`,
                        variants: [`400`, `700`],
                    },
                    {
                        family: `Domine`,
                        variants: [`400`, `700`]
                    },
                ],
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        'gatsby-plugin-offline',
    ],
}
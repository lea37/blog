module.exports = {
    siteMetadata: {
        title: `My first gatsby blog !`
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
                path: `${__dirname}/src/posts/blog`,      
            },    
        },
        {      
            resolve: `gatsby-source-filesystem`,      
            options: {        
                name: `ressources`,        
                path: `${__dirname}/src/posts/ressources`,      
            },    
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "GatsbyJS",
                short_name: "GatsbyJS",
                start_url: "/",
                background_color: "#6b37bf",
                theme_color: "#6b37bf",
                display: "minimal-ui",
                icon: "src/images/icon.png", // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        'gatsby-plugin-offline',
    ],
}
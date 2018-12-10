import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"

export default ({ data }) => { 
    const post = data.markdownRemark
    return (
        <Container>
            <Header>
                <div>
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </Header>
        </Container>
    )
}


export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {        
                title      
            }    
        }  
    }
`
import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
    return (
      <Container>
        <Header>
            <h1>Blog page</h1>
            <p>All the ressources that had helped me or that i found interesting to share. Hope it help you!</p>
        </Header>
        <div>
            <h4>{data.allFile.totalCount} Posts</h4>
            {data.allFile.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.childMarkdownRemark.fields.slug}>
                        <h3>
                            {node.childMarkdownRemark.frontmatter.title}{" "}<span> — {node.childMarkdownRemark.frontmatter.date}</span>
                        </h3>
                        <p>{node.childMarkdownRemark.excerpt}</p>
                    </Link>
                </div>
            ))}
        </div>
      </Container>
    )
}

export const query = graphql`
    query {
        allFile(filter: { sourceInstanceName: { eq: "blog" } } sort: {order: DESC, fields: modifiedTime}) {
            totalCount
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                  }
                  fields {
                    slug
                  }
                  excerpt
                }
              }
            }
          }
      }
`
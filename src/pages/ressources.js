import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
    return (
      <Container>
        <Header>
            <h1>Ressources page</h1>
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
                    </Link>
                    <a href={node.childMarkdownRemark.frontmatter.link}>{node.childMarkdownRemark.frontmatter.title}</a>
                        {node.childMarkdownRemark.frontmatter.tags.map((tag, index) => {
                            return (
                                <span key={index} className="tag"><Link to={`/tags/${tag}`}>{tag}</Link></span>
                            )
                        })}
                        <p>{node.childMarkdownRemark.excerpt}</p>
                </div>
            ))}
        </div>
      </Container>
    )
}

export const query = graphql`
    query {
        allFile(filter: { sourceInstanceName: { eq: "ressources" } } sort: {order: DESC, fields: modifiedTime}) {
            totalCount
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    title
                    tags
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
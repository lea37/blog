import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"

const PostList = styled.div`
  width: 80%;
  display: inline-block;
`

export default ({ data }) => {
    return (
      <Layout>
        <Header />
        <div>
            You’ll find here post that i share my best ressources like css tricks, 
            Smashing Magazine or developer like Sarah Soueidan, Wes Bos …
        </div>
        <div>
          <div>
              {data.allFile.edges.map(({ node }) => (
                  <div key={node.id}>
                      <Link to={node.childMarkdownRemark.fields.slug}>
                          <h3>
                              {node.childMarkdownRemark.frontmatter.title}{" "}<span> — {node.childMarkdownRemark.frontmatter.date}</span>
                          </h3>
                      </Link>
                      <a href={node.childMarkdownRemark.frontmatter.link}>{node.childMarkdownRemark.frontmatter.title}</a>
                      <p>{node.childMarkdownRemark.excerpt}</p>
                  </div>
              ))}
              <h4>{data.allFile.totalCount} Posts</h4>
          </div>
        </div>
      </Layout>
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
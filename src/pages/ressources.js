import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Header from "../components/header"
import TagsList from "../components/tags"


const PostList = styled.div`
  width: 80%;
  display: inline-block;
`

const Sidebar = styled.div`
  width: 20%;
  display: inline-block;
  vertical-align: top;
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
          <PostList>
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
              <h4>{data.allFile.totalCount} Posts</h4>
          </PostList>
          <Sidebar><TagsList /></Sidebar>
        </div>
      </Layout>
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
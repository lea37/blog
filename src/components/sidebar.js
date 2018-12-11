import React from "react"
import {StaticQuery, Link, graphql} from "gatsby"
import styled from "styled-components"

const TagList = styled.aside`
  width: 20%;
  display: inline-block;
  vertical-align: top;
`

const Tags = ({data}) => {
  const posts = data.allMarkdownRemark.group

  return(
    <TagList>
      {
        posts.map(item =>
          <div>{item.totalCount} - <Link to={`/tags/${item.fieldValue}`}>{item.fieldValue}</Link></div>
        )
      }
    </TagList>
  )
}

const Sidebar = () => {
  return(
    <StaticQuery 
      query={graphql`
        {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] } limit: 200) {
            group(field: frontmatter___tags) {
              fieldValue
              totalCount
            }
          }
        }
      `}
      render={data => <Tags data={data}/>}
    />
  )
}

export default Sidebar




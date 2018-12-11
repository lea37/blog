import React from "react"
import kebabCase from "lodash/kebabCase"
import {StaticQuery, Link, graphql} from "gatsby"

const Tags = ({data}) => {
  const group = data.allMarkdownRemark.group

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const TagsList = () => {
  return(
    <StaticQuery 
      query={graphql`
        query {
          allMarkdownRemark(
            limit: 2000
          ) {
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

export default TagsList
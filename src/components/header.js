import React from "react"
import {StaticQuery, Link, graphql} from "gatsby"
import styled from "styled-components"

const Head = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const menuLinks = data.site.siteMetadata.menuLinks

  return (
    <div>
        <Link to="/"><h1>{title}</h1></Link>
        <p>{description}</p>
        <nav>
          {
            menuLinks.map(item =>
              <li key={item.name}><Link to={item.link}>{item.name}</Link></li>
            )
          }
        </nav>
    </div>
  )
}

const Header = () => {
  return(
    <StaticQuery 
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={data => <Head data={data}/>}
    />
  )
}

export default Header
import React from "react"
import {StaticQuery, Link, graphql} from "gatsby"
import styled from "styled-components"

const Heading = styled.h1`
    font-size: 32px;
    width: 40%;
    display: inline-block;
`

const SubHeading = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-top: .5em;
`

const HeadingLink = styled(Link)`
    color: #333;
    text-decoration: none;
`

const Nav = styled.nav`
    width: 60%;
    display: inline-block;
    text-align: right;
`

const NavItem = styled.li`
    display: inline-block;
    list-style-type: none;
    margin: 0 1em;
`

const NavItemLink = styled(Link)`
    color: #333;
    text-decoration: none;
    text-transform: capitalize;
    font-family: 'Montserrat', sans-serif;
`

const Head = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const menuLinks = data.site.siteMetadata.menuLinks

  return (
    <header>
        <Heading>
            <HeadingLink to="/">{title}</HeadingLink>
            <SubHeading>{description}</SubHeading>
        </Heading>
        <Nav>
          {
            menuLinks.map(item =>
              <NavItem key={item.name}><NavItemLink to={item.link}>{item.name}</NavItemLink></NavItem>
            )
          }
        </Nav>
    </header>
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
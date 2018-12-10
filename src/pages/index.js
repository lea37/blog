import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
        </div>
    )
  }
}

export default ({ data }) => (
    <Container>
        <Header>
            <h1>{data.site.siteMetadata.title}</h1> 
            <p>
                What do I like to do? Lots of course but definitely enjoy building
                websites.
            </p>
        </Header>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Container>
)


export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
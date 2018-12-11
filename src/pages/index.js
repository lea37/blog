import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import styled from "styled-components"

const Main = styled.div`
    margin-top: 5em;
    max-width: 60%;
    text-align: left;
`

const TextLink = styled.a`
    color: #0000EE;
`


export default ({ data }) => (
    <Layout>
        <Header />
        <Main>
            <p>I’m passionate about discovering new technologies or new stuff to build!</p>
            <p>The last projects i’ve been working on is, <TextLink href="https://www.hartford.fr/" target="_blank">Hartford</TextLink>, <TextLink href="http://www.atelierdore.com/fr/" target="_blank">Atelierdoré</TextLink>, <TextLink href="https://www.empreintes-paris.com/fr/" target="_blank">Empreintes</TextLink>, <TextLink href="https://www.laperledesgreves.com/" target="_blank">La perle des grèves</TextLink> and <TextLink href="https://www.bonne-maman.com/" target="_blank">Bonne Maman</TextLink></p>
            <p>I hope you’ll enjoy the post and ressources that i share and that they will help you to evolve or discover new things :)</p>
        </Main>
    </Layout>
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
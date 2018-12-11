import React from "react"
import { graphql } from "gatsby"
import Container from "../components/container"
import Header from "../components/header"
import styled from "styled-components"

const Wrapper = styled.div`
    background: red;
`


export default ({ data }) => (
    <Wrapper>
        <Header />
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Wrapper>
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
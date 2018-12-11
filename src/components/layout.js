import React from "react"
import styled from "styled-components"
import "./layout.css"

const Wrapper = styled.div`
    max-width: 1200px;
    margin: 3em auto;
`

export default ({ children }) => <div><Wrapper>{children}</Wrapper></div>
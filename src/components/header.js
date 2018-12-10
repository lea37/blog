import React from "react"
import { Link } from "gatsby"


const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
  <div>
    <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="/ressources/">Ressources</ListLink>
        </ul>
    </header>
    {children}
  </div>
)
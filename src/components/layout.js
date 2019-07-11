import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import styled from "styled-components"
import { Link } from "gatsby"
import Nav from "./nav"
import Container from "../system/index"
import Footer from "./footer"

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`
const H1 = styled.h1`
  margin: 0;
  font-size: 1.1rem;
  font-family: Russo One;
  text-transform: uppercase;
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <Header>
          <H1>
            <Link
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              {data.site.siteMetadata.title}
            </Link>
          </H1>
          <Nav />
        </Header>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

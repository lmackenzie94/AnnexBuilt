import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Hero from "../components/hero"
import Gallery from "../components/gallery"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Gallery />
    <Contact />
  </Layout>
)

export default IndexPage

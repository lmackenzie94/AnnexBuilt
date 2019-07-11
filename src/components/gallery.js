import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Box } from "rebass"

const GalleryContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -10px;
`

function Gallery() {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      image1: file(relativePath: { eq: "image1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "image4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "image5.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const arrayData = Object.values(data)

  return (
    <GalleryContainer>
      {arrayData.map(img => (
        <Box
          as={Img}
          fluid={img.childImageSharp.fluid}
          alt=""
          width={[`100%`, `100%`, `75%`, `calc(50% - 20px)`]}
          css={{ display: `inline-block`, margin: `10px`, maxHeight: `400px` }}
        />
      ))}
    </GalleryContainer>
  )
}

export default Gallery

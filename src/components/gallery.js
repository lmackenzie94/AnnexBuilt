import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <div style={{ display: `flex`, flexWrap: `wrap` }}>
      {arrayData.map(img => (
        <div style={{ width: `100%` }}>
          <Img
            fluid={img.childImageSharp.fluid}
            alt=""
            style={{ maxWidth: `400px` }}
          />
        </div>
      ))}
    </div>
  )
}

export default Gallery

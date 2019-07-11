import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../images/logo.png"
import GalleryItem from "./galleryItem"

const GalleryButton = styled.button`
  margin: 0;
  margin-right: 1.5rem;
  padding: 3px;
  transition: all 0.3s linear;
  font-size: 0.8rem;
  text-transform: uppercase;
  background: none;
  outline: none;
  border: none;
  background: ${props => (props.active ? `#fff93d` : `none`)};
  &:hover {
    background: #fff93d;
    cursor: pointer;
  }
`

const GalleryContainer = styled.section`
  display: flex;
  margin: 1rem -5px;
  flex-wrap: wrap;
`

function Gallery() {
  const images = [
    { src: Logo, title: "Image 1" },
    { src: Logo, title: "Image 2" },
  ]

  return (
    <>
      <GalleryButton active>All</GalleryButton>
      <GalleryButton>Tables</GalleryButton>
      <GalleryButton>Chairs</GalleryButton>
      <GalleryContainer>
        {images.map(image => (
          <GalleryItem image={image} />
        ))}
      </GalleryContainer>
    </>
  )
}

export default Gallery

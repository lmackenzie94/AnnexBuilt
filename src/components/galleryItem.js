import React from "react"
import styled from "styled-components"

const ItemContainer = styled.div`
  background: grey;
  margin: 5px;
  flex: 1 1 200px;
`

const ItemImage = styled.img`
  max-width: 100%;
  width: 100%;
  display: block;
`

function GalleryItem({ image }) {
  return (
    <ItemContainer>
      <ItemImage src={image.src} />
      <p>{image.title}</p>
    </ItemContainer>
  )
}

export default GalleryItem

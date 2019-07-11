import React from "react"
import styled from "styled-components"

const HeroHeading = styled.h2`
  font-family: Roboto Mono;
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0;
  text-transform: uppercase;
  border-bottom: 2px solid #fff93d;
`

const HeroText = styled.p`
  width: 60%;
  color: #999;
  margin: 2rem 0;
  @media (max-width: 831px) {
    width: 100%;
  }
`

const Hero = () => (
  <>
    <HeroHeading>Crafted with Care.</HeroHeading>
    <HeroText>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur earum
      asperiores voluptates neque iusto esse, cumque deleniti temporibus
      inventore cupiditate.
    </HeroText>
  </>
)

export default Hero

import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Container from "../system/index"
import LogoImage from "../images/logo.png"

const FooterContainer = styled.footer`
  background: #000;
  padding: 2rem 0;
  margin-top: 3rem;
  @media (max-width: 400px) {
    padding: 1rem 0;
    margin-top: 3rem;
  }
`

const FooterSocials = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
`

const SocialIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s linear;
  margin: 0 1rem;
  &:hover {
    color: #fff93d;
  }
  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`
const Logo = styled.div`
  height: 150px;
  width: 150px;
  @media (max-width: 400px) {
    display: none;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <Container style={{ display: `flex`, justifyContent: `center` }}>
        {/* <Logo>
          <img src={LogoImage} />
        </Logo> */}
        <FooterSocials>
          <SocialIcon icon={faFacebookF} />
          <SocialIcon icon={faInstagram} />
          <SocialIcon icon={faEnvelope} />
        </FooterSocials>
      </Container>
    </FooterContainer>
  )
}

export default Footer

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
  margin-top: 5rem;
`

const FooterSocials = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
`

const FooterIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.5rem;
  margin-left: 2rem;
  transition: all 0.3s linear;
  &:hover {
    color: #fff93d;
    transform: scale(1.2);
  }
`
const Logo = styled.div`
  height: 150px;
  width: 150px;
`

function Footer() {
  return (
    <FooterContainer>
      <Container style={{ display: `flex`, justifyContent: `space-between` }}>
        <Logo>
          <img src={LogoImage} />
        </Logo>
        <FooterSocials>
          <FooterIcon icon={faFacebookF} />
          <FooterIcon icon={faInstagram} />
          <FooterIcon icon={faEnvelope} />
        </FooterSocials>
      </Container>
    </FooterContainer>
  )
}

export default Footer

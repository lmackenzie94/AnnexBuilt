import React from "react"
import styled from "styled-components"

const ContactContainer = styled.section`
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 2px solid #fff93d;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  align-items: center;
  margin: 0 auto;
`

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #000;
  margin: 1rem 0;
  width: 100%;
`

const SendButton = styled.button`
  border: none;
  background: #fff93d;
  margin: 1rem 0;
  padding: 5px 15px;
`

const TextArea = styled.textarea`
  border: 2px solid #000;
  margin: 1rem 0;
  width: 100%;
  min-height: 100px;
  padding: 0.5rem;
`

function Contact() {
  return (
    <ContactContainer>
      <Form>
        <label htmlFor="name" />
        {/* Name: */}
        <Input type="text" id="name" placeholder="Name" />
        <label htmlFor="email" />
        {/* Email: */}
        <Input type="text" id="email" placeholder="Email" />
        <label htmlFor="message" />
        {/* need hidden label */}
        <TextArea placeholder="What can I do for you?" />
        <SendButton type="submit">Send</SendButton>
      </Form>
    </ContactContainer>
  )
}

export default Contact

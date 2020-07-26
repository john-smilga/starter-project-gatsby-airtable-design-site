import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Background = () => {
  return <h2>background image component</h2>
}

const fadeIn = keyframes`
      from{
         background-color:rgb(0,0,0,0.8);
      }
      to{
        background-color:rgba(0,0,0,0.4);
      }
      `

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }
  .bcg::before {
    opacity: 1;
  }
`
export default Background

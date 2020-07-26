import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, Algolia } from "../components"

const ProjectsPage = () => {
  return <h2>projects page</h2>
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export default ProjectsPage

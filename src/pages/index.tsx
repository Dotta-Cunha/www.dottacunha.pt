import * as React from 'react'
import styled from '@emotion/styled'

import Page from '../layouts/Page'

const Center = styled.div`
  top: 50%;
  left: 50%;
  width: 100%;
  padding: 15px;
  position: fixed;
  transform: translate(-50%, -50%);
`

const Headline = styled.h1`
  margin: 0;
  font-size: 42px;
  font-weight: normal;
  font-family: 'Megrim', cursive;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 64px;
  }
`

const IndexPage = () => (
  <Page>
    <Center>
      <Headline>Dotta & Cunha</Headline>
    </Center>
  </Page>
)

export default IndexPage

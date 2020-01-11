import * as React from 'react'
import styled  from '@emotion/styled'

import Page from '../layouts/Page'

const Center = styled.div`
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
`

const Headline = styled.h1`
  margin: 0;
  font-size: 64px;
  font-weight: normal;
  font-family: 'Megrim', cursive;
`

const IndexPage = () => (
  <Page>
    <Center>
      <Headline>Dotta & Cunha</Headline>
    </Center>
  </Page>
)

export default IndexPage

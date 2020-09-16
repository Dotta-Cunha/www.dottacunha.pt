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

const Heading = styled.h1`
  margin: 0;
  font-size: 12vw;
  font-weight: normal;
  font-family: 'Megrim', cursive;
  text-align: center;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 90px;
  }
`

const Subheading = styled.h2`
  margin: 0;
  font-size: 4vw;
  font-weight: 300;
  font-family: 'Open Sans', sans;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`

const Text = styled.p`
  margin: 0;
  font-size: 2vw;
  font-weight: 300;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const IndexPage = () => (
  <Page>
    <Center>
      <Heading>Dotta & Cunha</Heading>
      <Subheading>Real Estate Investments</Subheading>

      <Text>partners@dottacunha.pt</Text>
    </Center>
  </Page>
)

export default IndexPage

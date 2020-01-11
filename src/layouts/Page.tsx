import * as React from 'react'
import Helmet from 'react-helmet'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'

interface PageProps {
  children: React.ReactNode
}

const globalStyles = css`
  ${emotionReset}
`

export const Page = ({ children }: PageProps) => (
  <>
    <Helmet
      title='Dotta &amp; Cunha'
      meta={[{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }]}
      link={[{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Megrim&display=swap' }]}
    />
    <Global styles={globalStyles} />
    {children}
  </>
)

export default Page

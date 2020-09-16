import * as React from 'react'
import Helmet from 'react-helmet'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/core'

interface PageProps {
  children: React.ReactNode
}

const globalStyles = css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }
`

export const Page = ({ children }: PageProps) => (
  <>
    <Helmet
      title='Dotta &amp; Cunha'
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Megrim&family=Open+Sans:wght@300&display=swap',
        },
      ]}
    />
    <Global styles={globalStyles} />
    {children}
  </>
)

export default Page

import React, { Fragment } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'

const Big = styled.span`
  font-size: ${fontSize.f6};
  color: ${color.grey900};
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 1.35;
  ${media.lg`
    font-size: ${fontSize.f5};
    letter-spacing: -0.3px;
  `}
  ${media.sm`
    font-size: ${fontSize.f5};
  `}
`

const About = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>About</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>
          Get Blockchain Platforms and DApps Developed Right.
          </Big>
          <p>
          Bayro is a team of engineers, which helps decentralized protocols and developer platforms to accelerate growth of their ecosystems. By delivering hands-on coding and contributions, Bayro specializes in supercharging developer adoption and network usage. Reach out to Bayro for brainstorming, and our team will help you to ship applications, elaborate smart contracts, robust developer tools (SDKs/APIs/sample apps), or simply improve performance/cost of oracles. Bayro works exclusively with entrepreneurs who are builders of decentralized infrastructure protocols, applications, and ecosystems.
          </p>
          <p>
            <i>Need a free consultation on your project?</i>
          </p>
        </Fragment>
      }
    />
  )
}

export default About

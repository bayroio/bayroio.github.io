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
          Bayro is building an interface between Blockchain and Financial Services that enables the issuance and trading of financial instruments using synthetic assets.
          </Big>
          <p>
          Reach new levels of massive investment through decentralized finance, where individual investors, fintech companies, traditional financial firms or technological giants are attracted so that they themselves can issue new financial products and trade it... This is our mission!
          </p>
        </Fragment>
      }
    />
  )
}

export default About

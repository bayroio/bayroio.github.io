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
          Bayro is the trusted technology partner for companies entering the digital assets ecosystem.
          </Big>
          <p>
          Always helping to companies with the opportunities and challenges of the Blockchain technologies by offering avant garde solutions and professional  services in the field of distributed ledgers, cryptocurrencies, digital money and assets.
          </p>
          <p>
          We believe in emerging technology and its significant advantages for our clients.
          </p>
        </Fragment>
      }
    />
  )
}

export default About

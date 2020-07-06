import React, { Fragment } from 'react'

import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import ProjectNoLogo from 'components/projectnologo'

import Link from 'gatsby-link'
const LifeTimeLink = <Link to="/lifetime"></Link>

/*const ScenographicsLink = (
  <a href="http://ahoj.network">Go to Ahoj Network ↗</a>
)*/

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

const Writing = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Solutions</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>AHOJ</Big>
          <p>
            <i>The Digital Money Work for Everyone.</i>
          </p>
          <p>
          AHOJ offers a complete technology stack for the management of cryptocurrencies and tokens ensuring the best-fit balance for security and liquidity.
          </p>
          <br></br>
          <ProjectNoLogo
            title="Payments"
            abstract="A payment platform that empowers people and companies."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Wallet"
            abstract="Your mobile gateway to the financial world."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Save + Lending + Borrowing"
            abstract="Earn interest on your assets."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Asset Management"
            abstract="Portfolio manager, liquidity provider, and price sensor."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Brokerage"
            abstract="Buy and sell cryptocurrencies."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Tokenization"
            abstract="Manage the complete lifecycle of asset tokens."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Custody"
            abstract="Store and manage digital assets with robust key management."
            link={LifeTimeLink}
          />
        </Fragment>
      }
    />
  )
}

export default Writing

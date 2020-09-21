import React, { Fragment } from 'react'

import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import ProjectNoLogo from 'components/projectnologo'

import AhojSolutionsImage from '../img/Ahoj_Solutions.png'

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
      leftColumn={<SectionHeading>Products</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>AHOJ Finance Network</Big>
          <p>
            <i>The avant-garde DeFi protocol for derivatives supported by synthetics.</i>
          </p>
          <p>
          Ahoj Finance Network is a decentralized protocol, where new financial instruments or their combination are issued and traded, through the use of synthetic assets that represent any cryptocurrency, existing financial instrument or real world asset and it runs on a 3rd generation Blockchain.
          </p>
          <br></br>
          <ProjectNoLogo
            title="Ahoj.Swap"
            abstract="A simple way to trade one asset for another."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Ahoj.Mint"
            abstract="This is the right way to define economics/financial rules to create new ASA (AHOJ Synthetic Assets)."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Ahoj.Invest"
            abstract="A service to trade all minted ASA."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Ahoj.Dashboard"
            abstract="If you want check all the financial information around our synthetic market... this is the right place."
            link={LifeTimeLink}
          />
        </Fragment>
      }
    />
  )
}

export default Writing

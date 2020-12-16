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
          <Big>AHOJ Finance</Big>
          <p>
          It is a cutting-edge DeFi protocol that allows the issuance and trading of financial instruments using synthetic assets, and for that we are implementing the financial concept of "Total Return Swap".
         
          </p>
          <br></br>
          <ProjectNoLogo
            title="Ahoj.Token"
            abstract="Is a Synthetic Commodity Money to be used as a stablecoin within the protocol, and among other things that can be used as collateral / guarantee at the time of minting a synthetic in the protocol."
            
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Ahoj.Mix"
            abstract="Automated liquidity protocol powered by a constant product formula. It's composed by Ahoj.Jars: Liquidity Provider Protocol /Automated Market Maker and Ahoj.Swap: Trade one asset for another. "
            link={LifeTimeLink}
          />

          <ProjectNoLogo
            title="Ahoj.Synth"
            abstract="A service for creating economic or financial rules to mint new ASA (Ahoj Synthetic Assets)."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Ahoj.Dash"
            abstract="Dashboard with all financial informaction concerning $AHOJ & ASA market cap."
            link={LifeTimeLink}
          />
         
        </Fragment>
      }
    />
  )
}

export default Writing

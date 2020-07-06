import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
//import Project from 'components/project'
import ProjectNoLogo from 'components/projectnologo'

//import KellerkindLogo from 'img/kellerkindlogo'
//import PalettteAppLogo from 'img/palettteapplogo'
//import LifeTimeLogo from 'img/lifetimelogo'
//import BamLogo from 'img/bamlogo'

const LifeTimeLink = <Link to="/lifetime"></Link>
const PalettteLink = <Link to="/palettteapp"></Link>
const KellerkindLink = <Link to="/kellerkind"></Link>
const BamLink = <Link to="/bam"></Link>

const Work = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Services</SectionHeading>}
      rightColumn={
        <Fragment>
          <ProjectNoLogo
            title="Strategy Blockchain Advisory"
            abstract="Gain insight into business model prototyping, use case discovery, market analysis, and proofs-of-concept to develop comprehensive strategies for blockchain adoption."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Due Diligence Advisory"
            abstract="We can advise you in your merger and acquisition process, providing a technical, financial and regulatory evaluation of the technology company to be acquired."
            link={PalettteLink}
          />
          <ProjectNoLogo
            title="Regulation Advisory"
            abstract="When you decide to adopt our solutions to shape your new business model, we can advise you on regulatory issues."
            link={KellerkindLink}
          />
          <ProjectNoLogo
            title="Financial + Cryptocurrency Advisory"
            abstract="You need to know the present and future financial impact of your company in the new era, you need to understand or define a token or its impact on the market, we can advise you."
            link={BamLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work

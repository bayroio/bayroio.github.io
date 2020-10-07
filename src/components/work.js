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
            title="Blockchain Consulting"
            abstract="We can do prototyping, discovery, and proofs-of-concept to help you with the definition of strategies when your company is thinking about a blockchain adoption."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Financial + Cryptocurrency Advisory"
            abstract="You need to know the present and future financial impact of your company in the new era, you need to understand or define a token or its impact on the market, we can advise you."
            link={BamLink}
          />
          <ProjectNoLogo
            title="Blockchain Solutions Development"
            abstract="We integrate blockchain technology in your business, and help you build new solutions leveraging blockchain."
            link={PalettteLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work

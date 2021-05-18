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
            title="Smart Contracts"
            abstract="Smart contracts development + Peer review + Assessment of architecture + Functionality, performance and security audit + Secure, multi-signature capable CI/CD pipelines."
            link={BamLink}
          />
          <ProjectNoLogo
            title="Decentralized applications"
            abstract="Complete dApp development life cycle, from ideation, prototyping, MVP to deployment and maintenance + UX/UI design and implementation + Web/Mobile + Token Generation."
            link={PalettteLink}
          />
          <ProjectNoLogo
            title="Developer tools"
            abstract="SDKs + APIs + Protocols/platform starters projects + Web/mobile app components + Bots."
            link={PalettteLink}
          />
          <ProjectNoLogo
            title="Integrations"
            abstract="Trusted data feeds (oracles) + dApps seamlessly integration to other dApps and protocols + Stable Coins."
            link={PalettteLink}
          />
          <ProjectNoLogo
            title="Automation in the Cloud"
            abstract="Create images to run the network nodes locally as well for production grade deployment to most popular cloud providers + One-click-deploy tools + Network monitor. Dashboard. Notifications + Performance testing and benchmarking."
            link={PalettteLink}
          />
        </Fragment>
      }
    />
  )
}

export default Work

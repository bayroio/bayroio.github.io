import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import TwoColumns from 'components/twoColumns'
import SectionHeading from 'components/sectionHeading'
import Project from 'components/project'
import ProjectNoLogo from 'components/projectnologo'

//import CustomSoftLogo from 'img/customsoftlogo'
//import iAgrinetLogo from 'img/iAgrinet.png'
//import LifeTimeLogo from 'img/lifetimelogo'
//import BamLogo from 'img/bamlogo'

const CustomSoftLink = <Link to="https://www.customsoft.biz/" target="blank">Go to CustomSoft Website ↗</Link>
const iAgrinetLink = <Link to="http://www.iagrinet.com" target="blank">Go to iAgrinet Website ↗</Link>

const Clients = () => {
  return (
    <TwoColumns
      wide
      leftColumn={<SectionHeading>Clients</SectionHeading>}
      rightColumn={
        <Fragment>
          <ProjectNoLogo
            title="CustomSoft"
            abstract="Our services: Strategy Blockchain Advisory and Financial + Cryptocurrency Advisory."
            link={CustomSoftLink}
          />
          <ProjectNoLogo
            title="iAgrinet"
            abstract="Our Solutions: Payments B2B, Assets Management, Brokerage and Tokenization. Additionally, with our services of Strategy Blockchain Advisory, we are helping to create tracebalitiy solution of agri-pruducts, Self-Sovereign Identity (uPort) and an Ethereum Consortium Network (Hyperledger Besu)."
            link={iAgrinetLink}
          />
        </Fragment>
      }
    />
  )
}

export default Clients

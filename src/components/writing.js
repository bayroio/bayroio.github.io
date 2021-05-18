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
      leftColumn={<SectionHeading>Why Bayro?</SectionHeading>}
      rightColumn={
        <Fragment>
          <Big>Experienced and cross-functional teams</Big>
          <p>
          Experienced and cross-functional teams. Protofire can help you to build a turnkey team of experts in business analysis, architecture design, development, DevOps, QA engineering, UI/UX design, etc. We know how to keep the team inspired, motivated, and result-oriented. The size and composition of the team is stipulated for each project and can scaled up/down on demand.
          </p>
          <br></br>
          <ProjectNoLogo
            title="Providing value for customers is our guiding principle"
            abstract="Cherishing our reputation, we are very careful about our partnerships and collaborations. Protofire’s goal is to reach out to those customers with a history of contributions, driving a project to serve a developer community, and aiming at delivering a social impact."
            link={LifeTimeLink}
          />
          <ProjectNoLogo
            title="Always up to date on the latest blockchain trends"
            abstract="We are great enthusiasts and active contributors to open-source blockchain communities, hosting and participating in meetups globally. All the code we produce is open-source compliant with such best practices as code review, code quality, security analysis, automated tests, coverage, semantic versioning, and extensive documentation."
            link={LifeTimeLink}
          />
        </Fragment>
      }
    />
  )
}

export default Writing

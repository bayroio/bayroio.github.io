import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

import { fontSize } from 'styles/theme'

import SectionFooter from 'components/SectionFooter'

const FooterText = styled.div`
  text-align: right;
  font-size: ${fontSize.f0};
  ${media.lg`
    font-size: ${fontSize.f1};
  `}
  ${media.sm`
    text-align: left;
    font-size: ${fontSize.f1};
  `}
`
const BayroFooterText = styled.div`
  text-align: left;
  font-size: ${fontSize.f7};
`
const SloganFooterText = styled.div`
  text-align: left;
  font-size: ${fontSize.f5};
`

const Footer = () => {
  return (
    <SectionFooter>
      <BayroFooterText>
        <b>bayro</b>
      </BayroFooterText>
      <SloganFooterText>
        The starting point for digital assets.
      </SloganFooterText>
      <br></br>
      <FooterText>
        The code used in this page is open source, check it out on&nbsp;
        <a href="https://github.com/gabdorf/gabriel-adorf-portfolio">Github</a>
        <br />© 2020 Gabriel Adorf
      </FooterText>
    </SectionFooter>
  )
}

export default Footer

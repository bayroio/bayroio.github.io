import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'
import SectionFooter from 'components/sectionFooter'
import BayroLogo from 'img/bayrologo-nobackground.png'

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
const LogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? '24px 0 24px 24px' : '24px 0 0 0')};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`
const NameLink = styled.a`
  text-decoration: none;
`
const Role = styled.div`
  color: ${color.grey700};
  text-align: left;
  line-height: 1.4;
  font-size: ${fontSize.f4};
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f6};
  `};
`

const Footer = (props) => {
  return (
    <SectionFooter>
      <LogoWrapper article={props.article}>
        {!props.article && (
          <NameLink href="/">
            <img src={BayroLogo} alt="Bayro Logo" width="150" height="45" />
          </NameLink>
        )}
        {!props.article && <Role>Smart Contracts, Protocol Engineering and Developer Tools (SDKs/APIs)</Role>}
      </LogoWrapper>
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

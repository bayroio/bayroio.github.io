import React, { useState } from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'
import { color, fontSize } from 'styles/theme'
//import ClientWithLogo from 'components/clientwithlogo'
import BayroLogo from 'img/bayrologo-nobackground.png'
import Icon from 'components/icons'

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.lg`
  height: ${(props) => (props.article ? '64px' : '')};
  `}
  ${media.sm`
    display: ${(props) => (props.article ? 'flex' : 'block')};
  `};
  z-index: 10;
  height: ${(props) => (props.article ? '74px' : '')};
  ${media.xs`
    display: block;
    height: 112px;
  `}
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

const Name = styled.h1`
  white-space: nowrap;
  font-size: ${fontSize.f6};
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.8px;
  ${media.sm`
    text-align: center;
    font-size: ${fontSize.f7};
  `};
`

const NameArticle = styled.div`
  white-space: nowrap;
  font-size: ${fontSize.f5};
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.6px;
  color: ${color.grey900};
  ${media.xs`
    text-align: center;
  `};
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

const SocialLinks = styled.div`
  display: grid;
  grid-column-gap: 4px;
  grid-template-columns: auto auto auto;
  padding: 15px 24px 0 24px;
  ${media.sm`
    padding: ${(props) => (props.article ? '15px 12px 0 8px' : '4px 0 0 0')};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: ${color.grey900};
  border: 1px solid white;
  &:hover {
    border: 1px solid ${color.grey150};
    background: ${color.grey150};
    color: ${color.grey900};
  }
  &:active {
    color: ${color.grey900};
  }
  &:visited {
    color: ${color.grey900};
  }
`

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`

export const InlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`

const Tooltip = styled.div`
  padding: 2px 24px 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity 300ms;
  ${media.sm`
    justify-content: center;
    padding-top: 6px;
  `}
`

const TooltipIcon = styled.div`
  transform: rotate(270deg);
  margin-left: 8px;
`

const TooltipText = styled.div``

const Header = (props) => {
  const [tooltipIsVisible, setTooltipIsVisible] = useState(false)
  const [tooltipText, setTooltipText] = useState('')

  const showTooltip = (tooltipText) => {
    setTooltipIsVisible(true)
    setTooltipText(tooltipText)
  }

  const hideTooltip = () => {
    setTooltipIsVisible(false)
  }

  return (
    <Div article={props.article}>
      <LogoWrapper article={props.article}>
        {!props.article && (
          <NameLink href="/">
            <img src={BayroLogo} alt="Bayro Logo" width="300" height="90" />
          </NameLink>
        )}
        {!props.article && <Role>An interface between Blockchain and Financial Services.</Role>}
      </LogoWrapper>
      <div>
        <SocialLinks article={props.article}>
          <SocialLink
            href={`mailto:hello@bayro.io`}
            target="blank"
            onMouseOver={() => showTooltip('Mail')}
            onFocus={() => showTooltip('Mail')}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Send an email to bayro"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="m22.3592881 5.82427054v.59619016c0 .24378184-.1417446.46531584-.3630886.56747461l-8.9485541 4.13010189c-.6647377.306802-1.4305531.306802-2.0952908 0l-8.94855408-4.13010189c-.22134402-.10215877-.36308864-.32369277-.36308864-.56747461v-.59619016c0-.55012277.44596262-.99608539.9960854-.99608539h18.72640542c.5501228 0 .9960854.44596262.9960854.99608539zm-1.25 13.34754436h-18.21857622c-.69035594 0-1.25-.5596441-1.25-1.25v-8.52329148c0-.20710678.16789322-.375.375-.375.05424403 0 .10784237.01176807.15709707.03449228l8.78345405 4.0523453c.6647826.3067049 1.4305981.306593 2.095291-.0003062l8.7755375-4.05180448c.1880319-.08681729.4108411-.00476666.4976584.18326519.0227541.04928162.0345382.1029156.0345382.1571966v8.52310279c0 .6903559-.559644 1.25-1.25 1.25z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
          <SocialLink
            href="https://twitter.com/bayro_io"
            target="blank"
            onMouseOver={() => showTooltip('Twitter')}
            onFocus={() => showTooltip('Twitter')}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="bayro's Twitter"
          >
            <SvgWrapper>
              <InlineSvg>
                <path d="m21.0247938 8.63275418c.2692962 5.94511812-4.1645259 12.57304192-12.0138477 12.57304192-2.38687665 0-4.60746657-.7004644-6.47782429-1.8997889 2.24266338.2648815 4.48091208-.3590616 6.25708971-1.7496895-1.84828426-.033846-3.40961356-1.2567156-3.94967751-2.93577.66367531.1265545 1.31704969.0897654 1.91008994-.0721066-2.03222975-.4090948-3.43610171-2.2397203-3.39048323-4.1983718.57096679.3163862 1.22139804.5062179 1.91450464.5282914-1.88213023-1.25818714-2.41483637-3.74365857-1.30822031-5.64344757 2.08373448 2.55757806 5.19903526 4.2395756 8.71165825 4.41616327-.6165852-2.64292877 1.3891564-5.19020588 4.1189074-5.19020588 1.2140402 0 2.3132985.5135758 3.0843979 1.33470846.9624028-.18836018 1.8688862-.54153552 2.6841326-1.02568004-.3163862.98741938-.9859478 1.81443829-1.8585852 2.33831504.8549786-.10300948 1.670225-.32963032 2.4266089-.66661845-.5650806.85056393-1.2802606 1.59517527-2.1087511 2.19115865z" />
              </InlineSvg>
            </SvgWrapper>
          </SocialLink>
          <SocialLink
            href="http://www.ahoj.finance"
            target="blank"
            onMouseOver={() => showTooltip('Ahoj.Finace')}
            onFocus={() => showTooltip('Ahoj.Finace')}
            onMouseLeave={hideTooltip}
            onBlur={hideTooltip}
            aria-label="Go to Ahoj.Finace"
          >
            <SvgWrapper>
              <InlineSvg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.13 330.91">
<defs></defs>
<g id="Layer_2" data-name="Layer 2">
<g id="Layer_1-2" data-name="Layer 1">
<g id="logo">
<path class="cls-1" d="M213.13,104.54c0,57.74-47.71,104.54-106.56,104.54S0,162.28,0,104.54,47.71,0,106.57,0,213.13,46.8,213.13,104.54ZM106.57,9.81a94.73,94.73,0,1,0,94.72,94.73A94.73,94.73,0,0,0,106.57,9.81Z"/>
<path class="cls-1" d="M72.82,110.93C52.34,96.37,26.43,98.2,6.51,113.2c.31,2.59.67,5.19,1,7.81C55,93.37,108.76,150.87,87.9,206.07q.85.12,1.71.21C108,173.15,100.6,130.68,72.82,110.93Z"/>
<path class="cls-1" d="M138.64,152.58c-23.3,5.21-41.41,26.57-48,53.17a47,47,0,0,0,4.77,1c12.71-36.5,53.06-55.19,81.15-36.15,1.53-2.42,2.9-5,4.27-7.6C168.89,153.34,154,149.14,138.64,152.58Z"/>
<polyline class="cls-1" points="56.31 104.22 116.94 4.86 128.06 8.86 147.83 155.01 119.86 168.8 119.37 20.34 77.93 118.58 56.2 105.56"/>
<path class="cls-2" d="M49.34,280.67l-5.71-16.31H21.31L15.6,280.67H11.09l18.56-52.45h5.79l18.63,52.45ZM32.58,232.51h-.3l-9.84,27.95h20Z"/>
<path class="cls-2" d="M96.75,256H68v24.65H63.46V228.22H68V252H96.75V228.22h4.5v52.45h-4.5Z"/>
<path class="cls-2" d="M113.42,254.45c0-17.74,8.12-27.13,21.49-27.13s21.41,9.39,21.41,27.13-8.11,27.12-21.41,27.12S113.42,272.18,113.42,254.45Zm38.1,3.3v-6.61c0-12.47-6.62-19.76-16.61-19.76s-16.68,7.29-16.68,19.76v6.61c0,12.47,6.61,19.76,16.68,19.76S151.52,270.22,151.52,257.75Z"/>
<path class="cls-2" d="M190.36,228.22V267c0,9.24-5.64,14.58-14.2,14.58-7.37,0-12.47-4.43-13.83-11l4-1c1.2,4.59,4.43,8,10,8,6.23,0,9.54-3.91,9.54-11.27V232.21H167.67v-4Z"/>
<path class="cls-2" d="M23.74,330.32V295.53H42.33v1H24.84v15.65H41.63v1H24.84v17.15Z"/>
<path class="cls-2" d="M49.6,295.73v-.35a1.15,1.15,0,0,1,2.29,0v.35a1.15,1.15,0,0,1-2.29,0Zm.65,9.37h1v25.22h-1Z"/>
<path class="cls-2" d="M61.76,330.32V305.1h1v3.79H63c.9-2.25,3.34-4.39,7.88-4.39,5.63,0,8.67,3.34,8.67,9.62v16.2h-1v-16c0-6.13-2.79-8.87-7.72-8.87-4.14,0-7.93,2.24-7.93,6.83v18Z"/>
<path class="cls-2" d="M105.26,330.32c-1,0-1.44-.45-1.44-1.45v-2.39h-.15c-1.25,2.39-3.64,4.43-8.28,4.43-5.18,0-8.12-2.54-8.12-7.07,0-4.19,2.24-7.23,9.47-7.23h7.08v-3.69c0-5.18-2.5-7.47-7.18-7.47-3.79,0-6.23,1.44-7.63,4.73l-.89-.4c1.39-3.24,3.83-5.28,8.52-5.28,5.48,0,8.22,2.94,8.22,8.27v16.6h4.24v.95Zm-1.44-7.38v-5.43h-7c-5.93,0-8.37,2.24-8.37,5.58v1.49c0,3.49,2.89,5.39,7,5.39C99.88,330,103.82,327.62,103.82,322.94Z"/>
<path class="cls-2" d="M115.32,330.32V305.1h1.05v3.79h.15c.9-2.25,3.34-4.39,7.87-4.39,5.64,0,8.68,3.34,8.68,9.62v16.2h-1v-16c0-6.13-2.79-8.87-7.73-8.87-4.13,0-7.92,2.24-7.92,6.83v18Z"/>
<path class="cls-2" d="M140.79,317.71c0-8.72,3.88-13.21,10.46-13.21a8.75,8.75,0,0,1,8.22,5l-.89.45c-1.6-2.89-3.74-4.48-7.33-4.48-6,0-9.32,4.28-9.32,11.06v2.39c0,6.78,3.34,11.07,9.32,11.07a8.37,8.37,0,0,0,7.88-4.39l.79.55c-1.64,2.84-4.28,4.78-8.67,4.78C144.67,330.91,140.79,326.43,140.79,317.71Z"/>
<path class="cls-2" d="M164.55,317.71c0-8.62,3.89-13.21,10.37-13.21,6.08,0,10.22,4.84,10.22,12.56v.5H165.7v1.34c0,6.78,3.44,11.07,9.42,11.07,4.24,0,7.18-2.1,8.72-6.18l.9.35a9.7,9.7,0,0,1-9.62,6.77C168.54,330.91,164.55,326.43,164.55,317.71Zm1.15-1.2v.1H184v-.2c0-6.63-3.64-11-9.07-11C169,305.45,165.7,309.73,165.7,316.51Z"/>
</g></g></g>
</svg>
                 </InlineSvg>
            </SvgWrapper>
          </SocialLink>
        </SocialLinks>
        {!props.article && (
          <Tooltip visible={tooltipIsVisible} article={props.article}>
            <TooltipText>{tooltipText}</TooltipText>
            <TooltipIcon>
              <Icon glyph="arrow" size={24} />
            </TooltipIcon>
          </Tooltip>
        )}
      </div>
    </Div>
  )
}

export default Header

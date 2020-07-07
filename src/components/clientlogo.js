import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-queries'

const size = 150

const Image = styled.div`
  background: white;
  flex: 0 0 ${size}px;
  height: ${size}px;
  margin-right: 40px;
  border-radius: 8px;
  margin-top: -28px;
  ${media.md`
    margin-left: -28px;
  `}
  ${media.sm`
    margin-bottom: -20px;
  `}
`

const ClientLogo = (props) => {
  return (
    <Image>
        <img src={props.children} width="100" height="100" />
    </Image>
  )
}

export default ClientLogo

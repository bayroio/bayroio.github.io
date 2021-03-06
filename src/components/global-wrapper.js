import React, { Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import GlobalStyle from 'styles/global-style'

const GlobalWrapper = (props) => {
  const [displayOutlines, setDisplayOutlines] = useState(false)

  const handleKeyboardInput = (e) => {
    const key = e.keyCode || e.charCode
    // Tab
    if (key === 9) {
      setDisplayOutlines(true)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyboardInput(e))
  })

  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
        <title>bayro</title>
        <meta name="description" content="Bayro - Smart Contracts, Protocol Engineering and Developer Tools." />
        <meta
          name="keywords"
          content="Bayro, DEFI, Blockchain, Ethereum, Crypto, Cryptocurrencies, DLT, Token, DEX, Payment, Brokerage, Wallet"
        />
        <meta
          property="og:image"
          content="https://www.gabrieladorf.com/static/kellerkindCover-14f87246d1614ff1cf339940bdc58186.jpg"
        />
        <meta property="og:description" content="Bayro - Smart Contracts, Protocol Engineering and Developer Tools." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bayro.io" />
        <meta property="og:title" content="bayro" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <GlobalStyle displayOutlines={displayOutlines} />
      {props.children}
    </Fragment>
  )
}

export default GlobalWrapper

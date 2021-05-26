import React from 'react'
import './base.css'
import Container from './container'
import Header from './header'
import Footer from './footer'
import 'twin.macro'

const Layout = ({ children, location }) => {
  return (
    <Container>
      <div tw="flex flex-col min-h-screen">
        <Header location={location} />
        <div tw="flex-grow">{children}</div>
        <Footer location={location} />
      </div>
    </Container>
  )
}

export default Layout

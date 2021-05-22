import React from 'react'
import './base.css'
import Container from './container'
import Header from './header'
import Footer from './footer'

const Layout = ({ children, location }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer location={location} />
    </Container>
  )
}

export default Layout

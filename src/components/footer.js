import React from 'react'
import { HomeIcon, SearchIcon } from '@heroicons/react/outline'
import {
  HomeIcon as HomeSolid,
  SearchIcon as SearchSolid,
} from '@heroicons/react/solid'
import 'twin.macro'
import { Link } from 'gatsby'

const Footer = ({ location: { pathname } }) => {
  return (
    <nav
      role="navigation"
      tw="h-14 flex justify-around items-center bg-white border-t border-gray-200 sticky bottom-0 z-10"
    >
      {pathname === '/' ? (
        <HomeSolid tw="w-8 h-8 text-blue-500" />
      ) : (
        <Link to="/">
          <HomeIcon tw="w-8 h-8 text-gray-400" />
        </Link>
      )}
      {pathname === '/search' ? (
        <SearchSolid tw="w-8 h-8 text-blue-500" />
      ) : (
        <Link to="/search">
          <SearchIcon tw="w-8 h-8 text-gray-400" />
        </Link>
      )}
    </nav>
  )
}

export default Footer

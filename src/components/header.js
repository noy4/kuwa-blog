import React from 'react'
import { PencilIcon } from '@heroicons/react/solid'
import 'twin.macro'

const Header = () => {
  return (
    <nav
      role="navigation"
      tw="h-14 flex justify-center items-center bg-white border-b border-gray-300 sticky top-0 z-10"
    >
      <PencilIcon tw="w-8 h-8 text-blue-500" />
    </nav>
  )
}

export default Header

import { PencilIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import 'twin.macro'
import { useAtom } from 'jotai'
import { searchAtom } from '../state/state'

const Header = ({ location: { pathname, search } }) => {
  const [searchQuery, setSearchQuery] = useAtom(searchAtom)
  const pathQuery = new URLSearchParams(search).get('tag')

  React.useEffect(() => {
    setSearchQuery(pathQuery ? `#${pathQuery}` : '')
  }, [search])

  return (
    <nav
      role="navigation"
      tw="h-14 flex justify-center items-center bg-white border-b border-gray-300 sticky top-0 z-10"
    >
      {pathname === '/search' ? (
        <div tw="flex items-center rounded-full bg-gray-200 px-4 mx-8 w-full">
          <SearchIcon tw="w-5 h-5 text-gray-400" />
          <input
            tw="focus:outline-none h-8 w-full pl-4 bg-transparent"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
            }}
          />
        </div>
      ) : (
        <PencilIcon tw="w-8 h-8 text-blue-500" />
      )}
    </nav>
  )
}

export default Header

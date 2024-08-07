import { navigate } from "gatsby"
import React, { useRef, useState } from "react"
import { Flex, Input, Button } from "theme-ui"
import { MdOutlineSearch } from "react-icons/md"

const SearchBar = ({ onSearch, initialValue = "" }) => {
  const searchInputRef = useRef(null)
  const [search, setSearch] = useState(initialValue)

  const handleSearch = () => {
    if (onSearch) {
      onSearch(search)
    } else {
      navigate(`/inventory?search=${search}`)
    }
  }

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <Flex>
      <Input
        type="text"
        value={search}
        ref={searchInputRef}
        onChange={e => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Year, make, model..."
      />
      <Button onClick={handleSearch}>
        <MdOutlineSearch />
      </Button>
    </Flex>
  )
}

export default SearchBar

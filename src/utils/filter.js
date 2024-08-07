import React, { useMemo } from "react"
import { MdClearAll } from "react-icons/md"
import { Box, Button, Select } from "theme-ui"

const Filter = ({ filter, setFilter, vehicles }) => {
  const years = useMemo(() => {
    const yearCounts = vehicles.reduce((acc, { node }) => {
      acc[node.year] = (acc[node.year] || 0) + 1
      return acc
    }, {})
    return Object.entries(yearCounts).sort()
  }, [vehicles])

  const makes = useMemo(() => {
    const makeCounts = vehicles.reduce((acc, { node }) => {
      acc[node.make] = (acc[node.make] || 0) + 1
      return acc
    }, {})
    return Object.entries(makeCounts).sort()
  }, [vehicles])

  const types = useMemo(() => {
    const typeCounts = vehicles.reduce((acc, { node }) => {
      acc[node.type] = (acc[node.type] || 0) + 1
      return acc
    }, {})
    return Object.entries(typeCounts).sort()
  }, [vehicles])

  const clearFilters = () => {
    setFilter({ year: "", make: "", type: "" })
  }

  return (
    <>
      <Select
        value={filter.year}
        onChange={e => setFilter({ ...filter, year: e.target.value })}
        sx={{
          border: "1px solid",
          borderColor: "outlineVariant",
          bg: "background",
          color: "onBackground",
          p: 3,
          fontSize: 2,
          borderRadius: 0,
        }}
      >
        <option value="">Year</option>
        {years.map(([year, count]) => (
          <option key={year} value={year}>
            {year} ({count})
          </option>
        ))}
      </Select>
      <Select
        value={filter.make}
        onChange={e => setFilter({ ...filter, make: e.target.value })}
        sx={{
          border: "1px solid",
          borderColor: "outlineVariant",
          bg: "background",
          color: "onBackground",
          p: 3,
          fontSize: 2,
          borderRadius: 0,
        }}
      >
        <option value="">Make</option>
        {makes.map(([make, count]) => (
          <option key={make} value={make}>
            {make} ({count})
          </option>
        ))}
      </Select>

      <Select
        value={filter.type}
        onChange={e => setFilter({ ...filter, type: e.target.value })}
        sx={{
          border: "1px solid",
          borderColor: "outlineVariant",
          bg: "background",
          color: "onBackground",
          p: 3,
          fontSize: 2,
          borderRadius: 0,
        }}
      >
        <option value="">Type</option>
        {types.map(([type, count]) => (
          <option key={type} value={type}>
            {type} ({count})
          </option>
        ))}
      </Select>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            bg: "inherit",
            color: "onBackground",
            display: "flex",
            alignItems: "center",
          }}
          onClick={clearFilters}
        >
          <MdClearAll />
          &nbsp;Reset
        </Button>
      </Box>
    </>
  )
}

export default Filter

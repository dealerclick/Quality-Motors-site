/** @jsxImportSource theme-ui */
import React, { useState, useRef, useEffect, useMemo } from "react"
import PropTypes from "prop-types"
import { Box, Button, Flex, Input, Text } from "theme-ui"

// Internal imports
import useVehicleData from "../../hooks/useVehicleData"
import VehicleCard from "../../components/vehicleCard/VehicleCard"
import Sidebar from "../../components/sidebar/Sidebar"
import { InventoryPageHead } from "../../config/heads"
import {
  sidebarStyle,
  vehicleListStyle,
  searchBoxStyle,
  searchInputContainerStyle,
  searchInputStyle,
  clearSearchButtonStyle,
  searchResultsCountStyle,
  disclaimerStyle,
} from "./vehicleListPageStyles"
import filterVehicles from "../../utils/filterVehicles"
import sortVehicles from "../../utils/sortVehicles"
import { mapVehicleListData } from "../../utils/mapVehicleListData"
import { DISCLAIMER } from "../../config/strings"
import SortButton from "../../utils/sortButton"

const flexStyles = {
  display: "flex", // Flex on smaller screens
  flexDirection: "row",
  flexWrap: ["nowrap", "wrap"], // Disable wrapping
  gap: 3,
  justifyContent: [null, "center"], // Center the items on larger screens
  gridTemplateColumns: [null, "repeat(auto-fill, 200px)"], // Define grid columns on larger screens
  overflowX: "auto", // Enable scrolling when there's overflow on smaller screens
  mx: "auto", // Center the container
  // Hide scrollbar (cross-browser)
  scrollbarWidth: "none" /* For Firefox */,
  "-ms-overflow-style": "none" /* For Internet Explorer and Edge */,
  "&::-webkit-scrollbar": {
    display: "none" /* For Chrome, Safari, and Opera */,
  },
}

/**
 * @function VehicleListPage
 * @param {Object} data - The queried vehicle data.
 * @returns {JSX.Element} - This returns the main JSX for the page.
 */
const VehicleListPage = () => {
  // Initialize and manage states
  const vehicles = useVehicleData()
  const [sort, setSort] = useState({ value: "", direction: "" })
  const [search, setSearch] = useState("")
  const searchInputRef = useRef(null)

  // Focus the search input on component mount
  useEffect(() => {
    searchInputRef.current.focus()
  }, [])

  // Extract vehicle type from URL if available
  const typeFromUrl =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("type")
      : ""

  // Initialize filter state
  const [filter, setFilter] = useState({
    year: [],
    make: [],
    model: [],
    type: typeFromUrl ? [typeFromUrl] : [],
  })

  // Memoized sorting and filtering operations to optimize performance
  const filteredAndSortedVehicles = useMemo(() => {
    let filteredVehicles = filterVehicles(vehicles, filter, search)
    return sortVehicles(filteredVehicles, sort)
  }, [vehicles, filter, search, sort])

  return (
    <>
      <InventoryPageHead />
      <Box>
        <Flex>
          <Box sx={sidebarStyle}>
            <Sidebar
              vehicles={vehicles}
              filter={filter}
              setFilter={setFilter}
              sort={sort}
              setSort={setSort}
            />
          </Box>
          <Box sx={vehicleListStyle}>
            {/* Search */}
            <Flex sx={searchBoxStyle}>
              <Box sx={searchInputContainerStyle}>
                <Input
                  type="text"
                  value={search}
                  ref={searchInputRef}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search any combo of keywords..."
                  sx={searchInputStyle}
                />
                {search && (
                  <Button
                    onClick={() => setSearch("")}
                    style={clearSearchButtonStyle}
                  >
                    X
                  </Button>
                )}
              </Box>
            </Flex>

            {/* Vehicle Cards */}
            <Flex
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <SortButton sort={sort} setSort={setSort} />
              <Text sx={searchResultsCountStyle}>
                {filteredAndSortedVehicles.length}
                &nbsp; Vehicles
              </Text>
            </Flex>
            <Flex sx={flexStyles}>
              {filteredAndSortedVehicles.length > 0
                ? filteredAndSortedVehicles.map(({ node: vehicle }) => {
                    const vehicleData = mapVehicleListData(vehicle)
                    return (
                      <VehicleCard
                        key={vehicle.vin}
                        vehicle={vehicleData}
                        vehicleImages={vehicle.images}
                      />
                    )
                  })
                : "No vehicles found."}
            </Flex>
            {/* Disclaimer */}
            {filteredAndSortedVehicles.length > 0 && (
              <Text sx={disclaimerStyle}>* Disclaimer: {DISCLAIMER}.</Text>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

// Prop types validation
VehicleListPage.propTypes = {
  data: PropTypes.shape({
    allVehicle: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.object,
        })
      ),
    }),
  }),
}

export default VehicleListPage

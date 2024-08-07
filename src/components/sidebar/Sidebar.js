/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Box, Button } from "theme-ui"
import {
  sidebarBoxBaseStyle,
  filterButtonStyle,
  closeFilterBoxStyle,
} from "./sidebarStyles"
import { DropdownWithCheckbox } from "../dropdown/DropdownWithCheckbox"
import RangeSlider from "../rangeSlider/RangeSlider"

const Sidebar = ({ filter, setFilter, vehicles, subOptions }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [vehicleMakes, setVehicleMakes] = useState([])
  const [vehicleTypes, setVehicleTypes] = useState([])
  const [vehicleModels, setVehicleModels] = useState([])
  //const [vehicleMpgCity, setVehicleMpgCity] = useState([])
  //const [vehicleMpgHwy, setVehicleMpgHwy] = useState([])
  const [vehicleFuelTypes, setVehicleFuelTypes] = useState([])
  const [vehicleTransmissionTypes, setVehicleTransmissionTypes] = useState([])

  const handleFilterChange = (field, value) => {
    setFilter({ ...filter, [field]: value })
  }

  useEffect(() => {
    const makes = vehicles.map(v => v.node.make)
    const types = vehicles.map(v => v.node.type)
    const models = vehicles.map(v => v.node.model)
    //const mPGCity = vehicles.map(v => v.node.mPGCity)
    //const mPGHwy = vehicles.map(v => v.node.mPGHwy)
    const fuelTypes = vehicles.map(v => v.node.fuelType)
    const transmissionTypes = vehicles.map(v => v.node.transmission)

    setVehicleMakes([...new Set(makes)])
    setVehicleTypes([...new Set(types)])
    setVehicleModels([...new Set(models)])
    //setVehicleMpgCity([...new Set(mPGCity)])
    //setVehicleMpgHwy([...new Set(mPGHwy)])
    setVehicleFuelTypes([...new Set(fuelTypes)])
    setVehicleTransmissionTypes([...new Set(transmissionTypes)])
    //eslint-disable-next-line
  }, [vehicles])

  // This logic is simplified as you can select multiple makes
  useEffect(() => {
    if (filter.make) {
      const models = vehicles
        .filter(v => filter.make.includes(v.node.make))
        .map(v => v.node.model)
      setVehicleModels([...new Set(models)])
    }
  }, [filter.make, vehicles])

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const resetFilters = () => {
    // Using the native browser API to reload the current page
    window.location.reload()
  }

  /**
   * @description Finds the highest or lowest value for a given key in a list of objects.
   * The function also handles the conversion of string values to numbers if necessary.
   * @param {Array} list - List of objects.
   * @param {string} key - Key to find the value.
   * @param {string} [type='highest'] - Type of value to find. Either 'highest' or 'lowest'.
   * @returns {number} - Highest or lowest value based on the type.
   */
  const findExtremeValue = (list, key, type = "highest") => {
    if (!list || list.length === 0) {
      return 0
    }

    // Convert the string values to numbers if necessary, and filter out non-numeric values
    const numericValues = list
      .map(item => {
        const value = item.node[key]
        return typeof value === "string" ? parseFloat(value) : value
      })
      .filter(value => !isNaN(value))

    if (numericValues.length === 0) {
      return 0
    }

    // Find the extreme value based on the type
    return type === "highest"
      ? Math.max(...numericValues)
      : Math.min(...numericValues)
  }

  const handleMileageRangeChange = e => {
    const value = parseInt(e.target.value, 10)
    handleFilterChange("odometerIn", value)
  }

  const handlePriceRangeChange = e => {
    const value = parseInt(e.target.value, 10)
    handleFilterChange("askingPrice", value)
  }

  const handleMpgCityRangeChange = e => {
    const value = parseInt(e.target.value, 10)
    handleFilterChange("mPGCity", value)
  }

  const handleMpgHwyRangeChange = e => {
    const value = parseInt(e.target.value, 10)
    handleFilterChange("mPGHwy", value)
  }

  const highestPrice = findExtremeValue(vehicles, "askingPrice", "highest")
  const lowestMileage = findExtremeValue(vehicles, "odometerIn", "lowest")
  const highestMileage = findExtremeValue(vehicles, "odometerIn", "highest")
  const highestMpgCity = findExtremeValue(vehicles, "mPGCity", "highest")
  const highestMpgHwy = findExtremeValue(vehicles, "mPGHwy", "highest")

  return (
    <>
      <Box
        sx={{
          ...sidebarBoxBaseStyle,
          display: [isFilterOpen ? "block" : "none", "none", "block"],
          marginBottom: 3,
        }}
      >
        <RangeSlider
          min={0}
          max={highestPrice}
          step={500}
          onChange={handlePriceRangeChange}
          value={filter.askingPrice || highestPrice}
          title="Price"
          formatCurrency={true}
          preText="Up to"
          postText=""
        />
        <DropdownWithCheckbox
          title="Type"
          options={vehicleTypes}
          selected={filter.type || []}
          onOptionClicked={value => handleFilterChange("type", value)}
        />
        <DropdownWithCheckbox
          title="Make & Model"
          options={vehicleMakes}
          selected={filter.make || []}
          onOptionClicked={value => handleFilterChange("make", value)}
          subOptions={subOptions}
        />
        {filter.make?.length > 0 ? (
          <DropdownWithCheckbox
            title=""
            isToggleable={false}
            options={vehicleModels}
            selected={filter.model || []}
            onOptionClicked={value => handleFilterChange("model", value)}
          />
        ) : null}
        <RangeSlider
          min={0}
          max={highestMileage}
          step={500}
          onChange={handleMileageRangeChange}
          value={filter.odometerIn || highestMileage}
          title="Mileage"
          formatCurrency={false}
          preText=""
          postText={lowestMileage > 0 && "miles"}
        />
        <DropdownWithCheckbox
          title="Fuel Type"
          options={vehicleFuelTypes}
          selected={filter.fuelType || []}
          onOptionClicked={value => handleFilterChange("fuelType", value)}
        />
        <RangeSlider
          min={0}
          max={highestMpgCity}
          step={1}
          onChange={handleMpgCityRangeChange}
          value={filter.mPGCity || highestMpgCity}
          title="MPG City"
          formatCurrency={false}
          preText=""
          postText="miles"
        />
        <RangeSlider
          min={0}
          max={highestMpgHwy}
          step={1}
          onChange={handleMpgHwyRangeChange}
          value={filter.mPGHwy || highestMpgHwy}
          title="MPG Highway"
          formatCurrency={false}
          preText=""
          postText="miles"
        />
        <DropdownWithCheckbox
          title="Transmission"
          options={vehicleTransmissionTypes}
          selected={filter.transmission || []}
          onOptionClicked={value => handleFilterChange("transmission", value)}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: theme => `0px 4px 4px ${theme.colors.shadow}`,
            cursor: "pointer",
            backgroundColor: "surface",
            border: "1px solid",
            borderColor: "surfaceContainer",
            color: "error",
            borderRadius: "0 0 10px 10px",
            ":hover": {
              boxShadow: `none`,
            },
          }}
          onClick={resetFilters}
        >
          <p>Reset Filters</p>
        </Box>
      </Box>
      <Button onClick={toggleFilter} sx={filterButtonStyle}>
        Filter
      </Button>
      {isFilterOpen && (
        <Box onClick={toggleFilter} sx={closeFilterBoxStyle}>
          X
        </Box>
      )}
    </>
  )
}

Sidebar.propTypes = {
  subOptions: PropTypes.object,
  filter: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  vehicles: PropTypes.array.isRequired,
  sort: PropTypes.object.isRequired,
  setSort: PropTypes.func.isRequired,
  odometerIn: PropTypes.number,
}

export default Sidebar

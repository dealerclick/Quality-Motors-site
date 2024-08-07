import React, { useState, useRef, useEffect } from "react"
import { Box, Text } from "theme-ui"

/**
 * Custom Dropdown component for sorting options
 * @param {object} sort - The current sort object
 * @param {function} setSort - Function to update the sort
 */
const SortButton = ({ sort, setSort }) => {
  const [isOpen, setIsOpen] = useState(false) // Control the dropdown's open/close state
  const [selectedLabel, setSelectedLabel] = useState("Sort Results ↑↓") // Initially set to 'Sort'

  // Dropdown options
  const options = [
    { value: "askingPrice_desc", label: "Highest Price ↑" },
    { value: "askingPrice_asc", label: "Lowest Price ↓" },
    { value: "year_desc", label: "Newest Year ↑" },
    { value: "year_asc", label: "Oldest Year ↓" },
    { value: "odometerIn_desc", label: "Highest Miles ↑" },
    { value: "odometerIn_asc", label: "Lowest Miles ↓" },
  ]

  const dropdownRef = useRef(null)

  /**
   * Handle dropdown option change
   * @param {string} value - The value of the selected option
   * @param {string} label - The label of the selected option
   */
  const handleOptionClick = (value, label) => {
    setSelectedLabel(label)
    const direction = value.includes("_desc") ? "desc" : "asc"
    const sortValue = value.replace("_asc", "").replace("_desc", "")
    setSort({ value: sortValue, direction })
    setIsOpen(false) // Close dropdown after selection
  }

  // Close the dropdown when clicked outside
  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  // Listen for clicks outside the dropdown to close it
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <Box ref={dropdownRef} sx={{ width: "150px" }}>
      <Text
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          cursor: "pointer",
          backgroundColor: "background",
          color: "onPrimaryContainer",
        }}
      >
        {selectedLabel}
      </Text>
      {isOpen && (
        <Box
          sx={{
            bg: "surface",
            borderRadius: "8px",
            position: "absolute",
            minWidth: "175px",
            zIndex: 999,
            marginTop: 1,
            boxShadow: theme => `0px 4px 4px ${theme.colors.shadow}`,
          }}
        >
          {options.map(option => (
            <Box
              key={option.value}
              onClick={() => handleOptionClick(option.value, option.label)}
              sx={{
                cursor: "pointer",
                width: "175px",
                p: 2,
                ":hover": {
                  bg: "surfaceVariant",
                  borderRadius: "8px",
                },
              }}
            >
              {option.label}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export default SortButton

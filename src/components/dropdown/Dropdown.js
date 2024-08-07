import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Button } from "theme-ui"

/**
 * @component Dropdown
 * @param {string} title - The title to be displayed for the dropdown.
 * @param {Array} options - Array of objects containing label and value properties.
 * @param {string} selected - The currently selected value.
 * @param {function} onOptionClicked - Function to handle when an option is clicked.
 * @description A dropdown component.
 */
export const Dropdown = ({ title, options, selected, onOptionClicked }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <Box>
      <Button onClick={toggleDropdown}>{title}</Button>
      {isOpen && (
        <Box>
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => {
                onOptionClicked(option.value)
                toggleDropdown()
              }}
            >
              {option.label}
            </Button>
          ))}
        </Box>
      )}
    </Box>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
  onOptionClicked: PropTypes.func.isRequired,
}

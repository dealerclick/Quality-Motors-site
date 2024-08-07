/** @jsxImportSource theme-ui */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { Box, Checkbox, Label } from "theme-ui"
import { motion, AnimatePresence } from "framer-motion"

/**
 * @component DropdownWithCheckbox
 * @param {string} title - The title of the dropdown.
 * @param {Array} options - Array of string options.
 * @param {Array} selected - Array of selected options.
 * @param {function} onOptionClicked - Function to handle when an option is clicked.
 * @param {boolean} isToggleable - Determines if the dropdown is toggleable.
 * @description A dropdown component with checkboxes.
 */
export const DropdownWithCheckbox = ({
  title,
  options,
  selected,
  onOptionClicked,
  isToggleable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = option => {
    const updatedSelection = [...selected]
    if (updatedSelection.includes(option)) {
      const index = updatedSelection.indexOf(option)
      updatedSelection.splice(index, 1)
    } else {
      updatedSelection.push(option)
    }
    onOptionClicked(updatedSelection)
  }

  const toggleDropdown = () => {
    if (isToggleable) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <Box sx={{ borderBottom: "1px solid", borderColor: "surfaceContainer" }}>
      {title && (
        <Box
          onClick={toggleDropdown}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: isToggleable ? "pointer" : "default",
            boxShadow: theme => `0px 4px 4px ${theme.colors.shadow}`,
            backgroundColor: "surface",
            color: "onSurface",
            borderRadius: "0px",
            width: "100%",
          }}
        >
          <p>{title}</p>
        </Box>
      )}
      <AnimatePresence>
        {(isOpen || !isToggleable) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Box bg="surface" px="3" pt="3" pb="4">
              {options.map((option, index) => (
                <div sx={{ marginTop: "2" }} key={index}>
                  <Label>
                    <Checkbox
                      checked={selected.includes(option)}
                      onChange={() => handleOptionClick(option)}
                    />
                    {option}
                  </Label>
                </div>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

DropdownWithCheckbox.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array.isRequired,
  selected: PropTypes.array,
  onOptionClicked: PropTypes.func.isRequired,
  isToggleable: PropTypes.bool,
}

import React, { useState } from "react"
import PropTypes from "prop-types"
import FormatCurrency from "../../utils/formatCurrency"
import FormatNumber from "../../utils/formatNumber"
import { Box } from "theme-ui"
import { motion, AnimatePresence } from "framer-motion"

/**
 * @description A reusable range slider component for filtering.
 * @param {object} props - Properties passed to the component.
 * @param {boolean} [props.formatCurrency] - Whether to format the value as currency.
 * @param {string} [props.preText] - Text to display before the value.
 * @param {string} [props.postText] - Text to display after the value.
 */
const RangeSlider = ({
  min,
  max,
  step,
  onChange,
  value,
  title,
  formatCurrency,
  preText,
  postText,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  // Utility function to format the value based on the given props
  const formatValue = val => {
    if (formatCurrency) {
      return <FormatCurrency value={val} />
    }
    return <FormatNumber value={val} />
  }

  const toggleSlider = () => {
    setIsOpen(!isOpen)
  }

  const dropdownVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" },
  }

  const transitionSettings = {
    type: "tween",
    duration: 0.4,
    ease: "easeInOut",
  }

  return (
    <Box sx={{ borderBottom: "1px solid", borderColor: "surfaceContainer" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
          cursor: "pointer",
          backgroundColor: "surface",
          color: "onSurface",
          borderRadius: "0px",
        }}
        onClick={toggleSlider}
      >
        <p>{title}</p>
      </Box>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            transition={transitionSettings}
          >
            <Box px="3" py="4" bg="surface" sx={{ fontSize: "14px" }}>
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                style={{ width: "100%" }}
                onChange={onChange}
                value={value}
              />
              {preText} {formatValue(value)} {postText}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  formatCurrency: PropTypes.bool,
  preText: PropTypes.string,
  postText: PropTypes.string,
}

export default RangeSlider

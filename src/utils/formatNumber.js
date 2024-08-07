import React from "react"
import PropTypes from "prop-types"

/**
 * Formats a numeric value as a string with a comma as a thousands separator
 *
 * @param {Object} props - The component's props.
 * @param {number} props.value - The numeric value to be formatted.
 * @returns {React.Element} The formatted number string with "miles" appended.
 */
const FormatNumber = ({ value = "0" }) => {
  const formatter = value => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return <>{formatter(value)}</>
}

FormatNumber.propTypes = {
  value: PropTypes.number || PropTypes.string,
}

export default React.memo(FormatNumber)

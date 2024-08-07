import React from "react"
import PropTypes from "prop-types"
/**
 * A righteous component that formats a numeric value into some wicked currency, bro.
 * Can handle both numbers and strings, like a true surf champ on the waves.
 *
 * @param {Object} props - The component's props, man.
 * @param {(number|string)} props.value - The numeric value to be turned into currency, you know?
 * @returns {React.Element} The formatted currency string, all slick and shiny.
 */
const FormatCurrency = ({ value = "0" }) => {
  // This radical formatter takes a number and turns it into dollar bills, y'all!
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  // Making sure our value rides the wave as a number, not some gnarly string, dude.
  const numericValue = Number(value)

  return <>{formatter.format(numericValue)}</> // Returning the treasure, pure gold, bro!
}

// Check out these prop types, like the rules of the surf, man!
FormatCurrency.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, // Numbers and strings, both welcome at this surf party!
  ]),
}

// Keeping it fresh with React.memo, like waxing your board before hitting the waves!
export default React.memo(FormatCurrency)

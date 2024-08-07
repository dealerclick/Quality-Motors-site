/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Box, Container, Heading, Text } from "theme-ui"
import {
  containerStyle,
  optionContainerStyle,
  itemBoxStyle,
  itemTextStyle,
  headingTextStyle,
  iconBoxStyle,
  headingBoxStyle,
  priceTextStyle,
} from "./optionsStyles"
import { MdGrade } from "react-icons/md"

/**
 * @function Options
 * @description Hey dude, this gnarly component shows the optional equipment for your vehicle. Keep your ride totally custom, man!
 * @param {object} vehicle - This is the vehicle object, loaded with optional equipment options.
 */
const Options = ({ vehicle }) => {
  const [optionalEquip, setOptionalEquip] = useState([])

  // Let's react to changes in the vehicle prop, and set our state like catching a perfect wave!
  useEffect(() => {
    console.log(vehicle) // let's see what vehicle looks like, man!
    if (vehicle.optionalEquip) {
      const options = vehicle.optionalEquip.split(",").map(item => {
        const [option, price] = item.split("$")
        return { option: option.trim(), price: `$${price.trim()}` }
      })
      setOptionalEquip(options)
    }
  }, [vehicle])

  // Time to ride the wave and render all this gnarly info in a chill layout!
  return (
    <Box sx={containerStyle}>
      <Heading sx={headingTextStyle} as="h3">
        Optional Equipment
      </Heading>
      <Container sx={optionContainerStyle}>
        {/*  Let's map over our optional equipment and render each item but not the price is it's $0 man! */}
        {optionalEquip.map((item, index) => (
          <Box sx={itemBoxStyle} key={`${item.option}-${index}`}>
            <Box sx={headingBoxStyle}>
              <Box>
                <Box sx={iconBoxStyle}>
                  <MdGrade />
                </Box>
                <Text sx={itemTextStyle}>{`${item.option}`}</Text>
              </Box>
              {item.price !== "$0.00" && (
                <Text sx={priceTextStyle}>{`${item.price}`}</Text>
              )}
            </Box>
          </Box>
        ))}
      </Container>
    </Box>
  )
}

// Always keep your data tubular with PropTypes, brah!
Options.propTypes = {
  vehicle: PropTypes.shape({
    optionalEquip: PropTypes.string,
  }).isRequired,
}

export default Options

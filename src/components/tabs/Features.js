/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Box, Container, Heading, Text } from "theme-ui"
import {
  containerStyle,
  standardEquipContainerStyle,
  itemBoxStyle,
  itemTextStyle,
  equipBoxStyle,
  specificationEquipContainerStyle,
  marginBottomStyle,
  headingTextStyle,
  iconBoxStyle,
  headingBoxStyle,
} from "./featuresStyles"
import { MdAssignment } from "react-icons/md"

/**
 * @function Features
 * @description Dude, this rad component shows the gnarly features of a vehicle. It's split into standard and specification equipment, right? It's all about keeping your ride stoked with the info you need!
 * @param {object} vehicle - The vehicle object, man! It's got all your standard and specification equipment in it.
 */
const Features = ({ vehicle }) => {
  const [standardEquip, setStandardEquip] = useState([])
  const [specificationEquip, setSpecificationEquip] = useState([])

  // Like the tides, we're reacting to changes, dude! If there's equipment in our vehicle prop, we set it into state!
  useEffect(() => {
    if (vehicle.standardEquip) {
      setStandardEquip(JSON.parse(vehicle.standardEquip))
    }

    if (vehicle.specificationEquip) {
      setSpecificationEquip(JSON.parse(vehicle.specificationEquip))
    }
  }, [vehicle])

  // Alright, here's the big wave! We're rendering out all the info in a super chill layout.
  return (
    <Box sx={containerStyle}>
      <Heading sx={headingTextStyle} as="h3">
        Standard Equipment
      </Heading>
      <Container sx={standardEquipContainerStyle}>
        {standardEquip.map((item, index) => (
          <Box sx={itemBoxStyle} key={`${item.Key}-${index}`}>
            <Box sx={headingBoxStyle}>
              <Box sx={iconBoxStyle}>
                <MdAssignment />
              </Box>
              <Text sx={itemTextStyle}>{item.Key}</Text>
            </Box>

            {Array.isArray(item.Value) &&
              item.Value.map((equip, equipIndex) => (
                <Box sx={equipBoxStyle} key={`${equip.Name}-${equipIndex}`}>
                  {equip.Name}: {equip.Value || "Not available"}
                </Box>
              ))}
          </Box>
        ))}
      </Container>

      <Box sx={marginBottomStyle}>
        <Heading sx={headingTextStyle} as="h3">
          Specification Equipment
        </Heading>
        <Container sx={specificationEquipContainerStyle}>
          {specificationEquip.map((item, index) => (
            <Box sx={itemBoxStyle} key={`${item.Key}-${index}`}>
              <Box sx={headingBoxStyle}>
                <Box sx={iconBoxStyle}>
                  <MdAssignment />
                </Box>
                <Text sx={itemTextStyle}>{item.Key}</Text>
              </Box>

              {Array.isArray(item.Value) &&
                item.Value.map((value, valueIndex) => (
                  <Box sx={equipBoxStyle} key={`${value.Name}-${valueIndex}`}>
                    {value.Name}: {value.Value}
                  </Box>
                ))}
            </Box>
          ))}
        </Container>
      </Box>
    </Box>
  )
}

// Shaka, brah! Here are the PropTypes to keep our data clean and tubular!
Features.propTypes = {
  vehicle: PropTypes.shape({
    standardEquip: PropTypes.string,
    specificationEquip: PropTypes.string,
  }).isRequired,
}

export default Features

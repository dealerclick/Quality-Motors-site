/** @jsxImportSource theme-ui */
import React from "react"
import PropTypes from "prop-types"
import { Box, Heading, Text } from "theme-ui"
import { MdSettings, MdSwapVert, MdDirectionsCar } from "react-icons/md"
import {
  boxStyle,
  gridBoxStyle,
  featureBoxStyle,
  iconBoxStyle,
  headingStyle,
} from "./performanceStyles"

/**
 * @component Performance
 * @description Yo, this component's like all about rendering the performance details of a vehicle, man. Catch the wave!
 * @param {Object} vehicle - Here's the vehicle object containing some gnarly performance information, dude.
 * @returns {JSX.Element} - What you're getting here is a righteous rendered performance component.
 */
const Performance = ({ vehicle }) => {
  // Now, let's talk features. We got this sweet array here, holding all the details about your vehicle's performance.
  // Each feature's got an icon, a title, and a description. The description's pulled from the vehicle object, y'know?
  const features = [
    {
      Icon: MdDirectionsCar,
      title: "Transmission",
      description: vehicle.transmission,
    },
    { Icon: MdSettings, title: "Drivetrain", description: vehicle.drivetrain },
    { Icon: MdSwapVert, title: "Engine", description: vehicle.engine },
    { Icon: MdSwapVert, title: "Horsepower", description: vehicle.horsepower },
  ]

  // Alright, here's the fun part. We're gonna render each feature, but only if it's got a description.
  // No point in showing an icon with a blank space, right?
  // So, we're using map, looping over each feature, and making it conditional on the description, man.
  return (
    <Box sx={boxStyle}>
      <Box sx={gridBoxStyle}>
        {features.map(
          (feature, index) =>
            feature.description && (
              <Box key={index} sx={featureBoxStyle}>
                <Box sx={iconBoxStyle}>
                  <feature.Icon size="2em" />
                </Box>
                <Box>
                  <Heading as="h4" sx={headingStyle}>
                    {feature.title}
                  </Heading>
                  <Text>{feature.description}</Text>
                </Box>
              </Box>
            )
        )}
      </Box>
    </Box>
  )
}

// Alright, now we're talking PropTypes. Keeping our props in check, man.
Performance.propTypes = {
  vehicle: PropTypes.shape({
    transmission: PropTypes.string,
    drivetrain: PropTypes.string,
    engine: PropTypes.string,
    horsepower: PropTypes.string,
  }).isRequired,
}

export default Performance

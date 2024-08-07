/** @jsxImportSource theme-ui */
import React from "react"
import PropTypes from "prop-types"
import { Box, Grid, Heading, Text } from "theme-ui"
import {
  MdFingerprint, // For unique IDs like VIN or Stock #
  MdDriveEta, // For anything car-related like Mileage
  MdSwapHoriz, // For things that can be switched, like Transmission
  MdSettings, // For mechanical stuff like Drivetrain
  MdFormatPaint, // For color-related features like Exterior or Interior color
  MdSpeed, // For speed-related things like MPG
  MdMemory, // For Engine, as it's like the "brain" of the car
  MdLocalGasStation, // For Fuel type
} from "react-icons/md"
import {
  boxStyle,
  gridBoxStyle,
  featureBoxStyle,
  iconBoxStyle,
  headingStyle,
} from "./overviewStyles"

/**
 * @component Overview
 * @description Like, this groovy component's all about rendering the overview of a vehicle with its features, dude.
 * @param {Object} vehicle - It's the vehicle object, ya know? Got all the info.
 * @returns {JSX.Element} - You're getting a totally rad rendered overview component.
 */
const Overview = ({ vehicle }) => {
  // This cool features array, right? It's all about storing your vehicle's deets with awesome icons.
  const features = [
    {
      Icon: MdFingerprint,
      title: "VIN",
      description: vehicle.vin,
    },
    {
      Icon: MdFingerprint,
      title: "Stock #",
      description: vehicle.stockNo,
    },
    {
      Icon: MdDriveEta,
      title: "Mileage",
      description: vehicle.odometerIn,
    },
    {
      Icon: MdSwapHoriz,
      title: "Transmission",
      description: vehicle.transmission,
    },
    { Icon: MdSettings, title: "Drivetrain", description: vehicle.drivetrain },
    {
      Icon: MdFormatPaint,
      title: "Exterior color",
      description: vehicle.exteriorColor,
    },
    {
      Icon: MdFormatPaint,
      title: "Interior color",
      description: vehicle.interiorColor,
    },
    { Icon: MdSpeed, title: "MPG", description: vehicle.mPGCity },
    { Icon: MdMemory, title: "Engine", description: vehicle.engine },
    {
      Icon: MdLocalGasStation,
      title: "Fuel type",
      description: vehicle.fuelType,
    },
  ]

  // Now, we're just gonna render a box with all these gnarly features.
  // We're using a map function, yeah? To loop over each feature.
  // But only if the feature's got a description, dude. No need to show empty ones.
  return (
    <Box sx={boxStyle}>
      <Grid sx={gridBoxStyle}>
        {features.map(
          (feature, index) =>
            feature.description && (
              <Box key={index} sx={featureBoxStyle}>
                <Box sx={iconBoxStyle}>
                  <feature.Icon />
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
      </Grid>
    </Box>
  )
}

// Proptypes, man. Keepin' it chill and making sure your props are all good.
Overview.propTypes = {
  vehicle: PropTypes.shape({
    vin: PropTypes.string,
    stockNo: PropTypes.string,
    odometerIn: PropTypes.number,
    transmission: PropTypes.string,
    drivetrain: PropTypes.string,
    exteriorColor: PropTypes.string,
    interiorColor: PropTypes.string,
    mPGCity: PropTypes.string,
    engine: PropTypes.string,
    fuelType: PropTypes.string,
  }).isRequired,
}

export default Overview

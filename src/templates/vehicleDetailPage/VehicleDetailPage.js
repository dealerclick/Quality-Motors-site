/**
 * @file VehicleDetailPage.js
 * @brief This component renders detailed information about a specific vehicle.
 * @param {Object} pageContext - The page context containing VIN and Carfax URL.
 */

import React from "react"
import { Box, Container, Flex, Heading } from "theme-ui"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import VehicleDetailCard from "../../components/vehicleDetailCard/VehicleDetailCard"
import BottomAppBar from "../../components/bottomAppBar/BottomAppBar"
import { InventoryDetailPageHead } from "../../config/heads"
import useVehicleData from "../../hooks/useVehicleData"

import {
  containerStyle,
  backButtonStyle,
  historyHeadingStyle,
  historyBoxStyle,
} from "./vehicleDetailPageStyles"

const VehicleDetailPage = ({ pageContext }) => {
  // Fetch all available vehicles data using custom hook
  const vehicles = useVehicleData()

  // Filter out the specific vehicle matching the VIN from pageContext
  const vehicleNode = vehicles.find(edge => edge.node.vin === pageContext.vin)

  // If the vehicle is not found, return an error message
  if (!vehicleNode) {
    return <div>Vehicle not found. Please try again.</div>
  }

  // Destructure node to get vehicle details
  const vehicle = vehicleNode.node

  // Construct a data object with all vehicle details for further usage
  const vehicleData = {
    year: vehicle.year,
    make: vehicle.make,
    model: vehicle.model,
    carfaxURL: pageContext.carfaxURL,
    vin: vehicle.vin,
    exteriorColor: vehicle.trimColor,
    interiorColor: vehicle.intColor,
    type: vehicle.type,
    engine: vehicle.engine,
    transmission: vehicle.transmission,
    driveTrain: vehicle.driveTrain,
    fuelType: vehicle.fuelType,
    trim: vehicle.trim,
    stockNo: vehicle.stockNo,
    optionalEquip: vehicle.optionalEquip,
    standardEquip: vehicle.standardEquip,
    specificationEquip: vehicle.specificationEquip,
    odometerIn: vehicle.odometerIn,
    askingPrice: vehicle.askingPrice,
    mPGCity: vehicle.mPGCity,
    downPayment: vehicle.downPmt,
    images: vehicle.images.map(image => 
      image.childImageSharp
        ? image.childImageSharp.gatsbyImageData
        : { publicURL: image.publicURL } // Use publicURL if gatsbyImageData is unavailable
    ),
    }

  return (
    <>
      {/* SEO Component */}
      <InventoryDetailPageHead
        title={`${vehicleData.year} ${vehicleData.make} ${vehicleData.model}`}
        meta={`This ${vehicleData.year} ${vehicleData.make} ${vehicleData.model}`}
      />

      {/* Main Container */}
      <Container sx={containerStyle}>
        {/* Back Button */}
        <Box mt={2} px={3}>
          <Link to="/inventory" sx={backButtonStyle}>
            {"<"} Back to Inventory
          </Link>
        </Box>

        {/* Vehicle Detail Card */}
        <Flex justifyContent="center">
          <VehicleDetailCard
            key={vehicle.vin}
            vehicle={vehicleData}
            vehicleImages={vehicle.images}
          />
        </Flex>

        {/* Vehicle History */}
        {vehicleData.carfaxURL && (
          <Box sx={{ my: 5 }}>
            <Heading sx={historyHeadingStyle}>Vehicle History</Heading>
            <Box sx={historyBoxStyle}>
              <a target="_blank" href={vehicleData.carfaxURL} rel="noreferrer">
                <StaticImage
                  src="../../assets/images/showMeCarfax.png"
                  alt="Carfax Report Button"
                />
              </a>
            </Box>
          </Box>
        )}

        {/* Bottom App Bar */}
        <BottomAppBar />
      </Container>
    </>
  )
}

// Prop Types Validation
VehicleDetailPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default VehicleDetailPage

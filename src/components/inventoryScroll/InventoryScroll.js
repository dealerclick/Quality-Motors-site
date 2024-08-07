/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import VehicleCard from "../vehicleCard/VehicleCard"
import { Box, Container, Text } from "theme-ui"
import { boxStyles } from "./inventoryScrollStyles"
import useVehicleData from "../../hooks/useVehicleData"
import { INVENTORY_SCROLL_NUMBER } from "../../config/strings"
/**
 * InventoryScroll Component - A rad scrollable list of recently added vehicles, bro!
 * Hang ten and check out the latest arrivals, dude!
 *
 * @returns {JSX.Element} The InventoryScroll component, all jazzed up and ready to shred!
 */
const InventoryScroll = () => {
  const allVehicles = useVehicleData() // Gettin' those gnarly vehicles, bro!

  const [recentVehicles, setRecentVehicles] = useState([])

  useEffect(() => {
    // Take the last 20 vehicles from the allVehicles array
    const latestVehicles = allVehicles.slice(-INVENTORY_SCROLL_NUMBER)

    setRecentVehicles(latestVehicles)
  }, [allVehicles])

  if (!recentVehicles || recentVehicles.length === 0) {
    return null
  }
  return (
    <Container px={[3]} mt="5">
      <Text variant="heading" style={{ lineHeight: "3rem" }}>
        New Arrivals
      </Text>
      <Box sx={boxStyles}>
        {recentVehicles.map(({ node: vehicle }) => {
          const vehicleData = {
            year: vehicle.year,
            make: vehicle.make,
            model: vehicle.model,
            vin: vehicle.vin,
            createdDate: vehicle.createdOn,
            type: vehicle.type,
            trim: vehicle.trim,
            odometerIn: vehicle.odometerIn,
            askingPrice: vehicle.askingPrice,
            mPGCity: vehicle.mPGCity,
            downPayment: vehicle.downPmt,
            images: vehicle.images.map(
              image =>
                image.childImageSharp
                  ? image.childImageSharp.gatsbyImageData
                  : { publicURL: image.publicURL } // Use publicURL if gatsbyImageData is unavailable
            ),
          }

          return (
            <VehicleCard
              key={vehicle.vin}
              vehicle={vehicleData}
              vehicleImages={vehicle.images}
              onClick={() => navigate(`/inventory/${vehicle.inventoryID}`)}
            />
          )
        })}
      </Box>
    </Container>
  )
}

export default InventoryScroll

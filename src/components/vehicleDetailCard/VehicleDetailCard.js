/** @jsxImportSource theme-ui */
import { Box, Button, Flex, Text } from "theme-ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaShare } from "react-icons/fa"
import React, { useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Slider from "react-slick"
import FormatNumber from "../../utils/formatNumber"
import FormatCurrency from "../../utils/formatCurrency"
import { useLocation } from "@reach/router"
import SocialProof from "../socialProof/SocialProof"
import Tabs from "../tabs/Tabs"
import Overview from "../tabs/Overview"
import Performance from "../tabs/Performance"
import Features from "../tabs/Features"
import Options from "../tabs/Options"
import {
  cardStyle,
  imageContainerStyle,
  titleStyle,
  detailsStyle,
  priceContainerStyle,
  priceStyle,
  poBoxStyle,
  flexColumnRowStyle,
  flexBasis75Style,
  flexBasis100Style,
  certifiedPreOwnedTextStyle,
  handleShareClickStyle,
  thumbnailStyle,
  textAlignCenterStyle,
  contentStyleRight,
  contentStyleLeft,
  headerFlex,
  thumbnailContainerStyle,
} from "./vehicleDetailCardStyles"
import useFavorite from "../../hooks/useFavorite"
import FavoriteButton from "../favoriteButton/FavoriteButton"
import { WANTS_FAVORITES, WANTS_FINANCING, WANTS_SOCIAL_PROOF } from "../../config/strings"
/**
 * @description Hang ten with this surfboard-inspired component that displays detailed information about a vehicle.
 * @param {Object} vehicle - The vehicle object containing information such as year, make, model, etc.
 * @param {Array} vehicleImages - An array of vehicle images.
 */
const VehicleDetailCard = ({ vehicle, vehicleImages }) => {
  const location = useLocation()
  const sliderRef = useRef(null)
  const { isFavorite } = useFavorite(vehicle.vin)

  /**
   * Handles the click event for sharing the vehicle information.
   * @param {Object} e - The event object.
   */
  const handleShareClick = e => {
    e.preventDefault()
    const emailBody = `Check out this car: ${location.origin}/inventory/${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.vin}/`
    window.location.href = `mailto:?subject=Check out this car!&body=${encodeURIComponent(
      emailBody
    )}`
  }

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `)

  const placeholderImage = getImage(data.placeholderImage)

  // Handle multiple images for each vehicle
  const images =
    vehicleImages && vehicleImages.length > 0
      ? vehicleImages.map(image => {
          const gatsbyImage = getImage(image)
          if (!gatsbyImage) {
            console.log(
              `Failed to get Gatsby image from data: ${JSON.stringify(image)}`
            )
          }
          return gatsbyImage ? gatsbyImage : placeholderImage
        })
      : [placeholderImage]

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }


  const financingLink = WANTS_FINANCING ? (
    "/financing"
  ) : (
    "/contact"
  )


  return (
    <>
      <Box sx={poBoxStyle}>
        <Flex sx={flexColumnRowStyle}>
          <Box sx={flexBasis75Style}>
            <Box sx={cardStyle}>
              <Box sx={imageContainerStyle}>
                <Flex sx={headerFlex}>
                  <Box sx={contentStyleLeft}>
                    <Box>
                      <Text sx={certifiedPreOwnedTextStyle}>
                        Dealer Inspected
                      </Text>
                    </Box>
                    <Box>
                      <Text sx={titleStyle}>
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </Text>
                    </Box>
                    <Box sx={detailsStyle}>
                      <Text>
                        {vehicle.trim} •{" "}
                        <FormatNumber value={`${vehicle.odometerIn}`} /> miles
                      </Text>
                    </Box>
                  </Box>
                  <Box sx={contentStyleRight}>
                    <Flex sx={priceContainerStyle}>
                      <Box
                        onClick={handleShareClick}
                        sx={handleShareClickStyle}
                      >
                        <FaShare />
                      </Box>
                      {WANTS_FAVORITES && (
                        <Box
                          sx={{
                            position: "relative",
                            minWidth: "25px",
                            minHeight: "35px",
                          }}
                        >
                          <FavoriteButton
                            vehicleVin={vehicle.vin}
                            isFavoriteInitially={isFavorite}
                          />
                        </Box>
                      )}
                    </Flex>
                    <Text sx={priceStyle}>
                      <FormatCurrency value={`${vehicle.askingPrice}`} />
                    </Text>
                  </Box>
                </Flex>
                <Slider ref={sliderRef} {...sliderSettings}>
                  {images.map((image, idx) => (
                    <GatsbyImage
                      key={idx}
                      image={image}
                      alt={`${vehicle.make} ${vehicle.model} Image ${idx + 1}`}
                    />
                  ))}
                </Slider>
              </Box>
              {WANTS_SOCIAL_PROOF && <SocialProof />}
              <Tabs
                title="Details"
                labels={["Overview", "Engine", "Features", "Options"]}
                content={[
                  <Overview vehicle={vehicle} />,
                  <Performance vehicle={vehicle} />,
                  <Features vehicle={vehicle} />,
                  <Options vehicle={vehicle} />,
                ]}
              />
            </Box>
          </Box>
          <Box sx={flexBasis100Style}>
            <Box sx={textAlignCenterStyle}>
              <Button to={financingLink} as={Link} sx={{ width: "100%" }}>
                Get Started
              </Button>
            </Box>
            <Box sx={poBoxStyle}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                {images.map((image, idx) => (
                  <Box
                    sx={thumbnailContainerStyle}
                    key={`thumb${idx}`}
                    onClick={() => {
                      if (sliderRef.current && sliderRef.current.slickGoTo) {
                        sliderRef.current.slickGoTo(idx)
                      } else {
                        console.error(
                          "Slider reference or slickGoTo method not available"
                        )
                      }
                    }}
                  >
                    <GatsbyImage
                      image={image}
                      alt={`${vehicle.make} ${vehicle.model} Thumbnail ${
                        idx + 1
                      }`}
                      sx={thumbnailStyle}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default VehicleDetailCard

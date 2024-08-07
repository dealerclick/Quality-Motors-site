/** @jsxImportSource theme-ui */
import React from "react"
import PropTypes from "prop-types"
import { Box, Divider, Text } from "theme-ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import FormatNumber from "../../utils/formatNumber"
import calculateLowMiles from "../../utils/calculateLowMiles"
import FavoriteButton from "../favoriteButton/FavoriteButton"
import useFavorite from "../../hooks/useFavorite"
import capitalizeWords from "../../utils/capitalizeWords"
import FormatCurrency from "../../utils/formatCurrency"
import { formatPaymentText, getPaymentDetails } from "../../utils/paymentUtils"
import {
  HAS_VEHICLE_PAYMENTS,
  VEHICLE_CARD_INSPECTED_TEXT,
  VEHICLE_CARD_LOW_MILES,
  VEHICLE_CARD_LOW_PRICE,
  VEHICLE_CARD_PRIMARY_FOOTER_TEXT,
  VEHICLE_CARD_SECONDARY_FOOTER_TEXT,
  WANTS_CARD_FOOTER,
  WANTS_CARD_TOP_LABELS,
  WANTS_FAVORITES,
} from "../../config/strings"
import { styles } from "./vehicleCardStyles"

/**
 * VehicleCard component
 * @description Displays a card with vehicle information and allows users to mark a vehicle as favorite.
 * @param {object} props - Component props
 * @param {object} props.vehicle - Vehicle data
 * @param {array} props.vehicleImages - Array of vehicle images
 * @returns {React.Component} - Rendered component
 */
const VehicleCard = ({ vehicle, vehicleImages }) => {
  const { isFavorite } = useFavorite(vehicle.vin)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "placeholder.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `)

  const { downPayment, monthlyPayment } = getPaymentDetails(
    null,
    null,
    vehicle.askingPrice
  )
  const { downPaymentText, monthlyPaymentText } = formatPaymentText(
    downPayment,
    monthlyPayment
  )
  const placeholderImage = getImage(data.placeholderImage)

  const images =
    vehicleImages?.length > 0
      ? vehicleImages.map(image => getImage(image) || placeholderImage)
      : [placeholderImage]

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Box sx={styles.cardContainer}>
      {/* Image Slider */}
      <Link
        to={`/inventory/${vehicle.year}-${vehicle.make}-${vehicle.model}-${vehicle.vin}`}
        sx={{ display: "block" }}
      >
        <Box sx={styles.imageSliderContainer}>
          <Slider {...sliderSettings}>
            {images.map((image, idx) => (
              <GatsbyImage
                key={idx}
                image={image}
                alt={`${vehicle.make} ${vehicle.model} Image ${idx + 1}`}
                sx={styles.imageStyle}
              />
            ))}
          </Slider>
          {WANTS_CARD_TOP_LABELS && (
            <Box sx={styles.labelsContainer}>
              {/* Vehicle Price and Miles Labels */}
              <Box sx={styles.priceLabel}>{VEHICLE_CARD_LOW_PRICE}</Box>
              {calculateLowMiles(vehicle.odometerIn, vehicle.year) && (
                <Box sx={styles.milesLabel}>{VEHICLE_CARD_LOW_MILES}</Box>
              )}
            </Box>
          )}
          {WANTS_FAVORITES && (
            <FavoriteButton
              vehicleVin={vehicle.vin}
              isFavoriteInitially={isFavorite}
            />
          )}
        </Box>
      </Link>
      {/* Vehicle Details */}
      <Box sx={styles.vehicleDetailsContainer}>
        <Text sx={styles.inspectedText}>{VEHICLE_CARD_INSPECTED_TEXT}</Text>
        <Box sx={styles.detailsPricingContainer}>
          {/* Vehicle Year, Make, Model, Trim, and Miles */}
          <Box sx={styles.vehicleInfoContainer}>
            <Text sx={styles.yearMake}>
              {vehicle.year} {capitalizeWords(vehicle.make)}
            </Text>
            <Box sx={styles.modelTrimMilesContainer}>
              <Text>
                {capitalizeWords(vehicle.model)}
                {vehicle.trim && ` • ${vehicle.trim}`}
              </Text>
              {vehicle.odometerIn > 0 && (
                <Text>
                  <FormatNumber value={vehicle.odometerIn} /> miles
                </Text>
              )}
            </Box>
          </Box>
          {/* Vehicle Pricing */}
          <Box sx={styles.vehiclePricingContainer}>
            <Text sx={styles.askingPrice}>
              {vehicle.askingPrice > 0 ? (
                <FormatCurrency value={vehicle.askingPrice} />
              ) : (
                "Call Us!"
              )}
            </Text>
            {HAS_VEHICLE_PAYMENTS && vehicle.askingPrice > 0 && (
              <Box sx={styles.monthlyPaymentContainer}>
                <Text>
                  *<FormatCurrency value={monthlyPaymentText} />/mo
                </Text>
                <Text>
                  *<FormatCurrency value={downPaymentText} /> down
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Card Footer */}
      {WANTS_CARD_FOOTER && (
        <Box sx={styles.cardFooterContainer}>
          <Divider sx={styles.dividerStyle} />
          <Box sx={styles.footerTextContainer}>
            <Text sx={styles.primaryFooterText}>
              {VEHICLE_CARD_PRIMARY_FOOTER_TEXT}
            </Text>
            <Text sx={styles.secondaryFooterText}>
              &nbsp;{VEHICLE_CARD_SECONDARY_FOOTER_TEXT}
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  )
}

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    vin: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    trim: PropTypes.string,
    odometerIn: PropTypes.number.isRequired,
    askingPrice: PropTypes.number.isRequired,
    mPGCity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  vehicleImages: PropTypes.arrayOf(PropTypes.object),
}

export default VehicleCard

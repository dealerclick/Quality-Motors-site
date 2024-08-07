import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import { Box } from "theme-ui"

/**
 * CustomSlider component encapsulates the image carousel functionality.
 * @param {Object[]} images - An array of images to display.
 * @param {Object} [sliderSettings] - Custom settings for the slider.
 * @param {Object} [sx] - Custom styles to be applied to the Slider component.
 * @returns {JSX.Element} A component displaying a slider of images.
 */
const CustomSlider = ({ images, sliderSettings, sx }) => {
  // Default settings
  const defaultSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  // Combine default settings with custom settings if provided
  const settings = { ...defaultSettings, ...sliderSettings }

  return (
    <Box sx={sx}>
      <Slider {...settings}>
        {images.map((image, idx) => (
          <GatsbyImage
            key={idx}
            image={image}
            alt={`Image ${idx + 1}`}
            sx={{
              height: "100%",
              objectFit: "cover",
            }}
          />
        ))}
      </Slider>
    </Box>
  )
}

CustomSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  sliderSettings: PropTypes.object,
  sx: PropTypes.object,
}

CustomSlider.defaultProps = {
  sliderSettings: {},
  sx: {},
}

export default CustomSlider

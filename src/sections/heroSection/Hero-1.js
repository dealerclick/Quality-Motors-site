/** @jsxImportSource theme-ui */
import React from "react"
import { Box, Button, Heading, Text } from "theme-ui"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  heroStyles,
  heroTitleStyles,
  heroSubtitleStyles,
  imageOverlayStyles,
  heroContentStyles,
  imageContainerStyles,
  staticImageStyles,
  heroContentContainerStyles,
  heroButtonStyles,
} from "./heroStyles-1"
import { DEALERSHIP_NAME, TAGLINE, USE_LOGO } from "../../config/strings"

/**
 * Displays a hero section at the top of the page.
 * It features an image, title, subtitle, and a button to view the inventory.
 * The component conditionally renders either the dealership name or logo based on the USE_LOGO flag.
 *
 * @returns {JSX.Element} The Hero component.
 */
const Hero1 = () => {
  return (
    <Box sx={heroStyles}>
      <Box sx={imageContainerStyles}>
        <StaticImage
          src="../../assets/images/hero.webp"
          alt="Car dealership"
          id="hero-image"
          placeholder="blurred"
          style={staticImageStyles}
          loading="eager"
        />
        <Box sx={imageOverlayStyles} />
        <Box sx={heroContentContainerStyles}>
          <Box sx={heroContentStyles}>
            {USE_LOGO ? (
              <StaticImage
                src="../../assets/images/logo.png"
                alt={DEALERSHIP_NAME}
                width={200}
                height={100}
              />
            ) : (
              <Heading as="h1" sx={heroTitleStyles}>
                {DEALERSHIP_NAME}
              </Heading>
            )}
            <Heading as="h2" sx={heroSubtitleStyles}>
              {TAGLINE}
            </Heading>
            <Text sx={heroSubtitleStyles}>
              Start buying your dream car 100% online.
            </Text>
            <Link to="/inventory">
              <Button sx={heroButtonStyles}>View Inventory →</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Hero1.propTypes = {
  // Add any props if needed
}

export default Hero1

/** @jsxImportSource theme-ui */
import React from "react"
import { Box, Button, Heading, Text } from "theme-ui"
import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
import { AiOutlineCar } from "react-icons/ai"
import {
  heroStyles,
  heroTitleStyles,
  heroSubtitleStyles,
  heroButtonStyles,
  imageOverlayStyles,
  heroContentStyles,
  imageContainerStyles,
  // staticImageStyles,
  heroContentContainerStyles,
} from "./heroStyles-2"
import { DEALERSHIP_NAME, TAGLINE } from "../../config/strings"

/**
 * Displays a rad hero section at the top of the page, bro!
 * It features an epic image, captivating title, awesome subtitle,
 * and a button to view the inventory. Get ready to ride with style, dude!
 *
 * @returns {JSX.Element} The Hero component.
 */
const Hero2 = () => {
  return (
    <Box sx={heroStyles}>
      <Box sx={imageContainerStyles}>
        {/* <StaticImage
          src="../../assets/images/car-dealership.png"
          alt="Car dealership"
          id="hero-image"
          placeholder="blurred"
          style={staticImageStyles}
          loading="eager"
        /> */}
        <Box sx={imageOverlayStyles} />
        <Box sx={heroContentContainerStyles}>
          <Box sx={heroContentStyles}>
            <Heading as="h1" sx={heroTitleStyles}>
              {DEALERSHIP_NAME}
            </Heading>
            <Text sx={heroSubtitleStyles}>{TAGLINE}</Text>
            <Button as={Link} to="/inventory" sx={heroButtonStyles}>
              <AiOutlineCar />
              &nbsp;View Inventory
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero2

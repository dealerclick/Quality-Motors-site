/** @jsxImportSource theme-ui */
import React from "react"
import { Link } from "gatsby"
import { Box, Heading, Text, Container, Flex, Button } from "theme-ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  imageBoxStyles,
  imageStyles,
  contentBoxStyles,
  headingStyles,
  imageBoxStylesRight,
} from "./ctaTemplateStyles"

const CtaTemplate = ({
  imageData,
  imageAlt,
  heading,
  description,
  link,
  className,
  imageOnRight,
}) => {
  const image = getImage(imageData)

  return (
    <Container my={4} p={3}>
      <Flex
        className={className}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          flexWrap: ["wrap", "nowrap"],
        }}
      >
        <Box sx={imageOnRight ? imageBoxStylesRight : imageBoxStyles}>
          <GatsbyImage style={imageStyles} image={image} alt={imageAlt} />
        </Box>
        <Box sx={contentBoxStyles}>
          <Heading as="h2" sx={headingStyles}>
            {heading}
          </Heading>
          <Text>{description}</Text>
          <Box mt={4}>
            <Button to={link} as={Link} bg="onPrimaryFixedVariant">
              Get Started
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default CtaTemplate

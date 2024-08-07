/** @jsxImportSource theme-ui */
import React from "react"
import { Box, Heading, Text, Container, Flex } from "theme-ui"
import FinancingForm from "../../components/financingForm/FinancingForm"
import {
  ADDRESS,
  EMAIL,
  FINANCING_SUBTITLE,
  FINANCING_TITLE,
  FIN_CONTACT_TITLE,
  PHONE_NUMBER,
} from "../../config/strings"
import { FinancingPageHead } from "../../config/heads"

// Styles for the FinancingPage component
const financingPageStyles = {
  flexContainer: {
    width: ["100%"],
    flexWrap: "wrap",
    p: 2,
    alignItems: "center",
  },
  financingFormContainer: {
    justifyContent: "center",
    width: ["100%", "50%"],
    display: "flex",
    p: [2,5],
    overflow: "contain",
  },
  formBox: {
    boxShadow: theme => `0px 4px 4px ${theme.colors.shadow}`,
    borderRadius: "12px",
    bg: "background",
    color: "onSurface",
  },
  contactInfoContainer: {
    justifyContent: "left",
    width: ["100%", "50%"],
    mt: [2, 0],
    p: 2,
    borderRadius: [0, 12],
    height: "fit-content",
  },
}

/**
 * @function FinancingPage
 * @returns {JSX.Element} - The JSX element representing the FinancingPage component.
 */
const FinancingPage = () => {
  return (
    <>
      {/* Set the page head for SEO */}
      <FinancingPageHead />

      {/* Main content */}
      <Container>
        <Flex sx={financingPageStyles.flexContainer}>
          {/* Financing Form */}
          <Box sx={financingPageStyles.financingFormContainer}>
            <Box sx={financingPageStyles.formBox}>
              <FinancingForm />
            </Box>
          </Box>

          {/* Contact Information */}
          <Box sx={financingPageStyles.contactInfoContainer} p={4}>
            <Heading as="h1" variant="pageHeading">
              {FINANCING_TITLE}
            </Heading>
            <Text variant="pageSubtitle">{FINANCING_SUBTITLE}</Text>
            <Box mt={4}>
              {/* Showroom Address */}
              <Box mb={3}>
                <Heading as="h2" variant="sectionHeading">
                  {FIN_CONTACT_TITLE}
                </Heading>
                <Text>{ADDRESS}</Text>
              </Box>

              {/* Phone Number */}
              <Box mb={3}>
                <Heading as="h2" variant="sectionHeading">
                  Call Us
                </Heading>
                <Text>Phone: {PHONE_NUMBER}</Text>
              </Box>

              {/* Email Address */}
              <Box mb={3}>
                <Heading as="h2" variant="sectionHeading">
                  Email Us
                </Heading>
                <Text>Email: {EMAIL}</Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default FinancingPage

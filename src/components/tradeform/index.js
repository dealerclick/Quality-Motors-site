/** @jsxImportSource theme-ui */

import React from "react"
import { Box, Container, Flex, Heading, Text } from "theme-ui"
import ContactForm from "../../components/contactForm/ContactForm"
import {  TradePageHead } from "../../config/heads"
import {
  ADDRESS,
  TRADE_FORM_SUBTITLE,
  TRADE_FORM_TITLE,
  EMAIL,
  MAP_URL,
  PHONE_NUMBER,
  TRADE_CONTACT_TITLE,
} from "../../config/strings"
import TradeForm from "../../components/tradeForm/TradeForm"

// Styles for the TradeInPage component
const TradeInStyles = {
  container: {
    p: 0,
  },
  mainFlex: {
    width: ["100%"],
    flexWrap: "wrap",
    p: [0, 3],
    alignItems: "center",
  },
  contactFormBox: {
    justifyContent: "center",
    width: ["100%", "50%"],
    display: "flex",
    p: [4],
    overflow: "contain",
  },
  contactFormInnerBox: {
    boxShadow: theme => `0px 4px 4px ${theme.colors.shadow}`,
    borderRadius: "12px",
    bg: "surface",
    color: "onSurface",
  },
  contactInfoBox: {
    color: "onBackground",
    justifyContent: "left",
    width: ["100%", "50%"],
    mt: [2, 0],
    borderRadius: [0, 12],
    height: "fit-content",
    p: 4,
  },
  mapBox: {
    mt: 3,
    border: "none",
    p: 0,
  },
}

/**
 * @function TradeInPage
 * @description This component renders the Contact Us page, encompassing a contact form, contact information, and a Google Map for location.
 * @returns {JSX.Element} The rendered JSX element for the TradeInPage component.
 */
const TradeInPage = () => {
  return (
    <>
      {/* Inject SEO-related head elements */}
      <TradePageHead />

      {/* Container for the main content */}
      <Container sx={TradeInStyles.container}>
        {/* Flex container to hold Contact Form and Contact Information */}
        <Flex sx={TradeInStyles.mainFlex}>
          {/* Container for the Contact Form */}
          <Box sx={TradeInStyles.contactFormBox}>
            <Box sx={TradeInStyles.contactFormInnerBox}>
              <TradeForm />
            </Box>
          </Box>

          {/* Container for the Contact Information */}
          <Box sx={TradeInStyles.contactInfoBox}>
            <Heading as="h1" variant="pageHeading">
              {TRADE_FORM_TITLE}
            </Heading>
            <Text variant="pageSubtitle">{TRADE_FORM_SUBTITLE}</Text>

            {/* Additional details like showroom address, phone number, and email */}
            <Box mt={4}>
              <Box mb={3}>
                <Heading as="h2" variant="sectionHeading">
                  {TRADE_CONTACT_TITLE}
                </Heading>
                <Text>{ADDRESS}</Text>
              </Box>
              <Box mb={3}>
                <Heading as="h2" variant="sectionHeading">
                  Call Us
                </Heading>
                <Text>Car Sales Phone: +1 (714) 535-8555</Text>
                <Text>Parts & Service: +1 (714) 535-4000</Text>
              </Box>
              <Box>
                <Heading as="h2" variant="sectionHeading">
                  Email Us
                </Heading>
                <Text>Email: {EMAIL}</Text>
              </Box>
            </Box>
          </Box>
        </Flex>

        {/* Container for the Google Map */}
        <Box sx={TradeInStyles.mapBox}>
          <iframe
            src={MAP_URL}
            width="100%"
            title="Google Map"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: "none" }}
          />
        </Box>
      </Container>
    </>
  )
}

export default TradeInPage

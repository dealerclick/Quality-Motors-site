/** @jsxImportSource theme-ui */

import React from "react"
import { Box, Heading, Text, Container, Flex } from "theme-ui"
import ContactForm from "../../components/contactForm/ContactForm"
import {
  ADDRESS,
  CON_CONTACT_TITLE,
  CONTACT_FORM_SUBTITLE,
  CONTACT_FORM_TITLE,
  EMAIL,
  MAP_URL,
  PHONE_NUMBER,
} from "../../config/strings"
import { ContactPageHead } from "../../config/heads"

// Styles for the ContactUsPage component
const ContactUsStyles = {
  container: {
    p: 0,
  },
  mainFlex: {
    width: ["100%"],
    flexWrap: "wrap",
    p: [0, 3],
    alignItems: "center",
    justifyContent: "center",
  },
  contactFormBox: {
    justifyContent: "center",
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
 * @function ContactUsPage
 * @description This component renders the Contact Us page, encompassing a contact form, contact information, and a Google Map for location.
 * @returns {JSX.Element} The rendered JSX element for the ContactUsPage component.
 */
const ContactUsPage = () => {
  return (
    <>
      {/* Inject SEO-related head elements */}
      <ContactPageHead />

      {/* Container for the main content */}
      <Container sx={ContactUsStyles.container}>
        {/* Flex container to hold Contact Form and Contact Information */}
        <Flex sx={ContactUsStyles.mainFlex}>
          {/* Container for the Contact Form */}
          <Box sx={ContactUsStyles.contactFormBox}>
            <Box sx={ContactUsStyles.contactFormInnerBox}>
              <ContactForm />
            </Box>
          </Box>

          {/* Container for the Contact Information */}
          <Box sx={ContactUsStyles.contactInfoBox}>
            <Heading as="h1" variant="pageHeading">
              {CONTACT_FORM_TITLE}
            </Heading>
            <Text variant="pageSubtitle">{CONTACT_FORM_SUBTITLE}</Text>

            {/* Additional details like showroom address, phone number, and email */}
            <Box mt={4}>
              <Box mb={3}>
                <Heading as="h2" variant="sectionHeading">
                  {CON_CONTACT_TITLE}
                </Heading>
                <Text>{ADDRESS}</Text>
              </Box>
              <Box mb={3}>
                <Heading as="h2" variant="sectionHeading">
                  Call Us
                </Heading>
                <Text>Phone: {PHONE_NUMBER}</Text>
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
        <Box sx={ContactUsStyles.mapBox}>
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

export default ContactUsPage

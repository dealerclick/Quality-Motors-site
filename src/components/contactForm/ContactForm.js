/** @jsxImportSource theme-ui */
import React from "react"
import FormTemplate from "../../templates/formTemplate/FormTemplate"
import { Box, Heading } from "theme-ui"
import { contactFormContainerStyles, headingStyles } from "./contactFormStyles"

/**
 * Component for the contact form, dude!
 * Get in touch and send a rad message, bro!
 *
 * @returns {JSX.Element} The ContactForm component.
 */
const ContactForm = () => {
  const fields = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      sx: {},
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      required: true,
      sx: {},
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      sx: {},
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      required: true,
      sx: {},
    },
  ]

  return (
    <Box sx={contactFormContainerStyles}>
      <Box sx={headingStyles}>
        <Heading as="h2">Get in Touch</Heading>
      </Box>
      <FormTemplate
        fields={fields}
        formAction="/.netlify/functions/submitContactForm"
        initialData={{}}
        validate={() => ({})}
        onSuccess={() => {}}
        justifyContent="center"
      />
    </Box>
  )
}

export default ContactForm

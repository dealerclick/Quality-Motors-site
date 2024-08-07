/** @jsxImportSource theme-ui */
/**
 * @file Hang ten, dude! This file is all about the Financing Form, bro.
 * We got a righteous template with the fields and some tubular styling to catch the user's attention.
 * Plus, we've got validation and some callbacks for when things go right.
 * @module FinancingForm
 * @category Components
 * @see {@link https://theme-ui.com/ | Theme UI}
 */

import React from "react"
import FormTemplate from "../../templates/formTemplate/FormTemplate"
import { Box, Heading } from "theme-ui"
import { formContainerStyles, headingStyles } from "./financingFormStyles"

/**
 * @function FinancingForm
 * @description This is where we put together our wicked Financing Form, man.
 * We're taking user input to get 'em prequalified for financing, like catching a wave to a new set of wheels.
 * @returns {React.Element} A radical React element.
 * @example <FinancingForm />
 */
const FinancingForm = () => {
  /**
   * @name fields
   * @description This is our set of field definitions for the form. Each field object has properties for the name, label, type, whether it's required, and some styling.
   * @type {Array}
   */
  const fields = [
    //buyer personal information
    {
      name: "dealerID",
      label: "",
      type: "hidden",
      required: true,
      value: process.env.GATSBY_DEALER_ID,
      sx: { display: "none" },
    },
    {
      name: "locationID",
      label: "",
      type: "hidden",
      required: true,
      value: process.env.GATSBY_LOCATION_ID,
      sx: { display: "none" },
    },
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
      name: "contactEmail",
      label: "Email",
      type: "email",
      required: true,
      sx: {},
    },
    {
      name: "mobilePhone",
      label: "Mobile Phone",
      type: "text",
      required: false,
      sx: {},
    },
    {
      name: "dob",
      label: "Date of Birth",
      type: "date",
      required: true,
      sx: {},
    },
    {
      name: "homeZipCode",
      label: "Home Zip Code",
      type: "text",
      required: true,
      sx: {},
    },
  ]

  /**
   * @description Here we're returning the full form layout, all decked out and ready to catch some user input.
   */
  return (
    <Box sx={formContainerStyles}>
      <Box sx={headingStyles}>
        <Heading as="h2">Financing Application</Heading>
      </Box>
      <FormTemplate
        layout={"row"}
        fields={fields}
        formAction="/.netlify/functions/submitFinancingForm"
        initialData={{}}
        validate={() => ({})}
        onSuccess={() => {}}
      />
    </Box>
  )
}

export default FinancingForm

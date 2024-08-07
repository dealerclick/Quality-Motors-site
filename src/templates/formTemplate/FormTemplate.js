import React, { useState } from "react"
import { Box, Button, Input, Container, Label, Flex } from "theme-ui"
import PropTypes from "prop-types"
import Swal from "sweetalert2"
import { swalTheme } from "../../assets/styles/swalTheme"
import {
  formContainerStyle,
  fieldContainerStyle,
  labelStyle,
  inputStyle,
} from "./formTemplateStyles"
//import { useRecaptcha } from "../../hooks/useRecaptcha"

/**
 * @description A reusable form template component.
 * @param {object[]} fields - Array of form field configurations.
 * @param {string} formAction - The URL or endpoint where the form data will be submitted.
 * @param {object} initialData - Initial form data.
 * @param {function} validate - Function to validate form data.
 * @param {function} onSuccess - Function to be called when form submission is successful.
 * @param {string} [justifyContent="center"] - Justify content of form fields.
 */
const FormTemplate = ({
  fields,
  formAction,
  initialData,
  validate,
  onSuccess,
  layout = "column",
}) => {
  // Initialize formData with values from fields array
  const defaultFormData = fields.reduce((acc, field) => {
    acc[field.name] = field.value || ""
    return acc
  }, {})

  const [formData, setFormData] = useState({
    ...defaultFormData,
    ...initialData,
  })
  //eslint-disable-next-line
   const [formErrors, setFormErrors] = useState({})
  // const [recaptchaValue] = useRecaptcha()

  /**
   * Handles form submission.
   * @param {object} event - The form submission event.
   */
  const handleSubmit = async event => {
    event.preventDefault()

    const errors = validate(formData)

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch(formAction, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          onSuccess(data)
          setFormData(initialData)

          // success alert
          Swal.fire({
            icon: "success",
            title: "Form Submitted Successfully",
            ...swalTheme,
          })
        } else {
          throw new Error("Form submission failed")
        }
      } catch (error) {
        console.error("Form submission error:", error)
        Swal.fire({
          icon: "error",
          title: "Form Submission Failed",
          text: "An error occurred while submitting the form. Please try again later.",
          ...swalTheme,
        })
      }
    } else {
      setFormErrors(errors)
    }
  }

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <Box as="form" sx={formContainerStyle} onSubmit={handleSubmit}>
      <Flex
        sx={{
          flexDirection: layout,
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {fields.map(({ name, label, type, sx, ...rest }) => (
          <Box key={name} sx={fieldContainerStyle}>
            <Label htmlFor={name} sx={labelStyle}>
              {label}
            </Label>
            <Input
              id={name}
              value={formData[name] || ""}
              onChange={event => handleInputChange(name, event.target.value)}
              type={type}
              sx={{ ...inputStyle, ...sx }}
              {...rest}
            />
          </Box>
        ))}
        <Container
          display="flex"
          justifyContent="center"
          sx={{ textAlign: "center", mt: 3 }}
        >
          <Button type="submit">Submit</Button>
        </Container>
      </Flex>
    </Box>
  )
}

FormTemplate.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sx: PropTypes.object,
    })
  ).isRequired,
  formAction: PropTypes.string.isRequired,
  initialData: PropTypes.object.isRequired,
  validate: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  layout: PropTypes.oneOf(["column", "row"]),
}

export default FormTemplate

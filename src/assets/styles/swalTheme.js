/** @jsxImportSource theme-ui */

import { css } from "@emotion/react"
import { css as cssClassName } from "@emotion/css"
import theme from "../../gatsby-plugin-theme-ui"

// Extract the styles you want to use from your theme
const { colors } = theme

// Define the custom styles for SweetAlert2
const containerStyle = css`
  background-color: ${colors.surface};
`
const titleStyle = css`
  /* Custom styles for the notification title */
`
const contentStyle = css`
  /* Custom styles for the notification content */
`
const confirmButtonStyle = css`
  /* Custom styles for the notification button */
`

// Define the custom theme for SweetAlert2
export const swalTheme = {
  customClass: {
    container: cssClassName(containerStyle),
    title: cssClassName(titleStyle),
    content: cssClassName(contentStyle),
    confirmButton: cssClassName(confirmButtonStyle),
    // Add more custom classes if needed
  },
}

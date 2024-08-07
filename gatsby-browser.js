/**
 * gatsby-browser.js
 *
 * This file is part of Gatsby's Browser APIs.
 * It's used to customize and extend default settings affecting the browser rendering.
 *
 * For more information, see: https://www.gatsbyjs.com/docs/browser-apis/
 */

// Importing custom CSS and third-party styles
import "./src/assets/styles/Custom.css"
import "./node_modules/slick-carousel/slick/slick.css"
import "./node_modules/slick-carousel/slick/slick-theme.css"

// Removed static import of tokens-blue.css

// React and Layout component import
import React from "react"
import Layout from "./src/templates/layout/Layout"

// Import strings.js or wherever the theme setting is stored
// import { COLOR_SCHEME } from "./src/config/strings"

/**
 * Set the `lang` attribute on client entry and import theme CSS dynamically.
 */
export const onClientEntry = () => {
  document.documentElement.lang = "en"

  // Assuming the theme color is stored in strings.js and is accessible via strings.themeColor
  import(`./src/gatsby-plugin-theme-ui/tokens/tokens-blue.css`)
}

/**
 * Wrap the page element in a layout component.
 *
 * @param {Object} param0
 * @param {React.Element} param0.element The root element of the page.
 * @param {Object} param0.props Additional properties passed to the component.
 *
 * @returns {React.Element} Wrapped element with layout.
 */
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

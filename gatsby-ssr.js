/**
 * gatsby-ssr.js
 *
 * This file is part of Gatsby's Server-Side Rendering (SSR) APIs.
 * It's used to customize default settings affecting server-side rendering.
 *
 * For more information, see: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// Importing custom CSS and third-party styles
import "./src/assets/styles/Custom.css"
import "./node_modules/slick-carousel/slick/slick.css"
import "./node_modules/slick-carousel/slick/slick-theme.css"
import "./src/gatsby-plugin-theme-ui/tokens/tokens-red.css"

// React and Layout component import
import React from "react"
import Layout from "./src/templates/layout/Layout"

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
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: "en",
  })
}

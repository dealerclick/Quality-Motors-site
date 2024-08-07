import * as React from "react"
import { Link } from "gatsby"
import { Box } from "theme-ui"
import { FourOhFourPageHead } from "../../config/heads"

/**
 * @file NotFoundPage.js
 * @brief The NotFoundPage component displays a 404 page for when a user tries to access a non-existent page.
 *        It provides a link to return to the homepage.
 */

/**
 * @function NotFoundPage
 * @returns {JSX.Element} - The JSX element representing the NotFoundPage component.
 */

const NotFoundStyles = {
  container: {
    textAlign: "center",
    color: "onBackground",
  },
}

const NotFoundPage = () => {
  return (
    <>
      {/* Set the page head for SEO */}
      <FourOhFourPageHead />

      {/* Main content */}
      <Box sx={NotFoundStyles.container}>
        <h1>Page not found</h1>
        <p>
          Looks like you found a secret page! <br />
          <Link to="/">Go home</Link>.
        </p>
      </Box>
    </>
  )
}

export default NotFoundPage

/** @jsxImportSource theme-ui */
import React from "react"
import { Box, Button } from "theme-ui"
import { Link } from "gatsby"
import bottomAppBarStyles from "./bottomAppBarStyles"

/**
 * Displays the Bottom AppBar, bro! It's all about that smooth bottom navigation.
 *
 * @returns {JSX.Element} The BottomAppBar component.
 */
const BottomAppBar = () => {
  return (
    <Box sx={bottomAppBarStyles.container}>
      <Button
        as={Link}
        to="/financing"
        variant="primary"
        sx={bottomAppBarStyles.button}
      >
        Get Started
      </Button>
    </Box>
  )
}

export default BottomAppBar

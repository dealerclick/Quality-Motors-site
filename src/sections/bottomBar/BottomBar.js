/** @jsxImportSource theme-ui */
import React from "react"
import { Box, Text } from "theme-ui"
import { bottomBarStyles } from "./bottomBarStyles"
import { DEALERSHIP_NAME } from "../../config/strings"

/**

    The BottomBar component, bro!
    Displays the bottom bar/footer of the page, dude!
    @returns {JSX.Element} The BottomBar component.
    */
const BottomBar = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box sx={bottomBarStyles}>
      <Text>
        © {currentYear} {DEALERSHIP_NAME}. Made by{" "}
        <a
          href="https://dealerclick.com"
          rel="noreferrer"
          target="_blank"
          style={{ color: "inherit" }}
        >
          {" "}
          DealerClick{" "}
        </a>
        in California.
      </Text>
    </Box>
  )
}

export default BottomBar

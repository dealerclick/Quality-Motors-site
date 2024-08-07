/**
 * @jsxImportSource theme-ui
 */
import React from "react"
import { Box, Text } from "theme-ui"
import {
  topBarStyle,
  addressStyle,
  linkStyle,
  containerStyle,
} from "./topBar-1-Styles"
import {
  ADDRESS,
  MAP_LINK_URL,
  PHONE_NUMBER,
} from "../../config/strings"

/**
 * @description Top Bar component.
 * Displays a top bar with address information.
 */
const TopBar1 = () => {
  return (
    <Box sx={topBarStyle}>
      <Box sx={containerStyle}>
        <Text>📞&nbsp;{PHONE_NUMBER}</Text>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Text>📍</Text>
        <a
          href={MAP_LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          sx={linkStyle}
        >
          <Text sx={addressStyle}>{ADDRESS}</Text>
        </a>
      </Box>
    </Box>
  )
}

export default TopBar1

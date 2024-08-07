/** @jsxImportSource theme-ui */
import React, { useState } from "react"
import { Box, Flex, Switch, useColorMode, Button, Text } from "theme-ui"
import { Link } from "gatsby"
import {
  navStyles,
  // logoStyles,
  buttonStyles,
  ulStyles,
  closeButtonStyles,
  linkStyles,
  switchStyles,
  switchButtonStyles,
  flexStyles,
  navLinkStyles,
  activeLinkStyles,
  logoContainerStyles, // Catch those waves with the active styles, dude
} from "./header-3-Styles"
//import { StaticImage } from "gatsby-plugin-image"
import { DEALERSHIP_NAME } from "../../config/strings"

/**
 * @component Header
 * @description The header of the site, the gateway to the surf spots!
 * @returns {JSX.Element} The header component, get ready to ride!
 */
const Header1 = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * @function handleToggle
   * @description Flips the color mode switch, like waxing the board!
   * @param {object} e - The event object, like a fresh breeze.
   */
  const handleToggle = e => {
    setColorMode(e.target.checked ? "dark" : "light")
  }

  /**
   * @function toggleMenu
   * @description Like the tides, it opens and closes the mobile menu!
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = ["/", "/inventory", "/financing", "/contact"]
  const labels = ["Home", "Inventory", "Financing", "Contact"]

  return (
    <Flex as="nav" sx={navStyles}>
      <div sx={logoContainerStyles}>
        <Link to="/">
          <Text as="h1" sx={{ color: "primary" }}>
            {DEALERSHIP_NAME}
          </Text>
        </Link>
      </div>

      <Button onClick={toggleMenu} sx={buttonStyles}>
        ☰
      </Button>

      <Flex sx={flexStyles}>
        {menuItems.map((path, index) => (
          <Link to={path} activeClassName="activeLink" key={index}>
            <Button
              sx={{ ...navLinkStyles, ".activeLink &": activeLinkStyles }}
            >
              {labels[index]}
            </Button>
          </Link>
        ))}
        <Box sx={switchStyles}>
          <Switch
            checked={colorMode === "dark"}
            onChange={handleToggle}
            sx={switchButtonStyles}
          />
        </Box>
      </Flex>

      {isMenuOpen && (
        <Box as="ul" sx={ulStyles}>
          <Button onClick={toggleMenu} sx={closeButtonStyles}>
            ×
          </Button>
          {menuItems.map((path, index) => (
            <Link to={path} activeClassName="activeLink" key={index}>
              <Button
                sx={{ ...linkStyles, ".activeLink &": activeLinkStyles }}
                onClick={toggleMenu}
              >
                {labels[index]}
              </Button>
            </Link>
          ))}
          <Box sx={switchStyles}>
            <Switch
              checked={colorMode === "dark"}
              onChange={handleToggle}
              sx={switchButtonStyles}
            />
          </Box>
        </Box>
      )}
    </Flex>
  )
}

export default Header1

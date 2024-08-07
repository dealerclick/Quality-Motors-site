/** @jsxImportSource theme-ui */
import React, { useState } from "react"
import { Box, Flex, Switch, useColorMode, Button } from "theme-ui"
import { Link } from "gatsby"
import {
  navStyles,
  logoStyles,
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
} from "./header-1-Styles"
import { StaticImage } from "gatsby-plugin-image"
import {
  DEALERSHIP_NAME,
  WANTS_FINANCING,
  USE_LOGO,
} from "../../config/strings"

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

  // Access the environment variable
  const showFinancing = WANTS_FINANCING === true

  const menuItems = [
    "/",
    "/inventory",
    showFinancing ? "/financing" : null,
    "/contact",
  ].filter(Boolean)
  const labels = [
    "Home",
    "Inventory",
    showFinancing ? "Financing" : null,
    "Contact",
  ].filter(Boolean)

  return (
    <Flex as="nav" sx={navStyles}>
      <div sx={logoContainerStyles}>
        {USE_LOGO ? (
          <>
            <Link to="/">
              <StaticImage
                src="../../assets/images/logo.png"
                alt={DEALERSHIP_NAME}
                id="logo"
                loading="eager"
                placeholder="blurred"
                sx={logoStyles}
              />
            </Link>
            <h1 style={{ visibility: "hidden", position: "absolute" }}>
              {DEALERSHIP_NAME}
            </h1>
          </>
        ) : (
          <h1>{DEALERSHIP_NAME}</h1>
        )}
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

/**
 * @constant navStyles
 * @description Styles for the navigation bar.
 * @type {object}
 */
export const navStyles = {
  boxShadow: theme => `0px 4px 4px ${theme.colors.shadow}`,
  justifyContent: "space-between",
  alignItems: "center",
  py: 2,
  px: 3,
  bg: "surface",
  color: "onSurface",
  zIndex: "10",
}

export const logoContainerStyles = {
  width: "260px",
}

/**
 * @constant logoStyles
 * @description Styles for the logo in the navigation bar.
 * @type {object}
 */
export const logoStyles = { width: ["150px", "120px"], my: 2 }

/**
 * @constant buttonStyles
 * @description Styles for the menu button in the navigation bar.
 * @type {object}
 */
export const buttonStyles = {
  display: ["block", "none"],
  background: "surfaceVariant",
  color: "onSurface",
}

/**
 * @constant ulStyles
 * @description Styles for the menu list in the navigation bar.
 * @type {object}
 */
export const ulStyles = {
  position: "fixed",
  top: 0,
  right: 0,
  width: "100%",
  height: "100%",
  zIndex: "2001",
  listStyle: "none",
  p: [3, 4],
  display: ["flex", "none"],
  flexDirection: "column",
  alignItems: "center",
  justifyContent: ["flex-start", "center"],
  bg: "background",
}

/**
 * @constant closeButtonStyles
 * @description Styles for the close button in the menu list.
 * @type {object}
 */
export const closeButtonStyles = {
  alignSelf: "flex-end",
  mb: 3,
  bg: "inherit",
  color: "onSurface",
}

/**
 * @constant linkStyles
 * @description Styles for the links in the menu list.
 * @type {object}
 */
export const linkStyles = {
  my: 2,
  py: 2,
  px: 3,
  color: "onBackground",
  width: "100%",
  bg: "background",
  boxShadow: "none",
}

/**
 * @constant switchStyles
 * @description Styles for the color mode switch in the navigation bar.
 * @type {object}
 */
export const switchStyles = {
  display: "flex",
  alignItems: "center",
  mt: [4, 0],
}

/**
 * @constant switchButtonStyles
 * @description Styles for the toggle button of the color mode switch.
 * @type {object}
 */
export const switchButtonStyles = {
  ml: 2,
  backgroundColor: "surfaceContainer",
}

/**
 * @constant activeLinkStyles
 * @description Styles for the active link in the navigation bar.
 * @type {object}
 */
export const activeLinkStyles = {
  color: "onPrimaryFixedVariant",
}

/**
 * @constant flexStyles
 * @description Styles for the flex container in the navigation bar.
 * @type {object}
 */
export const flexStyles = {
  display: ["none", "flex"],
}

/**
 * @constant navLinkStyles
 * @description Styles for the navigation links in the navigation bar.
 * @type {object}
 */
export const navLinkStyles = {
  bg: "surface",
  color: "onSurface",
  mr: 3,
}

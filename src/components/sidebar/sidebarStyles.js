/** @jsxImportSource theme-ui */
/**
 * @constant sidebarBoxBaseStyle
 * @description Base styles for the sidebar box.
 * @type {object}
 */
export const sidebarBoxBaseStyle = {
  position: ["fixed", "relative"],
  top: 0,
  left: 0,
  width: ["100%", "auto"],
  height: ["100%"],
  bg: "background",
  color: "onSurface",
  p: ["inherit", 0],
  borderRadius: "6px",
  zIndex: 100,
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  overflow: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
}

/**
 * @constant filterButtonStyle
 * @description Styles for the filter button in the sidebar.
 * @type {object}
 */
export const filterButtonStyle = {
  display: ["block", "block", "none"],
  position: "fixed",
  right: 2,
  bottom: 3,
  pr: 4,
  bg: "tertiaryContainer",
  color: "onTertiaryContainer",
  zIndex: 10,
  mr: "-15px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.25)",
}

/**
 * @constant closeFilterBoxStyle
 * @description Styles for the overlay when the filter box is closed.
 * @type {object}
 */
export const closeFilterBoxStyle = {
  position: "fixed",
  top: "8px",
  right: "5px",
  width: "20px",
  height: "20px",
  zIndex: 99999,
  marginBottom: "10px",
  cursor: "pointer",
}

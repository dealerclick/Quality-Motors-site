/**
 * The style for the sidebar component.
 */
export const sidebarStyle = {
  flexBasis: ["0%", "25%"],
  flexGrow: 0,
  flexShrink: 0,
  pt: [5, 3],
  px: [0, 2],
}

/**
 * The style for the vehicle list component.
 */
export const vehicleListStyle = {
  flexBasis: ["100%", "70%", "85%"],
  flexGrow: 1,
  flexShrink: 1,
  p: 3,
  justifyContent: "center",
}

/**
 * The style for the search box component.
 */
export const searchBoxStyle = {
  justifyContent: "center",
  mb: 4,
  alignItems: "center",
  border: "1px solid",
  borderColor: "outlineVariant",
  borderRadius: 4,
}

/**
 * The style for the search input label component.
 */
export const searchInputLabelStyle = {
  fontSize: "1.5rem",
  pt: "4px",
  px: 2,
}

/**
 * The style for the search input container component.
 */
export const searchInputContainerStyle = {
  position: "relative",
  display: "flex",
  width: "100%",
}

/**
 * The style for the search input component.
 */
export const searchInputStyle = {
  width: "100%",
  pr: "30px",
  py: 2,
  px: 3,
  outline: "none",
  border: "none",
  boxShadow: ["none"],
  borderRadius: "6px",
  color: "onSurface",
  bg: "background",
  ":focus": {
    border: "none",
  },
}

/**
 * The style for the clear search button component.
 */
export const clearSearchButtonStyle = {
  position: "absolute",
  right: "25px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "#999",
}

/**
 * The style for the search results component.
 */
export const searchResultsStyle = {
  display: "flex",
  justifyContent: "left",
  mb: 2,
}

/**
 * The style for the search results count component.
 */
export const searchResultsCountStyle = {
  color: "onBackground",
  fontSize: "16px",
}

/**
 * The style for the vehicle cards component.
 */
export const vehicleCardsStyle = {
  flexWrap: ["nowrap", "wrap"],
  justifyContent: ["flex-start", "center"],
  display: "flex",
  flexDirection: ["column", "row"],
  mb: 5,
  mt: 2,
  gap: 2,
}

/**
 * The style for the disclaimer component.
 */
export const disclaimerStyle = {
  fontWeight: "lighter",
  fontSize: "12px",
  lineHeight: "8px",
}

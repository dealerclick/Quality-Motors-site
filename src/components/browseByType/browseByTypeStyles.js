export const flexStyles = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  gap: 3,
  py: 2,
  my: 2,
  justifyContent: ["left", "center"],
  overflowX: "auto",
  mx: "auto",
  // Hide scrollbar (cross-browser)
  scrollbarWidth: "none" /* For Firefox */,
  "-ms-overflow-style": "none" /* For Internet Explorer and Edge */,
  "&::-webkit-scrollbar": {
    display: "none" /* For Chrome, Safari, and Opera */,
  },
}

/**
 * Styles for the heading element in the InventoryScroll component.
 */
export const headingStyles = {
  px: 1,
  mb: 2,
  mt: 3,
}

export const containerStyles = {
  px: 3,
}

export const boxStyles = {
  p: 2,
  minWidth: "100px",
  boxSizing: "border-box",
  bg: "surfaceContainer",
  textAlign: "center",
  color: "onSurface",
  borderRadius: 4,
  cursor: "pointer",
  boxShadow: theme => `0px 4px 4px ${theme.colors.shadow}`,
  ":hover": {
    transform: "scale(1.05)",
    boxShadow: theme => `0px 4px 8px ${theme.colors.shadow}`,
    cursor: "pointer",
  },
}

export const specialtyBoxStyles = {
  ...boxStyles,
  width: "auto",
  minWidth: "195px",
  flexWrap: "noWrap",
  display: "flex",
  alignItems: "center",
  bg: "surfaceVariant",
  justifyContent: "space-between",
}

export const vehicleImageStyles = {
  position: "relative",
  maxWidth: "80px",
}

export const hrStyles = {
  width: "75%",
  maxWidth: "500px",
  mx: "auto",
  my: 4,
}

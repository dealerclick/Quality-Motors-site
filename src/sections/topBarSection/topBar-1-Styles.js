/**
 * @description Top bar style for the component.
 */
export const topBarStyle = {
  display: ["none", "flex"],
  justifyContent: "space-between",
  alignItems: "center",
  px: 3,
  py: 2,
  bg: "primaryDarkFixed",
  color: "onPrimaryDarkFixed",
  fontSize: 1,
  borderBottom: "1px solid",
  borderColor: "rgb(0, 0, 0, 0.03)",
}

/**
 * @description Button style for the component.
 */
export const buttonStyle = {
  bg: "transparent",
  color: "onPrimaryContainer",
  alignItems: "center",
  display: "flex",
  mr: 2,
  cursor: "pointer",
}

/**
 * @description Address style for the component.
 */
export const addressStyle = {
  display: "flex",
  color: "onPrimaryDarkFixed",
  alignItems: "center",
  "&:hover": {
    textDecoration: "underline",
  },
}

/**
 * @description Link style for the component.
 */
export const linkStyle = {
  textDecoration: "none",
  cursor: "pointer",
  display: "flex",
  "&:hover": {
    textDecoration: "none",
    underline: "none",
  },
}
/**
 * @description Container styles.
 */
export const containerStyle = {
  display: "flex",
}

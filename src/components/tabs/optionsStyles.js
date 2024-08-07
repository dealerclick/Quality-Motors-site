/**
 * @constant containerStyle
 * @description This style object is like the sand beneath our feet, providing the base for the Options component.
 */
export const containerStyle = {
  color: "onSurface",
  borderRadius: 4,
  p: 3,
  bg: "surfaceContainerLow",
}

/**
 * @constant optionContainerStyle
 * @description This style object is the sea where our optional equipment items swim.
 */
export const optionContainerStyle = {
  mt: "xs",
  display: "grid",
  gridTemplateColumns: ["1fr"],
  gap: 1,
  p: 3,
  width: "100%",
  minWidth: ["100%", "700px"],
}

/**
 * @constant itemBoxStyle
 * @description This style object is the surfboard for each optional equipment item, giving them a rad look!
 */
export const itemBoxStyle = {
  color: "onSurfaceVariant",
  p: 3,
  m: 3,
  borderRadius: 4,
  textAlign: "left",
  border: "1px solid",
  borderColor: "outlineVariant",
}

/**
 * @constant headingBoxStyle
 * @description The style object for the box containing each equipment item within an item of standard equipment.
 */
export const headingBoxStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
}

/**
 * @constant iconBoxStyle
 * @description The style object for an icon box component.
 */
export const iconBoxStyle = {
  fontSize: "32px",
  color: "primary",
  pr: 3,
}

/**
 * @constant itemTextStyle
 * @description This style object gives the text of each item its own righteous wave to ride.
 */
export const itemTextStyle = {
  pb: 2,
}

/**
 * @constant priceTextStyle
 * @description This style object gives the text of each item its own righteous wave to ride.
 */
export const priceTextStyle = {
  pb: 2,
  textAlign: "right",
}

/**
 * @constant headingTextStyle
 * @description The style object for the text of each item of standard equipment.
 */
export const headingTextStyle = {
  fontWeight: "bold",
  mt: 3,
  mb: 2,
}

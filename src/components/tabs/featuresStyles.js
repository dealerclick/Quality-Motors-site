/**
 * @constant standardEquipContainerStyle
 * @description The style object for the container of standard equipment.
 */
export const standardEquipContainerStyle = {
  mt: 0,
  display: "grid",
  gridGap: 3, // gap between grid items
  gridTemplateColumns: ["1fr", null, "1fr 1fr"], // 1 column on small devices, 2 columns on larger devices
  px: 3,
  mb: 4,
}

/**
 * @constant specificationEquipContainerStyle
 * @description The style object for the container of specification equipment.
 */
export const specificationEquipContainerStyle = {
  mt: "xs",
  display: "grid",
  gridGap: 3, // gap between grid items
  gridTemplateColumns: ["1fr", null, "1fr 1fr"], // 1 column on small devices, 2 columns on larger devices
}

/**
 * @constant containerStyle
 * @description The style object for the container of the Features component.
 */
export const containerStyle = {
  color: "onSurface",
  borderRadius: "card",
  p: 3,
  bg: "surfaceContainerLow",
}

/**
 * @constant iconBoxStyle
 * @description The style object for an icon box component.
 */
export const iconBoxStyle = {
  fontSize: "32px",
  color: "primary",
  pr: 2,
}

/**
 * @constant itemBoxStyle
 * @description The style object for the box containing each item of standard equipment.
 */
export const itemBoxStyle = {
  color: "onSurfaceVariant",
  p: 3,
  m: 3,
  borderRadius: 4,
}

/**
 * @constant itemTextStyle
 * @description The style object for the box containing each item of standard equipment.
 */
export const itemTextStyle = {
  lineHeight: "30px",
  textAlign: "left",
  fontSize: "16px",
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

/**
 * @constant equipBoxStyle
 * @description The style object for the box containing each equipment item within an item of standard equipment.
 */
export const equipBoxStyle = {
  p: 1,
  textAlign: "left",
}

/**
 * @constant headingBoxStyle
 * @description The style object for the box containing each equipment item within an item of standard equipment.
 */
export const headingBoxStyle = {
  display: "flex",
  alignItems: "center",
  border: "1px solid",
  borderColor: "outlineVariant",
  p: 2,
  mb: 2,
  fontSize: "16px",
  fontWeight: "bold",
}

/**
 * @constant marginBottomStyle
 * @description The style object for adding bottom margin to a section.
 */
export const marginBottomStyle = {
  mb: 2,
}

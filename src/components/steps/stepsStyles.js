/**
 * @constant containerStyle
 * @description Styles for the main container of the component.
 * @type {object}
 */
export const containerStyle = {
  alignItems: "center",
  textAlign: "center",
  my: 5,
  bg: "gold",
  p: 2,
  color: "onPrimaryContainer",
}

/**
 * @constant titleStyle
 * @description Styles for the title within the component.
 * @type {object}
 */
export const titleStyle = { mb: 4, mt: 3, fontSize: 5 }

/**
 * @constant flexContainerStyle
 * @description Styles for the flex container within the component.
 * @type {object}
 */
export const flexContainerStyle = {
  justifyContent: "center",
  alignItems: "flex-start",
  flexWrap: ["wrap", "nowrap"],
}

/**
 * @constant boxBaseStyle
 * @description Base styles for the inner box within the component.
 * @type {object}
 */
export const boxBaseStyle = { mx: 3, width: ["100%"], mb: 3 }

/**
 * @constant iconBoxStyle
 * @description Styles for the icon box within the component.
 * @type {object}
 */
export const iconBoxStyle = { mx: 3, color: "primary" }

/**
 * @constant boldTextStyle
 * @description Styles for bold text within the component.
 * @type {object}
 */
export const boldTextStyle = { fontWeight: "bold" }

/**
 * @constant linkTextStyle
 * @description Styles for underlined text within the component.
 * @type {object}
 */
export const linkTextStyle = { ...boldTextStyle, textDecoration: "underline" }

/**
 * @constant {Function} cardStyle - Styles for a card component.
 * @param {string} bg - Background color of the card.
 * @param {string} color - Text color of the card.
 * @returns {Object} - Styling properties for the card.
 * @description Styling properties for a card component:
 * - The card has a background color based on the provided `bg` parameter.
 * - The card has a border radius of 12px.
 * - The card has padding.
 * - The card has a bottom margin.
 * - The text color of the card is based on the provided `color` parameter.
 * - The content within the card is left-aligned.
 * - The card has a maximum width of 300px.
 */
export const cardStyles = {
  minWidth: "270px",
  maxWidth: "300px",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.125)",
  borderRadius: "4px",
  overflow: "hidden",
  flexGrow: 0,
  my: 3,
  py: 3,
  px: "15px",
  flexShrink: 0,
  flexBasis: ["100%", "20%", "15%"],
  boxSizing: "border-box",
  justifyContent: "center",
  bg: "background",
}

export const starStyles = {
  color: "gold",
  fontSize: "24px",
}

/**
 * @constant {Object} blockquoteStyle - Styles for a blockquote within a card component.
 * @description Styling properties for a blockquote element within a card component:
 * - The color of the blockquote is inherited from its parent.
 */
export const blockquoteStyles = {
  color: "inherit",
}

/**
 * @constant {Object} detailsBoxStyle - Styles for a details box within a card component.
 * @description Styling properties for a details box element within a card component:
 * - The details box has top margin.
 * - The content within the details box is right-aligned.
 */
export const detailsBoxStyles = {
  marginTop: "20px",
  textAlign: "right",
}

/**
 * @constant {Object} nameStyle - Styles for the name within a card component.
 * @description Styling properties for the name text within a card component:
 * - The name text has a bold font weight.
 */
export const nameStyles = {
  fontWeight: "bold",
}

/**
 * @constant {Object} titleStyle - Styles for the title within a card component.
 * @description Styling properties for the title text within a card component:
 * - The title text has a small font size.
 * - The color of the title text is based on the 'primary' color.
 */
export const titleStyles = {
  fontSize: "small",
  color: "onPrimaryContainer",
}

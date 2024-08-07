/**
 * @constant {Object} boxStyle - Styles for the container of the features component.
 * @description Styling properties for the box container that holds the features:
 * - `p`: Padding size of 3 for balanced spacing and comfort.
 * - `bg`: Background color set to "surfaceVariant" for a distinct visual appearance.
 * - `borderRadius`: Border radius of 4 to create rounded corners.
 * - `width`: Width set to "100%" for full width coverage.
 * - `maxWidth`: Maximum width of ["100%", "700px"] for responsive rendering.
 */
export const boxStyle = {
  p: 3,
  bg: "surfaceContainerLow",
  borderRadius: 4,
  width: "100%",
  maxWidth: ["100%", "700px"],
}

/**
 * @constant {Object} gridBoxStyle - Styles for the grid container within the features component.
 * @description Styling properties for the grid container that organizes the features:
 * - `display`: Grid display to create a structured layout.
 * - `gridTemplateColumns`: Grid template columns set to ["1fr", "1fr 1fr"] for responsive rendering.
 * - `gap`: Gap size of 4 to provide spacing between grid items.
 */
export const gridBoxStyle = {
  display: "grid",
  gridTemplateColumns: ["1fr", "1fr 1fr"],
  gap: 4,
}

/**
 * @constant {Object} featureBoxStyle - Styles for the individual feature boxes within the features component.
 * @description Styling properties for the feature boxes that contain feature information:
 * - `display`: Flex display for flexibility and alignment.
 * - `alignItems`: Align items set to "center" for centered vertical alignment.
 * - `textAlign`: Text alignment set to "left" for natural reading flow.
 * - `padding`: Padding size of 2 for spacing and visual separation.
 * - `borderRadius`: Border radius of 2 for rounded corners.
 */
export const featureBoxStyle = {
  display: "flex",
  alignItems: "center",
  textAlign: "left",
  padding: 2,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "outlineVariant",
}

/**
 * @constant {Object} iconBoxStyle - Styles for the icon container within the feature boxes.
 * @description Styling properties for the container of the icons within the feature boxes:
 * - `pr`: Right padding of 3 for spacing between the icon and the feature content.
 * - `color`: Color set to "primary" for visual emphasis.
 */
export const iconBoxStyle = {
  pr: 3,
  color: "primary",
}

/**
 * @constant {Object} headingStyle - Styles for the heading within the feature boxes.
 * @description Styling properties for the heading text within the feature boxes:
 * - `marginBottom`: Bottom margin of 1 for spacing between the heading and the description.
 */
export const headingStyle = {
  marginBottom: 1,
}

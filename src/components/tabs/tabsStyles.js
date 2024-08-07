/**
 * @constant {Object} mainBoxStyle - Styles for the main container of the tabs component.
 * @description Styling properties for the main container that holds the tabs:
 * - The container is displayed as a flex container with a column layout.
 * - Items are aligned vertically and horizontally in the center.
 * - The container has a width of 100%.
 * - Text content within the container is centered.
 * - The container has top padding.
 */
export const mainBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  textAlign: "center",
  pt: 4,
}

/**
 * @constant {Object} headingStyle - Styles for the heading within the tabs component.
 * @description Styling properties for the heading text within the tabs:
 * - The heading has bottom margin.
 */
export const headingStyle = { mb: 2 }

/**
 * @constant {Object} tabBoxStyle - Styles for the container of tab labels within the tabs component.
 * @description Styling properties for the container that holds the tab labels:
 * - The container allows horizontal scrolling if the tab labels overflow.
 * - The container is displayed as a flex container with items centered horizontally.
 * - The container has bottom margin.
 * - The container has a width of 100%.
 */
export const tabBoxStyle = {
  overflowX: "auto",
  display: "flex",
  justifyContent: "center",
  mb: 4,
  width: "100%",
}

/**
 * @constant {Function} labelBoxStyle - Styles for individual tab labels within the tabs component.
 * @param {number} activeTab - The index of the active tab.
 * @param {number} index - The index of the current tab label being rendered.
 * @returns {Object} - Styling properties for the individual tab label.
 * @description Styling properties for the individual tab labels within the tabs component:
 * - The label has a pointer cursor.
 * - The label has horizontal and vertical padding.
 * - The label has a bottom border with a different color if it's the active tab.
 * - The text color of the label changes based on the active tab.
 */
export const labelBoxStyle = (activeTab, index) => ({
  cursor: "pointer",
  px: 3,
  py: 2,
  borderBottom: activeTab === index ? "3px solid" : "none",
  borderBottomColor: "primary",
  color: activeTab === index ? "onBackground" : "gray",
})

/**
 * @constant {Object} contentBoxStyle - Styles for the container of tab content within the tabs component.
 * @description Styling properties for the container that holds the tab content:
 * - The container is displayed as a flex container with a column layout.
 * - Items are aligned vertically and horizontally in the center.
 * - The container has a width of 100%.
 */
export const contentBoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}

/**
 * Styles for the heading element in the InventoryScroll component.
 */
export const headingStyles = {
  my: 3,
  px: 1,
}

/**
 * Styles for the box element in the InventoryScroll component.
 */
export const boxStyles = {
  p: 3, // Adds some padding all around, giving it room to breathe!
  mb: 5, // Adds margin at the bottom, creating some spacing, dude!
  bg: "surfaceContainer", // Sets the background color to match the theme, making it rad!
  borderRadius: [0, 12], // Gives it a smooth border radius, combining edginess with style!
  display: "flex", // Makes it flexy, allowing for a responsive layout, bro!
  flexWrap: "nowrap", // Prevents wrapping, keeping it in line with the style!
  overflowX: "scroll", // Adds horizontal scrolling, so you can see all the awesome vehicles!
  gap: 3, // Creates a gap between the child elements, giving them room to shine!
  overflowY: "hidden", // Hides vertical overflow, keeping it clean and focused!
  scrollSnapType: "x mandatory", // Enables smooth horizontal scrolling, making it super slick!
  "&::-webkit-scrollbar": {
    display: "none", // Hides the scrollbar, dude! Who needs that eyesore?
  },
}

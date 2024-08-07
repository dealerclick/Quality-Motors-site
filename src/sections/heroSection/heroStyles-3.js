/** @jsxImportSource theme-ui */

/**
 * Styling for the hero section, dude!
 * It positions the content at the center, sets the color scheme, and
 * adjusts the height and other properties to create a rad hero experience.
 */
export const heroStyles = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "surface",
  color: "onSurface",
  overflow: "hidden",
  height: ["300px", "500px"],
  px: [0],
  zIndex: 2,
}

export const textStyles = {
  textAlign: "left",
  color: "onBackground",
  fontSize: [2, 3],
  p: [1, 2, 3],
}

/**
 * Styling for the overlay on top of the hero image, bro!
 * It adds an awesome color overlay to the hero image to create a cool visual effect.
 * You can adjust the color and transparency by modifying the background color.
 */
export const imageOverlayStyles = {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0)", // change this to adjust the overlay color and transparency
  zIndex: 1,
}

/**
 * Styling for the hero title, dude!
 * It defines the font size and margin for the hero title to make it stand out.
 */
export const heroTitleStyles = {
  fontSize: [6, 7, 8],
  mb: [2, 2],
}

/**
 * Styling for the hero subtitle, bro!
 * It defines the font size and margin for the hero subtitle to complement the title.
 */
export const heroSubtitleStyles = {
  fontSize: [2, 3, 4],
  mb: [3, 4],
}

/**
 * Styling for the hero button, dude!
 * It adds a cool box shadow, sets the background and text color, and defines
 * hover effects to make the button pop. Get ready to ride the wave!
 */
export const heroButtonStyles = {
  boxShadow: theme => `0px 4px 4px ${theme.colors.shadow}`,
  display: "flex",
  fontWeight: "bold",
  bg: "primary",
  color: "onPrimary",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    bg: "primary",
    color: "onPrimary",
  },
}

/**
 * Styling for the hero content container, bro!
 * It positions and centers the hero content within the container, ensuring
 * it fits perfectly and creates a stunning visual experience. Get ready to shine!
 */
export const heroContentContainerStyles = {
  width: "100%",
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  p: [0, 5],
}

/**
 * Styling for the hero content, dude!
 * It sets the width, height, color, background, and other properties of the hero content.
 * This creates a cool container for the title, subtitle, and button. Get ready to rock!
 */
export const heroContentStyles = {
  width: ["100%", "auto"],
  height: ["100%", "auto"],

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  p: 3,
  zIndex: 2,
  color: "onBackground",
  bg: "",
  borderRadius: 12,
}

/**
 * Styling for the image container, bro!
 * It positions the hero image within the container, ensuring it looks awesome.
 */
export const imageContainerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
}

/**
 * Styling for the static image, dude!
 * It sets the position, width, and height of the hero image to ensure it fits perfectly.
 */
export const staticImageStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
}

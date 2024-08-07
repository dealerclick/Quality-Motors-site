/**

    Styles for the BottomAppBar component, bro!
    Defines the container and button styles for the bottom app bar, dude!
    */

const bottomAppBarStyles = {
  container: {
    /**
     * The position of the container, bro!
     * Sticky at small and medium screen sizes, static at larger screen sizes, dude!
     */
    position: ["sticky", "sticky", "static"],
    bottom: 0, // Positioned at the bottom, dude!
    p: 3, // Padding, bro!
    bg: "background", // Background color, dude!
    display: ["block", "block", "none"], // Display block at small and medium screen sizes, none at larger screen sizes, bro!
  },
  button: {
    width: "100%", // Full width button, bro!
  },
}

export default bottomAppBarStyles

/**
 * Layout Component
 * @file
 * Provides a consistent layout structure for wrapping around pages in the application.
 * 
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be rendered inside the layout.
 * @param {Object} props.location - The location object containing information about the current URL, used for animation.
 */

import React from "react";
import PropTypes from "prop-types";
import { Box, ThemeProvider } from "theme-ui";
import { AnimatePresence, motion } from "framer-motion";

// Custom components and styles
import styles from "./layoutStyles";
import theme from "../../gatsby-plugin-theme-ui";
import BottomBar from "../../sections/bottomBar/BottomBar";
import Footer1 from "../../sections/footerSection/Footer-1";
import TopBar1 from "../../sections/topBarSection/TopBar-1";
import { WANTS_FOOTER, WANTS_TOP_BAR } from "../../config/strings";

// Dynamically choose the header component based on environment variable
let Header;
if (process.env.GATSBY_SELECTED_HEADER === "HEADER_2") {
  Header = require("../../sections/headerSection/Header-2").default;
} else if (process.env.GATSBY_SELECTED_HEADER === "HEADER_3") {
  Header = require("../../sections/headerSection/Header-3").default;
} else {
  Header = require("../../sections/headerSection/Header-1").default;
}

const Layout = ({ children, location }) => (
  <ThemeProvider theme={theme}>
    {/* Box from theme-ui acts as a wrapper for layout components */}
    <Box sx={styles.layout}>
      {/* Top navigation bar */}
      {WANTS_TOP_BAR &&(
      <TopBar1 />
      )}
      {/* Dynamic header based on environment setting */}
      <Header />

      {/* Main content area, where child components are rendered */}
      <Box as="main" sx={styles.main}>
        {/* AnimatePresence from framer-motion manages page transition animations */}
        <AnimatePresence mode="wait">
          {/* motion.div provides the animated effect for page transitions */}
          <motion.div
            key={location.pathname} // Unique key for animation based on the current path
            initial={{ opacity: 0 }} // Animation starts from transparent
            animate={{ opacity: 1 }} // Fades to fully opaque
            exit={{ opacity: 0 }} // Fades out on exit
            transition={{ duration: 0.1 }} // Duration of the fade effect
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Footer section of the layout */}
      {WANTS_FOOTER && (
        <Footer1 />
      )}

      {/* Bottom navigation bar */}
      <BottomBar />
    </Box>
  </ThemeProvider>
);

// Define propTypes for type checking and documentation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;

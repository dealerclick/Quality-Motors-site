/**
 * @file IndexPage.js
 *
 * This is the main landing page of the application.
 */

// Core React Import
import * as React from "react"

// Component Imports
import InventoryScroll from "../components/inventoryScroll/InventoryScroll"
import BrowseByType from "../components/browseByType/BrowseByType"
import TestimonialScroll from "../components/testimonialScroll/TestimonailScroll"

// Configuration and Utility Imports
import { DISCLAIMER, WANTS_BROWSE_BY_TYPE, WANTS_FINANCING, WANTS_FINANCING_SECTION, WANTS_INVENTORY_SCROLL, WANTS_SERVICE_SECTION, WANTS_TESTIMONIAL_SCROLL, WANTS_TRADE_SECTION } from "../config/strings"
import { HomePageHead } from "../config/heads"
import Hero1 from "../sections/heroSection/Hero-1"
import FinancingSection1 from "../sections/ctaSections/FinancingSection-1"
import TradeInSection1 from "../sections/ctaSections/TradeInSection-1"
import ServiceSection1 from "../sections/ctaSections/ServiceSection"
import { Box, Text } from "theme-ui"

/**
 * The style for the disclaimer component.
 */
const disclaimerStyle = {
  fontWeight: "lighter",
  fontSize: "12px",
  lineHeight: "8px",
}

// CTA (Call To Action) Component Imports

/**
 * IndexPage component.
 *
 * @returns {React.Element} The rendered component.
 */
const IndexPage = () => {
  return (
    <>
      <HomePageHead /> {/* SEO Metadata Configuration */}
      <Hero1 />
      {WANTS_BROWSE_BY_TYPE && <BrowseByType />}
      {WANTS_INVENTORY_SCROLL && (
        <InventoryScroll heading="Featured Vehicles" />
      )}
      {WANTS_FINANCING && WANTS_FINANCING_SECTION && <FinancingSection1 className="slide-in-left p-4" />}
      {WANTS_TRADE_SECTION && <TradeInSection1 />}
      {WANTS_SERVICE_SECTION && <ServiceSection1  className="slide-in-left" />}

      {WANTS_TESTIMONIAL_SCROLL && (
        <TestimonialScroll />
      )}
      <Box sx={{ padding: "2em" }}>
        <Text sx={disclaimerStyle}>* Disclaimer: {DISCLAIMER}.</Text>
      </Box>
    </>
  )
}

export default IndexPage

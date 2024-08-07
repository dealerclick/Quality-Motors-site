/** @jsxImportSource theme-ui */
import { Box, Heading } from "theme-ui"
import React, { useState } from "react"
import {
  mainBoxStyle,
  headingStyle,
  tabBoxStyle,
  labelBoxStyle,
  contentBoxStyle,
} from "./tabsStyles"

/**
 * @function Tabs
 * @param {Object} props - Component properties.
 * @param {string[]} props.labels - An array of tab labels.
 * @param {React.ReactNode[]} props.content - An array of tab content elements.
 * @param {string} props.title - The title of the tabs component.
 * @returns {JSX.Element} - The rendered tabs component.
 * @description A component that renders a set of tabs with associated content.
 */
const Tabs = ({ labels, content, title }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Box sx={mainBoxStyle}>
      <Heading as="h1" sx={headingStyle}>
        {title}
      </Heading>

      <Box sx={tabBoxStyle}>
        {labels.map((label, index) => (
          <Box
            key={index}
            onClick={() => setActiveTab(index)}
            sx={labelBoxStyle(activeTab, index)}
          >
            {label}
          </Box>
        ))}
      </Box>

      <Box sx={contentBoxStyle}>{content[activeTab]}</Box>
    </Box>
  )
}

export default Tabs

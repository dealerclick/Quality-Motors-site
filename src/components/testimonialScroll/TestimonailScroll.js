import React, { useState } from "react"
import { Box, Button } from "theme-ui"
import {
  GOOGLE_REVIEWS,
  YELP_REVIEWS,
  CUSTOM_REVIEWS,
} from "../../config/strings"
import TestimonialCard from "../testimonialCard/TestimonialCard"
import { containerStyle, testimonialsBoxStyle } from "./testimonialScrollStyles"

// Define base tab style within the component if specific dynamic styles are needed
const baseTabStyle = {
  cursor: "pointer",
  fontWeight: "bold",
  px: 3,
  py: 2,
  bg: "background",
  color: "onBackground",
}

const activeTabStyle = {
  bg: "primary",
  color: "onBackground",
}

const hoverTabStyle = {
  "&:hover": {
    bg: "surfaceContainer",
  },
}

const TestimonialScroll = () => {
  const [activeTab, setActiveTab] = useState("google")

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  const getTestimonialsBySource = () => {
    switch (activeTab) {
      case "google":
        return GOOGLE_REVIEWS
      case "yelp":
        return YELP_REVIEWS
      case "custom":
        return CUSTOM_REVIEWS
      default:
        return []
    }
  }

  const testimonials = getTestimonialsBySource()

  return (
    <Box sx={containerStyle}>
      <Box sx={{ mb: 3, display: "flex", justifyContent: "center", gap: 2 }}>
        {["google", "yelp", "custom"].map(tab => (
          <Button
            key={tab}
            sx={{
              ...baseTabStyle,
              ...(activeTab === tab ? activeTabStyle : hoverTabStyle),
            }}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </Box>
      <Box sx={testimonialsBoxStyle}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            testimonial={testimonial.testimonial}
            colorIndex={index % 5}
            rating={testimonial.rating}
          />
        ))}
      </Box>
    </Box>
  )
}

export default TestimonialScroll

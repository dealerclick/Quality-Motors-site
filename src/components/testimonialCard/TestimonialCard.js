import React from "react"
import PropTypes from "prop-types"
import { Box } from "theme-ui"
import { FaStar } from "react-icons/fa"
import {
  cardStyles,
  blockquoteStyles,
  detailsBoxStyles,
  nameStyles,
  titleStyles,
  starStyles,
} from "./testimonialCardStyles"

/**
 * A simple, reusable and elegant testimonial card.
 * @param {Object} props The properties for the component.
 * @param {string} props.name The name of the person providing the testimonial.
 * @param {string} props.title The title of the person providing the testimonial.
 * @param {string} props.testimonial The testimonial text.
 * @param {number} props.rating The star rating for the testimonial.
 */
function TestimonialCard({ name, title, testimonial, rating }) {
  return (
    <Box sx={cardStyles}>
      <Box sx={starStyles}>
        {[...Array(rating)].map((e, i) => (
          <FaStar key={i} />
        ))}
      </Box>
      <blockquote style={blockquoteStyles}>"{testimonial}"</blockquote>
      <Box sx={detailsBoxStyles}>
        <Box sx={nameStyles}>{name}</Box>
        <Box sx={titleStyles}>{title}</Box>
      </Box>
    </Box>
  )
}

TestimonialCard.propTypes = {
  /** The name of the person providing the testimonial. */
  name: PropTypes.string.isRequired,
  /** The title of the person providing the testimonial. */
  title: PropTypes.string.isRequired,
  /** The testimonial text. */
  testimonial: PropTypes.string.isRequired,
  /** The star rating for the testimonial. */
  rating: PropTypes.number.isRequired,
}

export default TestimonialCard

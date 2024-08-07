/**
 * @description Container style for the TestimonialScroll component.
 */
export const containerStyle = {
  mt: 3,
  py: 3,
  px: [0, 3],
}

/**
 * @description Testimonials box style for the TestimonialScroll component.
 */
export const testimonialsBoxStyle = {
  p: 3,
  my: 3,
  bg: "surfaceContainer",
  borderRadius: [0, 12],
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "scroll",
  gap: 3,
  overflowY: "hidden",
  overflow: "scroll",
  maxWidth: "100%",
  scrollSnapType: "x mandatory",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}

/**
 * @description Styles for the tabs in the TestimonialScroll component.
 */
export const tabStyle = {
  cursor: 'pointer',
  fontWeight: 'bold',
  px: 3,
  py: 2,
  bg: 'background',
  color: 'onBackground',
  '&:hover': {
    bg: 'surfaceContainer',
  },
  '&.active': {
    bg: 'primary',
    color: 'onBackground',
  }
};
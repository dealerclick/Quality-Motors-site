/**
 * @description Styling for the Vehicle Card component.
 */
export const cardStyle = {
  minWidth: "270px",
  boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.125)",
  borderRadius: "4px",
  overflow: "hidden",
  flexGrow: 0,
  my: 3,
  p: 3,
  flexShrink: 0,
  flexBasis: ["100%", "20%", "15%"],
  boxSizing: "border-box",
  justifyContent: "center",
  bg: "surface",
}

/**
 * @description Styling for the link in the Vehicle Card component.
 */
export const linkStyle = {
  display: "block",
}

/**
 * @description Styling for the image container in the Vehicle Card component.
 */
export const imageContainerStyle = {
  position: "relative",
}

/**
 * @description Styling for the delivery badge in the Vehicle Card component.
 */
export const badgeStyle = {
  bg: "primary",
  color: "background",
  px: 2,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
  py: 2,
  fontWeight: "bold",
  fontSize: "12px",
  borderRadius: "4px",
  lineHeight: "10px",
  opacity: 0.8,
}

/**
 * @description Styling for the miles badge in the Vehicle Card component.
 */
export const milesBadgeStyle = {
  bg: "secondary",
  color: "background",
  px: 2,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
  py: 2,
  fontWeight: "bold",
  fontSize: "12px",
  borderRadius: "4px",
  lineHeight: "10px",
  opacity: 0.8,
}

/**
 * @description Styling for the miles badge in the Vehicle Card component.
 */
export const badgeContainerStyle = {
  position: "absolute",
  top: "4px",
  left: "4px",
  display: "flex",
  flexDirection: "row",
  gap: "4px",
  alignItems: "end",
}

/**
 * @description Styling for the content in the Vehicle Card component.
 */
export const contentStyle = {
  p: 3,
  color: "onSurface",
  width: "60%",
}

/**
 * @description Styling for the title in the Vehicle Card component.
 */
export const titleStyle = {
  fontSize: 3,
  fontWeight: "bold",
  lineHeight: "14px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}

/**
 * @description Styling for the details in the Vehicle Card component.
 */
export const detailsStyle = {
  fontSize: 1,
  lineHeight: "14px",
  minHeight: "30px",
}

/**
 * @description Styling for the price container in the Vehicle Card component.
 */
export const priceContainerStyle = {
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  flexWrap: "wrap",
  p: 3,
  mt: 3,
  color: "onSurface",
  width: "40%",
}

/**
 * @description Styling for the price in the Vehicle Card component.
 */
export const priceStyle = {
  fontSize: 3,
  fontWeight: "bold",
  mt: 2,
  marginBottom: "0",
  lineHeight: "16px",
}

/**
 * @description Styling for the monthly payment in the Vehicle Card component.
 */
export const monthlyPaymentStyle = {
  fontSize: "12px",
  textDecoration: "none",
  lineHeight: "14px",
  color: "gray",
  fontWeight: "lighter",
}

/**
 * @description Styling for the cash down payment in the Vehicle Card component.
 */
export const cashDownStyle = {
  fontSize: "12px",
  textDecoration: "none",
  lineHeight: "14px",
  color: "gray",
  fontWeight: "lighter",
}

/**
 * @description Styling for the shipping container in the Vehicle Card component.
 */
export const shippingContainerStyle = {
  borderColor: "primaryContainer",
  py: 2,
  px: 3,
  display: "flex",
  justifyContent: "space-between",
}

/**
 * @description Styling for the shipping label in the Vehicle Card component.
 */
export const shippingLabelStyle = {
  fontSize: 1,
  fontWeight: "bold",
  color: "gray.500",
  textTransform: "uppercase",
  textAlign: "center",
}

/**
 * @description Styling for the delivery text in the Vehicle Card component.
 */
export const deliveryTextStyle = {
  fontSize: 1,
  textAlign: "center",
}

/**
 * @description Styling for the image in the Vehicle Card component.
 */
export const imageStyle = {
  height: "100%",
  objectFit: "cover",
}

/**
 * @description Styling for the certified pre-owned label in the Vehicle Card component.
 */
export const certifiedPreOwnedStyle = {
  fontSize: "12px",
  fontWeight: "lighter",
  color: "gray",
}

/**
 * @description Styling for the right-aligned details in the Vehicle Card component.
 */
export const detailsRightStyle = {
  textAlign: "right",
}


export const styles = {
  cardContainer: {
    width: "270px",
    boxShadow: theme => `0px 4px 4px ${theme.colors.shadow}`,
    borderRadius: "4px",
    overflow: "hidden",
    mb: 3,
    maxWidth: "270px",
    minWidth: "270px",
    boxSizing: "border-box",
    bg: "surface",
  },
  imageSliderContainer: {
    position: "relative",
    overflow: "hidden",
  },
  imageStyle: {
    height: "180px",
    objectFit: "cover",
  },
  labelsContainer: {
    position: "absolute",
    top: "4px",
    left: "4px",
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    alignItems: "end",
  },
  priceLabel: {
    bg: "primary",
    color: "background",
    px: 2,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    py: 2,
    fontWeight: "bold",
    fontSize: "12px",
    borderRadius: "4px",
    lineHeight: "10px",
    opacity: 0.8,
  },
  milesLabel: {
    bg: "secondary",
    color: "background",
    px: 2,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    py: 2,
    fontWeight: "bold",
    fontSize: "12px",
    borderRadius: "4px",
    lineHeight: "10px",
    opacity: 0.8,
  },
  vehicleDetailsContainer: {
    height: "100px",
  },
  inspectedText: {
    fontSize: "12px",
    fontWeight: "lighter",
    color: "gray",
    pl: 3,
    mt: 2,
  },
  detailsPricingContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  vehicleInfoContainer: {
    pl: 3,
    color: "onSurface",
    width: "60%",
    overflow: "hidden",
  },
  yearMake: {
    fontSize: 3,
    fontWeight: "bold",
    lineHeight: "14px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  modelTrimMilesContainer: {
    fontSize: 1,
    lineHeight: "16px",
    minHeight: "30px",
    display: "flex",
    flexDirection: "column",
  },
  vehiclePricingContainer: {
    color: "onSurface",
    width: "40%",
    textAlign: "right",
    pr: 3,
  },
  askingPrice: {
    fontSize: 3,
    fontWeight: "bold",
    lineHeight: "14px",
  },
  monthlyPaymentContainer: {
    textAlign: "right",
    fontSize: "12px",
    lineHeight: "16px",
    color: "gray",
    fontWeight: "lighter",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  cardFooterContainer: {
    borderColor: "primaryContainer",
    py: 2,
    px: 3,
  },
  dividerStyle: {
    mt: "3",
    mb: "2",
    width: "95%",
    mx: "auto",
  },
  footerTextContainer: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "gray.500",
    textTransform: "uppercase",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  primaryFooterText: {
    mr: 1,
  },
  secondaryFooterText: {
    textAlign: "center",
  },
}


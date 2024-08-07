export const imageBoxStyles = {
  width: ["100%", "50%"],
  display: "flex",
  alignItems: "center",
  justifyContent: ["center", "right", "right"],
}

export const imageBoxStylesRight = {
  ...imageBoxStyles,
  justifyContent: ["center", "left"],
  order: [1, 2],
}

export const imageStyles = {
  borderRadius: "12px",
  minWidth: "70%",
}

export const contentBoxStyles = {
  width: ["100%", "50%"],
  display: "flex",
  flexDirection: "column",
  alignItems: ["center", "center", "center"],
  justifyContent: "center",
  textAlign: ["center", "center", "left"],
  p: 4,
  background: "surface",
  borderRadius: "12px",
  order: [2, 1],
}

export const headingStyles = {
  pb: 3,
}

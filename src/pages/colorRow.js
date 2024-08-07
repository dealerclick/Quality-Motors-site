// this is for testing purposes. navigate to /colorRow to see the color palette

import React from "react"
import { Box, Text } from "theme-ui"

const colors = {
  primary: "#1060A4",
  onPrimary: "#FFFFFF",
  primaryContainer: "#D2E4FF",
  onPrimaryContainer: "#001C37",
  primaryFixed: "#D2E4FF",
  onPrimaryFixed: "#001C37",
  primaryFixedDim: "#A1C9FF",
  onPrimaryFixedVariant: "#004880",
  secondary: "#025CBC",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#D7E2FF",
  onSecondaryContainer: "#001B3F",
  secondaryFixed: "#D7E2FF",
  onSecondaryFixed: "#001B3F",
  secondaryFixedDim: "#ABC7FF",
  onSecondaryFixedVariant: "#004590",
  tertiary: "#815500",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#FFDDB2",
  onTertiaryContainer: "#291800",
  tertiaryFixed: "#FFDDB2",
  onTertiaryFixed: "#291800",
  tertiaryFixedDim: "#FFB94E",
  onTertiaryFixedVariant: "#624000",
  error: "#C0001F",
  onError: "#FFFFFF",
  errorContainer: "#FFDAD7",
  onErrorContainer: "#410004",
  outline: "#73777F",
  background: "#FDFCFF",
  onBackground: "#1A1C1E",
  surface: "#FAF9FD",
  onSurface: "#1A1C1E",
  surfaceVariant: "#DFE2EB",
  onSurfaceVariant: "#43474E",
  inverseSurface: "#2F3033",
  inverseOnSurface: "#F1F0F4",
  inversePrimary: "#A1C9FF",
  shadow: "#000000",
  surfaceTint: "#1060A4",
  outlineVariant: "#C3C6CF",
  scrim: "#000000",
  surfaceContainerHighest: "#E3E2E6",
  surfaceContainerHigh: "#E8E8EB",
  surfaceContainer: "#EEEDF1",
  surfaceContainerLow: "#F4F3F7",
  surfaceContainerLowest: "#FFFFFF",
  surfaceBright: "#FAF9FD",
  surfaceDim: "#DAD9DD",
  transparent: "rgba(255,255,255,0.08)",
}

const ColorBox = ({ color, label }) => (
  <Box
    sx={{
      width: "300px",
      height: "300px",
      backgroundColor: color,
      marginRight: "10px",
    }}
  >
    <Text variant="colorLabel">{label}</Text>
  </Box>
)

const ColorRow = () => (
  <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
    {Object.entries(colors).map(([key, color]) => (
      <ColorBox key={key} color={key} label={key} />
    ))}
  </Box>
)

export default ColorRow

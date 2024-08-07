import { funk } from "@theme-ui/presets"
import { lightTheme, darkTheme } from "./colorThemes"

const theme = {
  ...funk,
  initialColorModeName: "light",
  useColorSchemeMediaQuery: false,
  colors: {
    ...funk.colors,
    modes: {
      light: lightTheme.colors,
      dark: darkTheme.colors,
    },
  },
  styles: {
    ...funk.styles,
    darkImageWrapper: {
      position: "relative",
      "::before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 1,
        transition: "background-color .3s",
      },
      img: {
        position: "relative",
        zIndex: 0,
      },
    },
    lightImageWrapper: {
      img: {
        position: "relative",
        zIndex: 0,
      },
    },
    thinHr: {
      height: "1px",
      border: "none",
      backgroundColor: "outlineVariant",
      width: "85%",
      margin: "0 auto",
    },
  },
}

export default theme

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    // White primary background & UI base
    primary: {
      main: "#ffffff",
      contrastText: "#000000", // readable text on white
    },

    // Your brand color
    secondary: {
      main: "#a92427",
      contrastText: "#ffffff", // white text on brand red
    },

    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },

    text: {
      primary: "#000000",
      secondary: "#4b4b4b",
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },
});

export default theme;

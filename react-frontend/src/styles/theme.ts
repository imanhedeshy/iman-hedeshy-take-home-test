import { createTheme, ThemeOptions } from "@mui/material/styles";

interface CustomPalette {
  confetti: {
    main: string;
  };
}

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: "#6200ea",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#03dac6",
      contrastText: "#000000",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#555555",
    },
    confetti: {
      main: "#FFC107",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: "1.2",
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: "1.3",
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
  },
});

export default theme;

// src/theme.js
import { createTheme } from "@material-ui/core/styles";
import { deepPurple, green } from "@material-ui/core/colors";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: deepPurple,
    secondary: green,
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: deepPurple,
    secondary: green,
  },
});

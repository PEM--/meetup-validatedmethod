import { primary, primaryDark, secondaryDark } from './colors';
import createTheme from "spectacle/lib/themes/default";
const fontPrimary = '-apple-system, Helvetica, Rototo, Arial, sans-serif';
const theme = createTheme({
  primary: secondaryDark,
}, {
  primary: fontPrimary,
  secondary: fontPrimary,
});

export default theme;

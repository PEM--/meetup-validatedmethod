import createTheme from "spectacle/lib/themes/default";
const defaultFont = '-apple-system, Helvetica, Rototo, Arial, sans-serif';

const colors = {
  primary: '#04102a',
  secondary: 'white',
  tertiary: '#df4f4f',
  quartenary: 'white',
};

const fonts = {
  primary: defaultFont,
  secondary: defaultFont,
  tertiary: defaultFont,
  quartenary: defaultFont,
};

const theme = createTheme({
  ...colors,
}, fonts);
theme.screen.components.heading.h1.color = colors.secondary;
theme.screen.components.heading.h3.color = colors.secondary;
theme.screen.components.heading.h4.color = colors.secondary;
theme.screen.components.heading.h5.color = colors.secondary;
theme.screen.components.heading.h6.color = colors.secondary;
theme.screen.components.text.color = colors.secondary;
export default theme;

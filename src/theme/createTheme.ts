import { extendTheme } from '@mui/material/styles';

// JRS brand colors from logo:
// Navy blue (primary): #1a3d8f
// Sky blue (secondary/accent): #29b8e0
// White background, black header/footer (mmenu.vn pattern)

export const createTheme = () =>
  extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#1a3d8f',
            dark: '#122d6b',
            light: '#2d57c8',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#29b8e0',
            dark: '#1a9abe',
            light: '#6fd4f0',
            contrastText: '#ffffff',
          },
          background: {
            default: '#f8fafc',
            paper: '#ffffff',
          },
          text: {
            primary: '#0f1729',
            secondary: '#64748b',
          },
          divider: 'rgba(26, 61, 143, 0.12)',
        },
      },
    },
    typography: {
      fontFamily: "'Plus Jakarta Sans', system-ui, 'Segoe UI', Roboto, sans-serif",
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: 8 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 6, fontWeight: 600 },
          sizeLarge: { padding: '12px 28px', fontSize: '15px' },
          sizeMedium: { padding: '9px 20px' },
        },
      },
      MuiTextField: {
        defaultProps: { size: 'small' },
      },
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: 12 },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: { backgroundColor: '#ffffff', color: '#111827' },
        },
      },
    },
  });

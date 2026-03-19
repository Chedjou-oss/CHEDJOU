import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme(); // thème MUI par défaut

export function renderWithTheme(ui, options) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, {
    wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    ...options,
  });
}
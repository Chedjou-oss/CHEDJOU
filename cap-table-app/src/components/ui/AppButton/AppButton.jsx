import React from 'react';
import Button from '@mui/material/Button';
import { colors } from '../../../theme';

export default function AppButton({ label, variant = 'contained', color = 'primary', onClick }) {
  
  const colorMap = {
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
  };

  return (
    <Button
      variant={variant}
      onClick={onClick}
      style={{ backgroundColor: variant === 'contained' ? colorMap[color] : 'transparent', color: variant === 'contained' ? '#fff' : colorMap[color] }}
    >
      {label}
    </Button>
  );
}
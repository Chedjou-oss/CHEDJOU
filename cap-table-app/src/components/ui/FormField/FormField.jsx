import React from 'react';
import TextField from '@mui/material/TextField';

export default function FormField({ label, value, onChange, type = 'text', error, helperText }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      error={!!error}
      helperText={helperText}
      fullWidth
      margin="normal"
    />
  );
}
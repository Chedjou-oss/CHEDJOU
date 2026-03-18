import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

export default function DashboardLayout({ title, children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: '16px' }}>{children}</Container>
    </>
  );
}
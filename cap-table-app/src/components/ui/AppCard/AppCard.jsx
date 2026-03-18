import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default function AppCard({ title, children }) {
  return (
    <Card style={{ margin: '8px' }}>
      <CardContent>
        {title && <Typography variant="h6">{title}</Typography>}
        {children}
      </CardContent>
    </Card>
  );
}
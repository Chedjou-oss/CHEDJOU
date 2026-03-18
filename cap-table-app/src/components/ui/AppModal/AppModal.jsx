import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AppButton from '../AppButton/AppButton';

export default function AppModal({ open, title, children, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <AppButton label="Cancel" variant="outlined" onClick={onClose} />
        <AppButton label="Confirm" onClick={onConfirm} />
      </DialogActions>
    </Dialog>
  );
}
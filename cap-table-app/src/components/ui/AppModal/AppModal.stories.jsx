import React, { useState } from 'react';
import AppModal from './AppModal';
import AppButton from '../AppButton/AppButton';

export default {
  title: 'UI/AppModal',
  component: AppModal,
};

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppButton label="Open Modal" onClick={() => setOpen(true)} />
      <AppModal open={open} title="My Modal" onClose={() => setOpen(false)} onConfirm={() => { alert('Confirmed'); setOpen(false); }}>
        This is modal content
      </AppModal>
    </>
  );
};
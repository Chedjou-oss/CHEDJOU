import React, { useState } from 'react';
import FormField from './FormField';

export default {
  title: 'UI/FormField',
  component: FormField,
};

export const Default = () => {
  const [value, setValue] = useState('');
  return <FormField label="Name" value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Error = () => {
  const [value, setValue] = useState('');
  return <FormField label="Email" value={value} onChange={(e) => setValue(e.target.value)} error helperText="Invalid email" />;
};
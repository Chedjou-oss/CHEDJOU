import React from 'react';
import AppButton from './AppButton';

export default {
  title: 'UI/AppButton',
  component: AppButton,
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['contained', 'outlined', 'text'] },
    color: { control: { type: 'radio' }, options: ['primary', 'secondary', 'error'] },
    label: { control: 'text' },
  },
};

const Template = (args) => <AppButton {...args} />;

export const Contained = Template.bind({});
Contained.args = { label: 'Click Me', variant: 'contained', color: 'primary' };

export const Outlined = Template.bind({});
Outlined.args = { label: 'Click Me', variant: 'outlined', color: 'secondary' };

export const Text = Template.bind({});
Text.args = { label: 'Click Me', variant: 'text', color: 'error' };
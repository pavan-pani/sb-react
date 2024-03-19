import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {InputField} from './InputField';

const meta = {
  title: 'Example/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onBlur: { action: 'blurred' },
    onFocus: { action: 'focused' },
    onKeyPress: { action: 'keyPressed' },
  },
  } satisfies Meta<typeof InputField>;
  
export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {
        placeholder: 'Type here...',
    },
  };
  
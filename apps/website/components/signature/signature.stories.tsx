import React from 'react';
import { Signature } from './signature';
import { Meta } from '@storybook/react';
import Image from 'next/image';

export default {
  title: 'Components/Signature',
  component: Signature,
} as Meta;

export const signature = () => <Signature />;

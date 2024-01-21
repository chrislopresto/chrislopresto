import { StoryObj } from '@storybook/react';
import type { Meta } from '@storybook/react';

import { Card } from './card';
import railsConf2018Still from '../../images/chris-lopresto-speaking-at-rails-conf-2018.jpg';

type StoryComponent = React.ComponentProps<typeof Card>;

const meta: Meta<StoryComponent> = {
  title: 'Components/Card',
};
export default meta;

type Story = StoryObj<StoryComponent>;

export const Simple: Story = {
  render: () => (
    <Card>
      <Card.Body>I am a simple card</Card.Body>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card>
      <Card.Image alt="Chris LoPresto speaking at RailsConf 2018" src={railsConf2018Still} />
      <Card.Body>I am a card with an image</Card.Body>
    </Card>
  ),
};

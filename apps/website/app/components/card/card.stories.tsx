import { StoryObj } from '@storybook/react';
import type { Meta } from '@storybook/react';

import { Card, cardImageCss } from './card';
import railsConf2018Still from '../../images/chris-lopresto-speaking-at-rails-conf-2018.jpg';
import { css } from '../../../styled-system/css';

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

export const CardImageShowcase: Story = {
  render: () => (
    <>
      {cardImageCss.variantMap.variant.map((variant) => (
        <div key={`example-${variant}`}>
          <p
            className={css({
              textStyle: 'body',
              mb: '1',
            })}
          >
            {variant}
          </p>
          <Card.Image variant={variant} alt="Chris LoPresto speaking at RailsConf 2018" src={railsConf2018Still} />
        </div>
      ))}
    </>
  ),
};

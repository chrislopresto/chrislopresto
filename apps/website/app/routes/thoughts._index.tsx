import type { MetaFunction } from '@remix-run/cloudflare';
import { Heading } from '../components/heading/heading';
import { Link } from '@remix-run/react';

import { css } from '../../styled-system/css';
import { grid, gridItem } from '../../styled-system/patterns';

import emberConf2016Still from '../images/chris-lopresto-speaking-at-ember-conf-2016.jpg';
import railsConf2018Still from '../images/chris-lopresto-speaking-at-rails-conf-2018.jpg';
import { Card } from '../components/card/card';
import { SystemStyleObject } from '../../styled-system/types';

export const meta: MetaFunction = () => {
  return [{ title: 'Chris LoPresto | About' }, { name: 'description', content: 'Chris LoPresto bio' }];
};

export default function Index() {
  const cardCss: SystemStyleObject = { height: { base: 'unset', lg: '100%' } };
  return (
    <div>
      <Heading variant="heading" as="h1" css={{ mb: '1' }}>
        Thoughts
      </Heading>

      <section>
        <div className={css({ vr: true })}>
          <Heading as="h2" variant="subheading">
            Conference Talks
          </Heading>
          <p>Here are some conference talks I have given.</p>
        </div>
        <div className={grid({ columns: 2, gridAutoRows: '1fr', gap: { base: '5', sm: '4' } })}>
          <div className={gridItem({ colSpan: { base: 3, lg: 1 } })}>
            <Link to="/thoughts/hot-swapping-our-rails-front-end-in-secret">
              <Card css={cardCss}>
                <Card.Image
                  variant="stylized"
                  alt="Chris LoPresto speaking at RailsConf 2018"
                  src={railsConf2018Still}
                />
                <Card.Body>
                  <Heading variant="heading">Hot Swapping Our Rails Front End in Secret</Heading>
                  <Heading variant="subheading" css={{ mb: '1' }}>
                    RailsConf 2018
                  </Heading>
                  <p className={css({ textStyle: 'body' })}>
                    “Everything looks like this, but we want it to look like that.” This is the story of how the team at
                    Betterment replaced our front end code base to launch our new brand. Across all our apps. In secret.
                    And make everything responsive. In 8 weeks.
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className={gridItem({ colSpan: { base: 3, lg: 1 } })}>
            <Link to="/thoughts/living-style-guide-driven-development">
              <Card css={cardCss}>
                <Card.Image
                  variant="stylized"
                  alt="Chris LoPresto speaking at EmberConf 2016"
                  src={emberConf2016Still}
                />
                <Card.Body>
                  <Heading variant="heading">Living Style Guide Driven Development</Heading>
                  <Heading variant="subheading" css={{ mb: '1' }}>
                    EmberConf 2016
                  </Heading>
                  <p className={css({ textStyle: 'body' })}>
                    Creating a living design system is essential to developing a cohesive experience for users over the
                    lifetime of a product. Ember tooling and conventions make this easier than you might expect.
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

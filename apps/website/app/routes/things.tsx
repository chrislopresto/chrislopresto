import type { MetaFunction } from 'react-router';
import { Heading } from '../components/heading/heading';
import { css } from '../../styled-system/css';
import { things } from '../things/things';
import { externalLinkProps } from '../utilities/link';

export const meta: MetaFunction = () => {
  return [{ title: 'Chris LoPresto | Things' }, { name: 'description', content: 'Chris LoPresto | Things' }];
};

export default function Things() {
  return (
    <div>
      <Heading variant="heading" as="h1" css={{ mb: '1' }}>
        Things
      </Heading>
      <p className={css({ textStyle: 'body', vr: true })}>A few things I appreciate in life.</p>
      <ul className={css({ listStyle: 'none', padding: 0, margin: 0 })}>
        {things.map((thing) => (
          <li key={thing.name} className={css({ vr: true })}>
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '4',
              })}
            >
              <img
                src={thing.image}
                alt={thing.name}
                className={css({
                  width: '80px',
                  height: '80px',
                  borderRadius: 'md',
                  objectFit: 'cover',
                  flexShrink: 0,
                })}
              />
              <div>
                <Heading variant="subheading" as="h2" css={{ mb: '0.5' }}>
                  {thing.name}
                </Heading>
                <p className={css({ textStyle: 'body' })}>{thing.description}</p>
                {thing.link && (
                  <a
                    href={thing.link}
                    {...externalLinkProps}
                    className={css({
                      textStyle: 'body',
                      color: 'link',
                      _hover: { textDecoration: 'underline' },
                    })}
                  >
                    Learn more
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

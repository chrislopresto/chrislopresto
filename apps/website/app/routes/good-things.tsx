import type { MetaFunction } from 'react-router';
import { useSearchParams } from 'react-router';
import { Heading } from '../components/heading/heading';
import { css } from '../../styled-system/css';
import { things } from '../good-things/good-things';
import { externalLinkProps } from '../utilities/link';

export const meta: MetaFunction = () => {
  return [{ title: 'Chris LoPresto | Good Things' }, { name: 'description', content: 'Chris LoPresto | Good Things' }];
};

const allTags = [...new Set(things.flatMap((t) => t.tags))].sort();

export default function Things() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTags = searchParams.get('tags')?.split(',').filter(Boolean) ?? [];

  const filteredThings = activeTags.length > 0 ? things.filter((t) => t.tags.some((tag) => activeTags.includes(tag))) : things;

  function toggleTag(tag: string) {
    setSearchParams(
      (prev) => {
        const current = prev.get('tags')?.split(',').filter(Boolean) ?? [];
        const next = current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag];
        if (next.length === 0) {
          prev.delete('tags');
        } else {
          prev.set('tags', next.join(','));
        }
        return prev;
      },
      { replace: true, preventScrollReset: true },
    );
  }

  function clearTags() {
    setSearchParams(
      (prev) => {
        prev.delete('tags');
        return prev;
      },
      { replace: true, preventScrollReset: true },
    );
  }

  return (
    <div>
      <Heading variant="heading" as="h1" css={{ mb: '1' }}>
        Good Things
      </Heading>
      <p className={css({ textStyle: 'body', vr: true })}>A few good things I appreciate in life.</p>
      <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '2', mb: '4' })}>
        <button
          onClick={clearTags}
          className={css({
            textStyle: 'subheading',
            px: '2',
            py: '1',
            borderRadius: 'md',
            border: '1px solid',
            borderColor: activeTags.length === 0 ? { _light: 'teal.600', _dark: 'teal.400' } : 'border',
            backgroundColor: activeTags.length === 0 ? { _light: 'teal.600', _dark: 'teal.700' } : 'transparent',
            color: activeTags.length === 0 ? 'white' : 'default',
            cursor: 'pointer',
            textTransform: 'lowercase',
          })}
        >
          all
        </button>
        {allTags.map((tag) => {
          const isActive = activeTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={css({
                textStyle: 'subheading',
                px: '2',
                py: '1',
                borderRadius: 'md',
                border: '1px solid',
                borderColor: isActive ? { _light: 'teal.600', _dark: 'teal.400' } : 'border',
                backgroundColor: isActive ? { _light: 'teal.600', _dark: 'teal.700' } : 'transparent',
                color: isActive ? 'white' : 'default',
                cursor: 'pointer',
                textTransform: 'lowercase',
              })}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <ul className={css({ listStyle: 'none', padding: 0, margin: 0 })}>
        {filteredThings.map((thing) => (
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
                <p className={css({ textStyle: 'body' })}>
                  {typeof thing.description === 'function' ? thing.description() : thing.description}
                </p>
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

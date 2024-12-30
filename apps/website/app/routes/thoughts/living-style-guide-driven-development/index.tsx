import type { MetaFunction } from 'react-router';
import { Link as RemixLink } from 'react-router';
import { Heading } from '../../../components/heading/heading';
import { css } from '../../../../styled-system/css';
import { Link } from '../../../components/link/link';
import { externalLinkProps } from '../../../utilities/link';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Living Style Guide Driven Development' },
    { name: 'description', content: 'Chris LoPresto | Living Style Guide Driven Development' },
  ];
};

export default function Index() {
  return (
    <div>
      <section className={css({ vr: true })}>
        <Heading as="h2" variant="subtitle">
          Living Style Guide Driven Development
        </Heading>
        <p>EmberConf 2016</p>
      </section>
      <section className={css({ vr: true })}>
        <Heading as="h3" variant="heading">
          Synopsis
        </Heading>
        <p className={css({ vr: true })}>
          Creating a living design system is essential to developing a cohesive experience for users over the lifetime
          of a product. Ember tooling and conventions make this easier than you might expect.
        </p>
        <p>
          By organizing your application functionality into Ember components, you can easily build a living style guide
          to showcase key features, design patterns, and user interactions. This fashion of style guide driven
          development enables a rapid implementation and feedback cycle, a comprehensive overview of key features, and
          the blissful feeling of providing order in a chaotic world.
        </p>
      </section>
      <section className={css({ vr: true })}>
        <Heading as="h3" variant="heading">
          Video
        </Heading>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Z1lL_Zo62h0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <Link asChild>
          <RemixLink to="transcript">Full transcript</RemixLink>
        </Link>
      </section>
      <section className={css({ vr: true })}>
        <Heading as="h3" variant="heading">
          Slides
        </Heading>
        <Link asChild>
          <RemixLink to="slides" {...externalLinkProps}>
            <img
              alt="Title slide for the EmberConf 2016 presentation Chris gave called Living Style Guide Driven Development"
              src="https://get.chrislopresto.com/living-style-guide-driven-development/0000.png"
            />
          </RemixLink>
        </Link>
      </section>
    </div>
  );
}

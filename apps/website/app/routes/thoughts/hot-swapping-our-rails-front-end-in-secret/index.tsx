import type { MetaFunction } from 'react-router';
import { Link as RemixLink } from 'react-router';
import { Heading } from '../../../components/heading/heading';
import { css } from '../../../../styled-system/css';
import { Link } from '../../../components/link/link';
import { externalLinkProps } from '../../../utilities/link';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Hot Swapping Our Rails Front End in Secret' },
    { name: 'description', content: 'Chris LoPresto | Hot Swapping Our Rails Front End in Secret' },
  ];
};

export default function Index() {
  return (
    <div>
      <section className={css({ vr: true })}>
        <Heading as="h2" variant="subtitle">
          Hot Swapping Our Rails Front End in Secret
        </Heading>
        <p>RailsConf 2018</p>
      </section>
      <section className={css({ vr: true })}>
        <Heading as="h3" variant="heading">
          Synopsis
        </Heading>
        <p className={css({ vr: true })}>
          “Everything looks like this, but we want it to look like that.” This is the story of how the team at
          Betterment replaced our front end code base to launch our new brand. Across all our apps. In secret. And make
          everything responsive. In 8 weeks.
        </p>
        <p className={css({ vr: true })}>
          Rails conventions come in handy when a wholesale UI transformation is called for. Learn how we launched a
          design system, dark deployed an all-new view layer, and unveiled our new brand identity right on schedule.
        </p>
        <p className={css({ vr: true })}>
          We shipped a lot of code extremely quickly yet managed to elevate code quality and capabilities in the
          process.
        </p>
        <p>Constraint breeds creativity.</p>
      </section>
      <section className={css({ vr: true })}>
        <Heading as="h3" variant="heading">
          Video
        </Heading>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Egumr5KiTNI"
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
              alt="Title slide for the RailsConf 2018 presentation Chris gave called Hot Swapping Our Rails Front End in Secret"
              src="https://get.chrislopresto.com/betterment-rebranding-bonanza/0000.png"
            />
          </RemixLink>
        </Link>
      </section>
    </div>
  );
}

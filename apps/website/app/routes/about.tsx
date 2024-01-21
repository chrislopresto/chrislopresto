import type { MetaFunction } from '@remix-run/cloudflare';
import { Heading } from '../components/heading/heading';
import { Signature } from '../components/signature/signature';
import { Link } from '@remix-run/react';

import chrisLouiseSpin from '../images/chris-louise-spin.jpg';
import { css } from '../../styled-system/css';
import { Nav } from '../components/nav/nav';

export const meta: MetaFunction = () => {
  return [{ title: 'Chris LoPresto | About' }, { name: 'description', content: 'Chris LoPresto bio' }];
};

export default function Index() {
  return (
    <div>
      <Heading as="h1" css={{ mb: '1' }}>
        About Chris
      </Heading>
      <Nav css={{ mb: 4 }} />
      <img
        src={chrisLouiseSpin}
        alt="Chris and Louise playing a game of ping pong"
        className={css({
          borderRadius: 'md',
          boxShadow: '4px 4px 0 token(colors.teal.200)',
          border: 'solid 2px token(colors.indigo.400)',
          vr: true,
        })}
      />

      <section>
        <Heading variant="heading">Now</Heading>
        <p className={css({ vr: true })}>
          Chris is a software engineering leader and musician. He lives in New York City with his wife Louise (pictured)
          and Boston Terrier Roland (surprisingly not pictured).
        </p>
        <Heading variant="heading">Then</Heading>
        <p className={css({ vr: true })}>
          Chris LoPresto grew up as an oldest child in Delaware, the oldest state. He picked up degrees in Jazz
          Performance (piano) and Computer Science at Exit 9 of the NJ Turnpike before continuing on up to New York
          City.
        </p>
        <Heading variant="heading">Music</Heading>
        <p className={css({ vr: true })}>
          Chris has performed at iconic venues<sup>1</sup> and dive bars
          <sup>2</sup> around the world
          <sup>3</sup>, most notably with Roc Nation / Epic Records recording artist Hugo. Chris has performed on Late
          Night with David Letterman, Jimmy Kimmel Live!, X Factor, and morning shows that film far too early.
        </p>
        <Heading variant="heading">Tech</Heading>
        <p className={css({ vr: true })}>
          Chris is an an engineering leader with experience building teams and inspiring change. He has a track record
          of accelerating product teams while leveling up tech teams. Over the course of his career, Chris has played
          with Patriot Missile System schematics, been CTO of a venture funded startup, given conference talks, and
          accrued several stories.
        </p>
        <Heading variant="heading">Otherwise</Heading>
        <p className={css({ vr: true })}>
          More miscellaneously, Chris is an Eagle Scout who has visited 46 of the 50 states and ridden a private
          elevator with a pope
          <sup>4</sup>. He is always game to debate which is better, cake or pie
          <sup>5</sup>.
        </p>
        <Link to="/">
          <Signature css={{ color: 'lime.500' }} />
        </Link>
      </section>

      <section>
        <br />
        <br />
        <hr />
        <p>
          <br />
          <sup>1</sup>&nbsp;Carnegie Hall
          <br />
          <sup>2</sup>&nbsp;The Ground Floor
          <br />
          <sup>3</sup>&nbsp;Olympic arena in Beijing
          <br />
          <sup>4</sup>&nbsp;Neither of us was pope at the time
          <br />
          <sup>5</sup>&nbsp;Cake
          <br />
        </p>
      </section>
    </div>
  );
}

import type { MetaFunction } from '@remix-run/cloudflare';
import { Signature } from '../components/signature/signature';
import { Link } from '@remix-run/react';

import chrisLouiseSpin from '../images/chris-louise-spin.jpg';

export const meta: MetaFunction = () => {
  return [{ title: 'Chris LoPresto | About' }, { name: 'description', content: 'Chris LoPresto bio' }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>About Chris</h1>
      <img src={chrisLouiseSpin} alt="Chris and Louise playing a game of ping pong" />

      <section>
        <h2>Now</h2>
        <p>
          Chris is a software engineering leader and musician. He lives in New York City with his wife Louise (pictured)
          and Boston Terrier Roland (surprisingly not pictured).
        </p>
        <h2>Then</h2>
        <p>
          Chris LoPresto grew up as an oldest child in Delaware, the oldest state. He picked up degrees in Jazz
          Performance (piano) and Computer Science at Exit 9 of the NJ Turnpike before continuing on up to New York
          City.
        </p>
        <h2>Music</h2>
        <p>
          Chris has performed at iconic venues<sup>1</sup> and dive bars
          <sup>2</sup> around the world
          <sup>3</sup>, most notably with Roc Nation / Epic Records recording artist Hugo. Chris has performed on Late
          Night with David Letterman, Jimmy Kimmel Live!, X Factor, and morning shows that film far too early.
        </p>
        <h2>Tech</h2>
        <p>
          Chris is an an engineering leader with experience building teams and inspiring change He has a track record of
          accelerating product teams while leveling up tech teams. Over the course of his career, Chris has played with
          Patriot Missile System schematics, been CTO of a venture funded startup, given conference talks, and accrued
          several stories.
        </p>
        <h2>Otherwise</h2>
        <p>
          More miscellaneously, Chris is an Eagle Scout who has visited 46 of the 50 states and ridden a private
          elevator with a pope
          <sup>4</sup>. He is always game to debate which is better, cake or pie
          <sup>5</sup>.
        </p>
      </section>

      <section>
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

      <Link to="/">
        <Signature />
      </Link>
    </div>
  );
}

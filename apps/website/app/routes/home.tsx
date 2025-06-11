import type { Route } from './+types/home';
import type { MetaFunction } from 'react-router';
import { Heading } from '../components/heading/heading';
import { css } from '../../styled-system/css';
import chrisLouiseSpin from '../images/chris-louise-spin.jpg';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Engineering leader. Musician.' },
    { name: 'description', content: 'Chris LoPresto | Engineering leader. Musician.' },
  ];
};

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Index({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <img
        src={chrisLouiseSpin}
        alt="Chris and Louise playing a game of ping pong"
        className={css({
          borderRadius: 'md',
          boxShadow: '4px 4px 0 token(colors.teal.200)',
          border: 'solid 2px token(colors.indigo.400)',
          mb: '3',
        })}
      />

      <section>
        <Heading as="h2" variant="subtitle" css={{ vr: true }}>
          About Chris
        </Heading>
        <p className={css({ vr: true })}>
          I am a software engineering leader and musician. I live within striking distance of New York City with my wife
          Louise, daughter Lark, and Boston Terrier Roland. I grew up as an oldest child in Delaware, the oldest state.
          I have degrees in Jazz Performance (piano) and Computer Science. {loaderData.message}
        </p>
        <Heading variant="heading">A music bio...</Heading>
        <p className={css({ vr: true })}>
          Chris has performed at iconic venues<sup>1</sup> and dive bars
          <sup>2</sup> around the world
          <sup>3</sup>, most notably with Roc Nation / Epic Records recording artist Hugo. Chris has performed on Late
          Night with David Letterman, Jimmy Kimmel Live!, X Factor, and morning shows that film far too early.
        </p>
        <Heading variant="heading">A software bio...</Heading>
        <p className={css({ vr: true })}>
          Chris is an an engineering leader with experience building teams and inspiring change. He has a track record
          of accelerating product development while leveling up engineering and design orgs. Over the course of his
          career, Chris has played with Patriot Missile System schematics, been CTO of a venture-funded startup, given
          conference talks, and accrued several stories.
        </p>
        <Heading variant="heading">A miscellaneous blurb...</Heading>
        <p className={css({ vr: true })}>
          Chris is an Eagle Scout who has visited 47 of the 50 states and ridden a private elevator with a pope
          <sup>4</sup>. He is always game to debate which is better, cake or pie
          <sup>5</sup>.
        </p>
      </section>

      <section className={css({ textStyle: 'deemphasized' })}>
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

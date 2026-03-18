import type { Route } from './+types/home';
import type { MetaFunction } from 'react-router';
import { useSearchParams } from 'react-router';
import { Tabs } from '@base-ui/react/tabs';
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

const TAB_VALUES = ['software', 'music', 'misc'] as const;
type TabValue = (typeof TAB_VALUES)[number];

const footnoteSeparatorCss = css({
  mt: '8',
  mb: '2',
  width: '40%',
  border: 'none',
  height: '2px',
  background: 'linear-gradient(to right, token(colors.border), transparent)',
});

const tabListCss = css({
  display: 'flex',
  gap: '1',
  mb: '4',
  borderBottom: 'solid 2px token(colors.border)',
});

const tabTriggerCss = css({
  textStyle: 'subheading',
  textTransform: 'uppercase',
  px: '4',
  py: '2',
  cursor: 'pointer',
  fontFamily: 'inherit',
  color: 'token(colors.gray.400)',
  borderRadius: 'sm',
  borderBottom: 'solid 3px transparent',
  mb: '-2px',
  transition: 'color 0.15s, border-color 0.15s',
  textDecoration: 'none',
  _hover: {
    color: 'default',
  },
  '&[data-active]': {
    color: 'default',
    borderBottomColor: { _light: 'token(colors.teal.400)', _dark: 'token(colors.teal.500)' },
  },
});

export default function Index({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const rawBio = searchParams.get('bio');
  const currentTab: TabValue = TAB_VALUES.includes(rawBio as TabValue) ? (rawBio as TabValue) : 'software';

  function handleTabChange(value: string | null) {
    if (!value) return;
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value === 'software') {
          next.delete('bio');
        } else {
          next.set('bio', value);
        }
        return next;
      },
      { replace: false, preventScrollReset: true },
    );
  }

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

      <Heading as="h2" variant="subtitle" css={{ vr: true }}>
        About Chris
      </Heading>

      <p className={css({ vr: true })}>
        I am a software engineering leader and musician. I live within striking distance of New York City with my wife,
        daughter, and dog. I grew up as an oldest child in Delaware, the oldest state. I have degrees in Jazz
        Performance (piano) and Computer Science. {loaderData.message}
      </p>

      <Tabs.Root value={currentTab} onValueChange={handleTabChange}>
        <Tabs.List className={tabListCss}>
          <Tabs.Tab value="software" className={tabTriggerCss}>
            Software
          </Tabs.Tab>
          <Tabs.Tab value="music" className={tabTriggerCss}>
            Music
          </Tabs.Tab>
          <Tabs.Tab value="misc" className={tabTriggerCss}>
            Misc
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="software">
          <section>
            <Heading variant="heading">A software bio...</Heading>
            <p className={css({ vr: true })}>
              Chris is an an engineering leader with experience building teams and inspiring change. He has a track
              record of accelerating product development while leveling up engineering and design orgs. Over the course
              of his career, Chris has played with Patriot Missile System schematics, been CTO of a venture-funded
              startup, given conference talks, and accrued several stories.
            </p>
          </section>
        </Tabs.Panel>

        <Tabs.Panel value="music">
          <section>
            <Heading variant="heading">A music bio...</Heading>
            <p className={css({ vr: true })}>
              Chris has performed at iconic venues<sup>1</sup> and dive bars
              <sup>2</sup> around the world
              <sup>3</sup>, most notably with Roc Nation / Epic Records recording artist Hugo. Chris has performed on
              Late Night with David Letterman, Jimmy Kimmel Live!, X Factor, and morning shows that film far too early.
            </p>
            <section className={css({ textStyle: 'deemphasized' })}>
              <hr className={footnoteSeparatorCss} />
              <p>
                <sup>1</sup>&nbsp;Carnegie Hall
                <br />
                <sup>2</sup>&nbsp;The Ground Floor
                <br />
                <sup>3</sup>&nbsp;Olympic arena in Beijing
                <br />
              </p>
            </section>
          </section>
        </Tabs.Panel>

        <Tabs.Panel value="misc">
          <section>
            <Heading variant="heading">A miscellaneous blurb...</Heading>
            <p className={css({ vr: true })}>
              Chris is an Eagle Scout who has visited 47 of the 50 states and ridden a private elevator with a pope
              <sup>4</sup>. He is always game to debate which is better, cake or pie
              <sup>5</sup>.
            </p>
            <section className={css({ textStyle: 'deemphasized' })}>
              <hr className={footnoteSeparatorCss} />
              <p>
                <sup>4</sup>&nbsp;Neither of us was pope at the time
                <br />
                <sup>5</sup>&nbsp;Cake
                <br />
              </p>
            </section>
          </section>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
}

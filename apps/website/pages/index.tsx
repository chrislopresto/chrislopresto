import Head from 'next/head';
import Image from 'next/image';
import { Signature } from '../components/signature';
import { darkTheme } from '../styles/stitches.config';
import { Div, Footer, Main } from '../components/elements';

export default function Home() {
  return (
    <Div
      css={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Head>
        <title>Chris LoPresto | Engineering leader. Musician.</title>
      </Head>
      <Main
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '$green8',
        }}
      >
        <h1>Chris LoPresto</h1>

        <p>
          Thanks for stopping by. Back in the day, websites used to greet readers conversationally. In that spirit,
          hello.
        </p>
      </Main>

      <Footer css={{ width: '100%', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Signature />
      </Footer>
    </Div>
  );
}

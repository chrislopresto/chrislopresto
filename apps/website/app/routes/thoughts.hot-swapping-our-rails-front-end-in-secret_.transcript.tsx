import type { MetaFunction } from '@remix-run/cloudflare';

import Transcript from '../talks/hot-swapping-our-rails-front-end-in-secret.transcript.mdx';
import React from 'react';
import { TranscriptStyler } from '../components/transcript-styler/transcript-styler';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Hot Swapping Our Rails Front End in Secret' },
    { name: 'description', content: 'Chris LoPresto | Hot Swapping Our Rails Front End in Secret' },
  ];
};

export default function Index() {
  return (
    <TranscriptStyler>
      <Transcript />
    </TranscriptStyler>
  );
}

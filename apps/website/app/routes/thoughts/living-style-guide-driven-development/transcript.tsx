import type { MetaFunction } from 'react-router';
import Transcript from '../../../talks/living-style-guide-driven-development.transcript.mdx';
import { TranscriptStyler } from '../../../components/transcript-styler/transcript-styler';

export const meta: MetaFunction = () => {
  return [
    { title: 'Chris LoPresto | Living Style Guide Driven Development' },
    { name: 'description', content: 'Chris LoPresto | Living Style Guide Driven Development' },
  ];
};

export default function Index() {
  return (
    <TranscriptStyler>
      <Transcript />
    </TranscriptStyler>
  );
}

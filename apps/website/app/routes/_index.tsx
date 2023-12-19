import type { MetaFunction } from '@remix-run/cloudflare';
import { Signature } from '../components/signature/signature';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Hi there</h1>
      <Signature />
    </div>
  );
}

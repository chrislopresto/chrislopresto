import { getSessionContext } from 'session-context';
import type { PlatformProxy } from 'wrangler';

type GetLoadContextArgs = {
  request: Request;
  context: {
    cloudflare: Omit<PlatformProxy<Env>, 'dispose' | 'caches' | 'cf'> & {
      caches: PlatformProxy<Env>['caches'] | CacheStorage;
      cf: Request['cf'];
    };
  };
};

export function getLoadContext({ context }: GetLoadContextArgs) {
  const store = getSessionContext();
  store.env = context.cloudflare.env;
  // Support `process.env`
  // setProcessEnv(context.cloudflare.env);
  return context;
}

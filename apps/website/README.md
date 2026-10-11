# Chris LoPresto website

## Local development

Install [mise](https://mise.jdx.dev/getting-started.html) (`brew bundle` on macOS),
then run from the repository root:

```sh
mise trust
mise install
mise run setup
cd apps/website
mise trust
mise run dev
```

The root mise config manages Node and pnpm. Node comes from `.node-version`; pnpm comes
from the root `package.json` `packageManager` field, including when Dependabot
updates it. The website's `apps/website/mise.toml` inherits those tools and pins Tilt.

From `apps/website`, `mise run dev` starts the existing Tiltfile with the website, Storybook,
and test watcher. For an additional session with offset ports:

```sh
mise run dev -- -- --session 1
```

Use `mise tasks ls` to see the available tasks. From the repository root,
`mise run check` runs formatting,
lint, type checking, and tests. Tasks delegate to `package.json` scripts; those
scripts remain the place to define build and application commands. Root tasks
operate across the workspace; website tasks (`dev`, `dev:down`, and `storybook`)
live in the website config and run from that directory.

To use `node`, `pnpm`, and `tilt` directly, activate mise in your shell (for zsh,
add `eval "$(mise activate zsh)"` to `~/.zshrc`). Without shell activation, use
`mise exec -- pnpm ...` or `mise exec -- tilt ...`. Tilt inherits the mise tool
environment when started through `mise run dev`.

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.

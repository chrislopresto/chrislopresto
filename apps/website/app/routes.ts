// eslint-disable-next-line import/no-unresolved
import { type RouteConfig, route, index, layout } from '@react-router/dev/routes';

export default [
  layout('./layouts/main.tsx', [
    index('./routes/home.tsx'),
    route('/thoughts', './routes/thoughts.tsx'),
    route(
      '/thoughts/hot-swapping-our-rails-front-end-in-secret',
      './routes/thoughts/hot-swapping-our-rails-front-end-in-secret/index.tsx',
    ),
    route(
      '/thoughts/hot-swapping-our-rails-front-end-in-secret/transcript',
      './routes/thoughts/hot-swapping-our-rails-front-end-in-secret/transcript.tsx',
    ),

    route(
      '/thoughts/living-style-guide-driven-development',
      './routes/thoughts/living-style-guide-driven-development/index.tsx',
    ),
    route(
      '/thoughts/living-style-guide-driven-development/transcript',
      './routes/thoughts/living-style-guide-driven-development/transcript.tsx',
    ),
  ]),
  route(
    '/thoughts/hot-swapping-our-rails-front-end-in-secret/slides',
    './routes/thoughts/hot-swapping-our-rails-front-end-in-secret/slides.tsx',
  ),
  route(
    '/thoughts/living-style-guide-driven-development/slides',
    './routes/thoughts/living-style-guide-driven-development/slides.tsx',
  ),
] satisfies RouteConfig;

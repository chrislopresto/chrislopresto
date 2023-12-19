#!/bin/bash
set -uxo pipefail

pnpm storybook:clean
pnpm build-storybook -s public -o ./storybook-build
cp -r storybook-build/. ./public/storybook

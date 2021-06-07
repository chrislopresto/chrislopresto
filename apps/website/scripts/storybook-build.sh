#!/bin/bash
set -uxo pipefail

yarn storybook:clean
yarn build-storybook -s public -o ./storybook-build
cp -r storybook-build/. ./public/storybook

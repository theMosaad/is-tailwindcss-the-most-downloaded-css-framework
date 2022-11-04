# Remix on Vercel's Edge runtime

## Demo

https://remix-vercel-edge-mosaad.vercel.app

## Build and Run Remix (Local)

```
npm i && npm run dev:build && npm run dev:start
```

## Clone vercel/vercel

```bash
git clone git@github.com:vercel/vercel.git
```

## Fetch the PR with the patch

```bash
# ./vercel
git fetch origin pull/8784/head:remix-edge
```

## Checkout the created branch

```bash
# ./vercel
git checkout remix-edge
```

## Build Vercel

```bash
# ./vercel
yarn && yarn build
```

## Build Remix (Prod)

```bash
# ./vercel/packages/cli
yarn dev build --cwd ~/code/is-tailwindcss-the-most-downloaded-css-framework --prod
```

# Deploy Remix

```bash
# ./vercel/packages/cli
yarn dev deploy ~/code/is-tailwindcss-the-most-downloaded-css-framework --prebuilt --prod
```

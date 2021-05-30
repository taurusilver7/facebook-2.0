# Facebook 2.0

> A next-js powered fb chat clone styled with tailwind & hosted on vercel.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup tailwindcss

- `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

- Open the ./styles/globals.css file that Next.js generates for you by default and use the @tailwind directive to include Tailwind's _base_, _components_, and _utilities_ styles, replacing the original file contents:

- Next, generate your **tailwind.config.js** and **postcss.config.js** files:

- In your **tailwind.config.js** file, configure the purge option with the paths to all of your pages and components so Tailwind can tree-shake unused styles in production builds:
- `purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],`

- The Image component is a webp (compressed img element) exist only in next js.
- The source of the image is added to the configured list of host names for the next js to search the host for resource.
- Add next.config.js to add domains to the project.

## NextAuth Setup

> authentication for next js. It gets the session for the user on the server when server rendering.

- To add NextAuth.js to a project create a file called [...nextauth].js in pages/api/auth.
- Add authentication to a next js app using the [documentation](https://next-auth.js.org/getting-started/example)
- The next-auth gives multiple providers for the app authentication. Check the facebook providers at [facebook developer](https://www.developer.facebook.com). Get the ID & secret from the created app in the developer site & store them as env variables.
- Change the NEXT_AUTH_URL to the domain name of the website after deployment for redirecting the authentication to app.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

The pages/api/hello.js is an express api feature for the next.js project used for authentication.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

FACEBOOK_ID = 5807612302612692
FACEBOOK_SECRET = 8e77f3b3b7d81f94d505aa576f19a506
NEXT_AUTH_URL = http://localhost:3000

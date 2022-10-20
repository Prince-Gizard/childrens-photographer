**Child photographer** is an online portfolio showcasing the work of a children's photographer based in Moscow.

[Website](https://childrens-photographer.vercel.app/)

## Stack

- [Next.js](https://nextjs.org) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [MUI](https://mui.com) - A comprehensive suite of UI tools to help you ship new features faster.
- [Strapi](https://strapi.com) - Headless CMS, open-source, javascript, enabling content-rich experiences to be created, managed and exposed to any digital device.
- [Vercel](https://vercel.com) - Is the platform for frontend developers.
- [Heroku](https://heroku.com) - Is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. 

## Features

- Content management powered by [Strapi](https://strapi.io) headless CMS.
- Static pre-rendered pages with [Incremental Static Regeneration](https://vercel.com/docs/concepts/next.js/incremental-static-regeneration) (ISR).
- Contact form integrated with [Sendgrid](https://sendgrid.com) API.
- Responsive photo gallery with synchronized thumbnail controls and scrolling into view on smaller viewports.

## Project structure

- `pages/api/*` - [API Routes](https://nextjs.org/blog/next-9#api-routes) powering contact form submissions.
- `pages/work*` - Static pre-rendered photo gallery pages generated with data fetched from Strapi.
- `pages/*` - All other static pages.
- `src/components/*` - Various components used throughout the site.
- `src/lib/*` - Code for Strapi services.
- `src/utils/*` - Utilities for photo gallery thumnbail scrolling.
- `src/theme.js` - MUI custom component styles for application.
- `public/*` - Static assets.

## Screenshot

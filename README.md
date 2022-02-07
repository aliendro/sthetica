## About this app

This is an simple artwork ecommerce. It was created using [Vite](https://vitejs.dev/), [React](https://reactjs.org), [Typescript](https://www.typescriptlang.org/), [CommerceJS](https://commercejs.com/), [Redux Toolkit](https://redux-toolkit.js.org/) and [TailwindCSS](https://tailwindcss.com/). Artwork provided by [sthethica](https://instagram.com/sthetica)

### [Live demo](https://sthetica.netlify.com)

## Screenshots

| Home                                        | Page not found                                       |
| ------------------------------------------- | ---------------------------------------------------- |
| ![home](https://i.ibb.co/Vg9C6kD/home.webp) | ![page not found](https://i.ibb.co/hY6qcs6/404.webp) |

| Login                                         | Anime details                                            |
| --------------------------------------------- | -------------------------------------------------------- |
| ![login](https://i.ibb.co/n7xK7sw/login.webp) | ![single page](https://i.ibb.co/CJrWPrs/singlepage.webp) |

## How to run

#### First clone repository using

```sh
git clone https://github.com/aliendro/sthethica
```

#### Go to animehub directory

```sh
cd sthethica
```

#### Install dependencies

```
npm install or yarn
```

#### Run development server

```
npm run dev or yarn dev
```

#### Access animehub using your web browser

```
https://localhost:3000
```

## Technical comments

This project is entirely made using Typescript, aiming type safety and better maintenance over time. Cart management and product listings are managed using CommerceJS integrated with Stripe as a payment provider. At the time this project was started, CommerceJS did not provide updated React bindings using hooks, so I decided to design custom hooks using RTK Query to fetch, post and cache data from their servers.

## Known issues

Pending UI and busy indicators could be reworked, adding some spinners or loading animations to improve UX. There is a considerable delay doing cart operations (add, remove and update) due to CommerceJS API.

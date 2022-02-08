## About this app

This is a simple artwork ecommerce. It was created using [Vite](https://vitejs.dev/), [React](https://reactjs.org), [Typescript](https://www.typescriptlang.org/), [CommerceJS](https://commercejs.com/), [Redux Toolkit](https://redux-toolkit.js.org/) and [TailwindCSS](https://tailwindcss.com/). Artwork provided by [sthethica](https://instagram.com/sthetica)

### [Live demo](https://sthetica.netlify.com)

## How to run

#### First clone repository using

```sh
git clone https://github.com/aliendro/sthetica
```

#### Go to animehub directory

```sh
cd sthetica
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

## Screenshots

| Home                                     | Navbar                                     |
| ---------------------------------------- | ------------------------------------------ |
| ![home](https://i.ibb.co/Ryv64P1/1.webp) | ![navbar](https://i.ibb.co/JqqntmW/2.webp) |

| Cart                                              | Shipping details                                     |
| ------------------------------------------------- | ---------------------------------------------------- |
| ![shopping cart](https://i.ibb.co/wpLmJH6/3.webp) | ![shipping details](https://i.ibb.co/ZT7cbLs/4.webp) |

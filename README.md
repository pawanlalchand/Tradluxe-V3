# Tradluxe Website

![image](./imgs/1.png)

Built using ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

## Setup

- clone the repository
- run `npm i` in root folder
- then run `npm run dev`

## Options

To add, change delete products on website go to `src/context/BrandsContext.jsx`

```json
{
    name: "Mesta Wine", -> change the brand name here
    logo: Logo3, -> change the brand logo here
    image: Img3, -> change the brand img for landing page here
    flag: "🇮🇹", -> change the brand country here
    subline: "With Love, From France", -> change the brand tagline/subline here
    content:
        "Made in France with Non-GMO ingredients. Full of flavour and buttery goodness. A bit of La Mere Poulard's product will take your tastebuds to France.", -> change the brand content here
    link: "mesta-wine", -> change the brand link here (it has to be unique)
    bg: MestaBg,
    shorthand: "Mesta Wine", -> change the brand shorthand for breadcrumb navigation here
    isLaunched: Boolean, true/false-> true if the product is launched on tradluxe
    products: [
        {
          name: "Mesta Rosado Tempranillo Organic Rose Wine from Spain", -> change the product name here
          price: "$29.90",-> change the product price here
          quantity: "750 ml", -> change the quantity name here
          img: Mesta1, -> change the product image here
          link: "https://tradluxe.myshopify.com/collections/mesta/products/mesta-rosado-tempranillo-organic-rose-wine-from-spain", -> change the product shopify link here
        },
        {
          name: "Mesta Verdejo Organic White Wine from Spain",
          price: "$29.90",
          quantity: "750 ml",
          img: Mesta2,
          link: "https://tradluxe.myshopify.com/collections/mesta/products/mesta-organic-white-wine-from-spain-verdejo-750ml",
        },
        {
          name: "Mesta Tempranillo Organic Red Wine from Spain",
          price: "$32.90",
          quantity: "750 ml",
          img: Mesta3,
          link: "https://tradluxe.myshopify.com/collections/mesta/products/mesta-tempranillo-organic-red-wine-from-spain",
        },
        {
          name: "Mesta Garnacha Organic Red Wine from Spain",
          price: "$32.90",
          quantity: "750 ml",
          img: Mesta4,
          link: "https://tradluxe.myshopify.com/collections/mesta/products/mesta-garnacha-organic-red-wine-from-spain",
        },
        // add more products here in the same format
    ],
},

```
